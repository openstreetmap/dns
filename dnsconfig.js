var REG_NONE = NewRegistrar("none", "NONE");
var REG_GANDI = NewRegistrar("gandi_v5", "GANDI_V5");
var PROVIDER = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

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
    DYNAMIC_RECORDS = [];

    for (var i = 2; i < arguments.length; i++) {
      DYNAMIC_RECORDS = DYNAMIC_RECORDS.concat(arguments[i]);
    }

    require("src/" + template + ".js");
  };
}

require("src/hosts.js");

var OPENSTREETMAP = loadTemplate("openstreetmap");

require("include/sshfp.js");
require("include/tile.js");
require("include/render.js");
require("include/nominatim.js");

OPENSTREETMAP("openstreetmap.org", REG_GANDI, SSHFP_RECORDS, TILE_RECORDS, RENDER_RECORDS, NOMINATIM_RECORDS);
OPENSTREETMAP("openstreetmap.com", REG_GANDI);
OPENSTREETMAP("openstreetmap.net", REG_GANDI);
OPENSTREETMAP("openstreetmap.ca", REG_GANDI);
OPENSTREETMAP("openstreetmap.eu", REG_NONE);
OPENSTREETMAP("openstreetmap.pro", REG_GANDI);
OPENSTREETMAP("openstreetmap.gay", REG_GANDI);
OPENSTREETMAP("openstreetmaps.org", REG_GANDI);
OPENSTREETMAP("osm.org", REG_GANDI);
OPENSTREETMAP("openmaps.org", REG_GANDI);
OPENSTREETMAP("openstreetmap.io", REG_GANDI);
OPENSTREETMAP("osm.io", REG_GANDI);
OPENSTREETMAP("openstreetmap.li", REG_GANDI);
OPENSTREETMAP("openworldmap.org", REG_GANDI);
OPENSTREETMAP("freeosm.org", REG_GANDI);
OPENSTREETMAP("open-maps.org", REG_GANDI);
OPENSTREETMAP("open-maps.com", REG_GANDI);
OPENSTREETMAP("osmbugs.org", REG_GANDI);
OPENSTREETMAP("freethepostcode.org", REG_GANDI);
OPENSTREETMAP("openstreetmap.ai", REG_GANDI);
OPENSTREETMAP("openstreetmap.am", REG_GANDI);
OPENSTREETMAP("openstreetmap.cymru", REG_GANDI);
OPENSTREETMAP("openstreetmap.fi", REG_GANDI);
OPENSTREETMAP("openstreetmap.gr", REG_GANDI);
OPENSTREETMAP("openstreetmap.me", REG_GANDI);
OPENSTREETMAP("openstreetmap.mx", REG_GANDI);
OPENSTREETMAP("openstreetmap.nz", REG_GANDI);
OPENSTREETMAP("openstreetmap.pe", REG_GANDI);
OPENSTREETMAP("openstreetmap.ph", REG_GANDI);
OPENSTREETMAP("openstreetmap.sg", REG_GANDI);
OPENSTREETMAP("openstreetmap.tv", REG_GANDI);
OPENSTREETMAP("openstreetmap.wales", REG_GANDI);
OPENSTREETMAP("openstreetmapdata.org", REG_GANDI);
OPENSTREETMAP("openstreetmap.al", REG_NONE);

var OSM_LI = loadTemplate("osm-li");

OSM_LI("osm.li", REG_GANDI);

var OPENSTREETMAP_UK = loadTemplate("openstreetmap-uk");

OPENSTREETMAP_UK("openstreetmap.uk", REG_GANDI);
OPENSTREETMAP_UK("openstreetmap.org.uk", REG_GANDI);
OPENSTREETMAP_UK("openstreetmap.co.uk", REG_GANDI);

var OPENSTREETMAP_ZA = loadTemplate("openstreetmap-za");

OPENSTREETMAP_ZA("openstreetmap.org.za", REG_NONE);
OPENSTREETMAP_ZA("osm.org.za", REG_NONE);

var OSMFOUNDATION = loadTemplate("osmfoundation");

OSMFOUNDATION("osmfoundation.org", REG_GANDI);

var STATEOFTHEMAP = loadTemplate("stateofthemap");

STATEOFTHEMAP("stateofthemap.org", REG_GANDI);
STATEOFTHEMAP("stateofthemap.com", REG_GANDI);
STATEOFTHEMAP("sotm.org", REG_GANDI);

var STATEOFTHEMAP_EU = loadTemplate("stateofthemap-eu");

STATEOFTHEMAP_EU("stateofthemap.eu", REG_NONE);

var OPENGEODATA = loadTemplate("opengeodata");
OPENGEODATA("opengeodata.org", REG_GANDI);

var SWITCH2OSM = loadTemplate("switch2osm");

SWITCH2OSM("switch2osm.org", REG_GANDI);
SWITCH2OSM("switch2osm.com", REG_GANDI);

var OSM2PGSQL = loadTemplate("osm2pgsql");

OSM2PGSQL("osm2pgsql.org", REG_GANDI);
OSM2PGSQL("osm2pgsql.com", REG_GANDI);
