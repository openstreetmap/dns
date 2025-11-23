D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Include OSM standard CAA records
  OSM_CAA,

  // Delegate SPF policy to the main domain

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Main web server and it's aliases

  osm_web_service("@", "naga"),
  osm_web_service("www", "naga"),

);
