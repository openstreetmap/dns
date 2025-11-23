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

  // Redirect en.openstreetmap.town to en.osm.town

  osm_web_service("en", "naga"),

);
