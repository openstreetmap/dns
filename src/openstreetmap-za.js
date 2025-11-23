D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Include OSM standard CAA records
  OSM_CAA,

  // Let the main domain handle the email

  MX("@", 10, "a.mx.openstreetmap.org."),

  // Delegate SPF policy to the main domain

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",      // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Delegate MTA-STS policy to the main domain

  CNAME("_mta-sts", "_mta-sts.openstreetmap.org."),

  // Main web site

  ALIAS("@", "www.openstreetmap.org."),
  CNAME("www", "www.openstreetmap.org."),
  CNAME("api", "api.openstreetmap.org."),

  // Aerial imagery sites

  osm_web_service("aerial", "lockheed"),
  osm_web_service("a.aerial", "lockheed"),
  osm_web_service("b.aerial", "lockheed"),
  osm_web_service("c.aerial", "lockheed"),

  osm_web_service("coct.aerial", "lockheed"),
  osm_web_service("a.coct.aerial", "lockheed"),
  osm_web_service("b.coct.aerial", "lockheed"),
  osm_web_service("c.coct.aerial", "lockheed"),

  osm_web_service("topo", "lockheed"),
  osm_web_service("a.topo", "lockheed"),
  osm_web_service("b.topo", "lockheed"),
  osm_web_service("c.topo", "lockheed"),

  osm_web_service("namibia-topo", "lockheed"),
  osm_web_service("a.namibia-topo", "lockheed"),
  osm_web_service("b.namibia-topo", "lockheed"),
  osm_web_service("c.namibia-topo", "lockheed"),

);
