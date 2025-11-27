var REG_NONE = NewRegistrar("none");
var REG_GANDI = NewRegistrar("gandi_v5");
var PROVIDER = NewDnsProvider("cloudflare");

var DOMAIN;
var REGISTRAR;
var DYNAMIC_RECORDS;

var QUALIFY = function (name) {
  return name + "." + DOMAIN + ".";
};

function loadTemplate(template) {
  return function (domain, registrar) {
    DOMAIN = domain;
    REGISTRAR = registrar;

    require("src/" + template + ".js");
  };
}

/**
 * Create A, optional AAAA, and optional HTTPS (SVCB) records for an OSM web service,
 * with optional Cloudflare proxy support.
 *
 * @param {string} name                - Hostname (e.g. "www").
 * @param {string[]} servers           - Required array of servers.
 * @param {Object} [options]           - Optional settings for HTTPS and Cloudflare.
 * @param {boolean} [options.h1=false]  - If true, sets HTTPS apn=http1.1
 * @param {boolean} [options.h2=true]  - If true, sets HTTPS apn=h2
 * @param {boolean} [options.h3=false]  - If true, sets HTTPS apn=h3
 * @param {boolean} [options.cfproxy=false] - If true, enables Cloudflare proxy on A/AAAA.
 *
 */
function osm_web_service(
  name,
  servers,
  options
) {

  // If servers is a string, convert to a single-element array
  if (typeof servers === "string") {
    servers = [servers];
  }

  if (options === undefined) {
    options = {};
  }

  // Set default values for options.h1, options.h2, and options.h3
  options.h1 = options.h1 !== undefined ? options.h1 : false;
  options.h2 = options.h2 !== undefined ? options.h2 : true;
  options.h3 = options.h3 !== undefined ? options.h3 : false;

  var records = [];
  var ipv4s = [];
  var ipv6s = [];

  servers.forEach(function(serverName) {
    if (IPV4[serverName]) {
      ipv4s.push(IPV4[serverName]);
      if (!options.cfproxy) {
        records.push(A(name, IPV4[serverName]));
      } else {
        records.push(A(name, IPV4[serverName], CF_PROXY_ON));
      }
    }
    if (IPV6[serverName]) {
      ipv6s.push(IPV6[serverName]);
      if (!options.cfproxy) {
        records.push(AAAA(name, IPV6[serverName]));
      } else {
        records.push(AAAA(name, IPV6[serverName], CF_PROXY_ON));
      }
    }
  });

  if (ipv4s.length === 0 && ipv6s.length === 0) {
    throw new Error("An IPv4 or IPv6 address is required for " + name + " service");
  }

  //
  // Build a parameter string for DNSControl HTTPS() syntax.
  // Example: "ipv4hint=1.2.3.4,1.2.3.5 ipv6hint=2001:db8::1,2001:db8::2 alpn=h2"
  //
  var paramParts = [];
  if (ipv4s.length > 0) {
    // Join IPv4 addresses with comma+space
    paramParts.push("ipv4hint=" + ipv4s.join(","));
  }
  if (ipv6s.length > 0) {
    // Join IPv6 addresses with comma+space
    paramParts.push("ipv6hint=" + ipv6s.join(","));
  }

  if (options.h1 || options.h2 || options.h3) {
    var paramPartsALPN = [];
    if (options.h3) {
      paramPartsALPN.push("h3");
    }
    if (options.h2) {
      paramPartsALPN.push("h2");
    }
    if (options.h1) {
      paramPartsALPN.push("http/1.1");
    }
    paramParts.push("alpn=" + paramPartsALPN.join(","));
  }

  // Join the parts with a space
  var paramString = paramParts.join(" ");

  // Create the HTTPS record with 4 arguments
  records.push(HTTPS(name, 1, ".", paramString));


  return records;
}

// Ensure that the reverse DNS records are in RFC 4183 notation
REVCOMPAT("rfc4183");

var IPV4 = require("src/ipv4.json");
var IPV6 = require("src/ipv6.json");

var HOST_RECORDS = [];

for (var name in IPV4) {
  HOST_RECORDS.push(A(name, IPV4[name]));
}

for (var name in IPV6) {
  HOST_RECORDS.push(AAAA(name, IPV6[name]));
}

var OPENSTREETMAP = loadTemplate("openstreetmap");
var OPENSTREETMAP_MINIMAL = loadTemplate("openstreetmap-minimal");

require("include/sshfp.js");
require("include/nominatim.js");

try {
  require("include/geo.js");
} catch (e) {
  var GEO_NS_RECORDS = [];
}

// Publish CAA records indicating that only letsencrypt and globalsign (Fastly) should issue certificates
var OSM_CAA = [
  CAA_BUILDER({
    label: "@",
    ttl: "1h",
    iodef: "mailto:hostmaster@openstreetmap.org",
    issue: [
      "letsencrypt.org",
      "globalsign.com",   // Used by Fastly for CDN certificates
    ],
    issuewild: [
      "letsencrypt.org",
      "globalsign.com",   // Used by Fastly for CDN certificates
    ],
  }),
];

OPENSTREETMAP("openstreetmap.org", REG_GANDI);
OPENSTREETMAP("openstreetmap.com", REG_GANDI);
OPENSTREETMAP("openstreetmap.net", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.ca", REG_GANDI); // Richard Weait managed the registration
OPENSTREETMAP("openstreetmap.eu", REG_NONE); // fossgis.de manages the registration
OPENSTREETMAP("openstreetmap.pro", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.gay", REG_GANDI);
OPENSTREETMAP("openstreetmaps.org", REG_GANDI);
OPENSTREETMAP("osm.org", REG_GANDI);
OPENSTREETMAP("openmaps.org", REG_GANDI);
OPENSTREETMAP("openstreetmap.io", REG_GANDI);
OPENSTREETMAP("osm.io", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.li", REG_GANDI);
OPENSTREETMAP("openworldmap.org", REG_GANDI);
OPENSTREETMAP("freeosm.org", REG_GANDI);
OPENSTREETMAP("open-maps.org", REG_GANDI);
OPENSTREETMAP("open-maps.com", REG_GANDI);
OPENSTREETMAP("osmbugs.org", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.ai", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.am", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.fi", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.gr", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.me", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.mx", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.pe", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.ph", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.se", REG_GANDI); // Transfer to OSMF care 23 Sept 2025
OPENSTREETMAP_MINIMAL("openstreetmap.sg", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.tv", REG_GANDI);
OPENSTREETMAP_MINIMAL("openstreetmap.wales", REG_GANDI);
OPENSTREETMAP("openstreetmapdata.org", REG_GANDI);

// Disable due to registration issue
// OPENSTREETMAP("openstreetmap.al", REG_NONE);

D_EXTEND("openstreetmap.org",
  CNAME("_acme-challenge.tile", "bxve5ryiwwv7woiraq.fastly-validations.com.", TTL("10m")),

  // Uptime site at StatusCake
  CNAME("uptime", "uptimessl-new.statuscake.com."),

  HOST_RECORDS,
  SSHFP_RECORDS,
  GEO_NS_RECORDS,
  NOMINATIM_RECORDS
);

D_EXTEND("osm.org",
  CNAME("_acme-challenge.tile", "21gvdfyyxjoc4lmsem.fastly-validations.com.", TTL("10m")),

  HOST_RECORDS,
  SSHFP_RECORDS
);

// Add TXT records for Fastly domain verification
D_EXTEND("openstreetmap.com",
    TXT("@", "fastly-domain-delegation-fddelt00562353-11-27-25")
);

// Add TXT records for Fastly domain verification
D_EXTEND("openstreetmaps.org",
    TXT("@", "fastly-domain-delegation-fddelt00562353-11-27-25")
);

// Mastodon redirects to en.osm.town
var OPENSTREETMAP_TOWN = loadTemplate("openstreetmap-town");
OPENSTREETMAP_TOWN("openstreetmap.town", REG_GANDI);

// Domain owned by Amanda McCann
// osm.town

// Managed independently by Guillaume Rischard
// openstreetmap.lu
// osm.lu

var OSM_LI = loadTemplate("osm-li");

OSM_LI("osm.li", REG_GANDI);

var OPENSTREETMAP_NZ = loadTemplate("openstreetmap-nz");

OPENSTREETMAP_NZ("openstreetmap.nz", REG_GANDI);
OPENSTREETMAP_NZ("openstreetmap.org.nz", REG_GANDI);

var OPENSTREETMAP_UK = loadTemplate("openstreetmap-uk");

OPENSTREETMAP_UK("openstreetmap.uk", REG_GANDI);
OPENSTREETMAP_UK("openstreetmap.org.uk", REG_GANDI);
OPENSTREETMAP_UK("openstreetmap.co.uk", REG_GANDI);

var OPENSTREETMAP_ZA = loadTemplate("openstreetmap-za");

OPENSTREETMAP_ZA("openstreetmap.org.za", REG_NONE); // Registration managed by Grant Slater via https://www.vweb.co.za/
OPENSTREETMAP_ZA("osm.org.za", REG_NONE); // Registration managed by Grant Slater via https://www.vweb.co.za/

var OSMFOUNDATION = loadTemplate("osmfoundation");

OSMFOUNDATION("osmfoundation.org", REG_GANDI);

var STATEOFTHEMAP = loadTemplate("stateofthemap");

STATEOFTHEMAP("stateofthemap.org", REG_GANDI);
STATEOFTHEMAP("stateofthemap.com", REG_GANDI);
STATEOFTHEMAP("sotm.org", REG_GANDI);

// The domain is registation is managed by FOSSGIS.de
var STATEOFTHEMAP_EU = loadTemplate("stateofthemap-eu");
STATEOFTHEMAP_EU("stateofthemap.eu", REG_NONE);

// State of the Map Madagascar
var OPENSTREETMAP_MG = loadTemplate("openstreetmap-mg");
OPENSTREETMAP_MG("openstreetmap.mg", REG_GANDI);

var OPENGEODATA = loadTemplate("opengeodata");
OPENGEODATA("opengeodata.org", REG_GANDI);

var SWITCH2OSM = loadTemplate("switch2osm");

SWITCH2OSM("switch2osm.org", REG_GANDI);
SWITCH2OSM("switch2osm.com", REG_GANDI);

var OSM2PGSQL = loadTemplate("osm2pgsql");

OSM2PGSQL("osm2pgsql.org", REG_GANDI);
OSM2PGSQL("osm2pgsql.com", REG_GANDI);

var IDEDITOR = loadTemplate("ideditor");

IDEDITOR("ideditor.com", REG_GANDI);

var OSMWIKI = loadTemplate("osm-wiki");
OSMWIKI("osm.wiki", REG_GANDI);

var PTR_HE_AMS_IPV4 = loadTemplate("ptr_he_ams_ipv4");

PTR_HE_AMS_IPV4(REV("184.104.179.128/27"), REG_NONE);

var PTR_HE_AMS_IPV6 = loadTemplate("ptr_he_ams_ipv6");

PTR_HE_AMS_IPV6(REV("2001:470:1:fa1::/64"), REG_NONE);

var PTR_HE_DUB_IPV4 = loadTemplate("ptr_he_dub_ipv4");

PTR_HE_DUB_IPV4(REV("184.104.226.96/27"), REG_NONE);

var PTR_HE_DUB_IPV6 = loadTemplate("ptr_he_dub_ipv6");

PTR_HE_DUB_IPV6(REV("2001:470:1:b3b::/64"), REG_NONE);

var PTR_EQUINIX_AMS_IPV4 = loadTemplate("ptr_equinix_ams_ipv4");

PTR_EQUINIX_AMS_IPV4(REV("82.199.86.96/27"), REG_NONE);

var PTR_EQUINIX_AMS_IPV6 = loadTemplate("ptr_equinix_ams_ipv6");

PTR_EQUINIX_AMS_IPV6(REV("2001:4d78:500:5e3::/64"), REG_NONE);

var PTR_EQUINIX_DUB_IPV4 = loadTemplate("ptr_equinix_dub_ipv4");

PTR_EQUINIX_DUB_IPV4(REV("87.252.214.96/27"), REG_NONE);

var PTR_EQUINIX_DUB_IPV6 = loadTemplate("ptr_equinix_dub_ipv6");

PTR_EQUINIX_DUB_IPV6(REV("2001:4d78:fe03:1c::/64"), REG_NONE);

// No immediate plans
// External DNS and hosting still up
// freethepostcode.org

// External DNS and hosting
// openstreetmap.cymru
