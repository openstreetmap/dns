var REGISTRAR = NewRegistrar("none", "NONE");
var PROVIDER = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

var CF_TTL_ANY = TTL(1);

DEFAULTS(DefaultTTL("24h"));

var DOMAIN;
var DYNAMIC_RECORDS;

var QUALIFY = function (name) {
  return name + "." + DOMAIN + ".";
};

function loadTemplate(template) {
  return function (domain) {
    DOMAIN = domain;
    DYNAMIC_RECORDS = [];
    
    for (var i = 1; i < arguments.length; i++) {
      DYNAMIC_RECORDS = DYNAMIC_RECORDS.concat(arguments[i]);
    }
    
    require("src/" + template + ".js");
  };
}

var OPENSTREETMAP = loadTemplate("openstreetmap");

require("include/tile.js");
require("include/render.js");

OPENSTREETMAP("openstreetmap.org", TILE_RECORDS, RENDER_RECORDS);
OPENSTREETMAP("openstreetmap.com");
OPENSTREETMAP("openstreetmap.net");
OPENSTREETMAP("openstreetmap.ca");
OPENSTREETMAP("openstreetmap.eu");
OPENSTREETMAP("openstreetmap.pro");
OPENSTREETMAP("openstreetmaps.org");
OPENSTREETMAP("osm.org");
OPENSTREETMAP("openmaps.org");
OPENSTREETMAP("openstreetmap.io");
OPENSTREETMAP("osm.io");
OPENSTREETMAP("openworldmap.org");
OPENSTREETMAP("freeosm.org");
OPENSTREETMAP("open-maps.org");
OPENSTREETMAP("open-maps.com");
OPENSTREETMAP("osmbugs.org");

var OPENSTREETMAP_UK = loadTemplate("openstreetmap-uk");

OPENSTREETMAP_UK("openstreetmap.uk");
OPENSTREETMAP_UK("openstreetmap.org.uk");
OPENSTREETMAP_UK("openstreetmap.co.uk");

var OPENSTREETMAP_ZA = loadTemplate("openstreetmap-za");

OPENSTREETMAP_UK("openstreetmap.org.za");
OPENSTREETMAP_UK("osm.org.za");

var OSMFOUNDATION = loadTemplate("osmfoundation");

OSMFOUNDATION("osmfoundation.org");

var STATEOFTHEMAP = loadTemplate("stateofthemap");

STATEOFTHEMAP("stateofthemap.org");
STATEOFTHEMAP("stateofthemap.com");
STATEOFTHEMAP("sotm.org");

var STATEOFTHEMAP_EU = loadTemplate("stateofthemap-eu");

STATEOFTHEMAP("stateofthemap.eu");

var OPENGEODATA = loadTemplate("opengeodata");

OPENGEODATA("opengeodata.org");

var SWITCH2OSM = loadTemplate("switch2osm");

SWITCH2OSM("switch2osm.org");
SWITCH2OSM("switch2osm.com");
