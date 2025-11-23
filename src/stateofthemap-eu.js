D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Include OSM standard CAA records
  OSM_CAA,

  // Email delivery
  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:secureserver.net",
      "-all"
    ]
  }),

  TXT("_dmarc", "v=DMARC1; p=none;"),

  CNAME("k2._domainkey", "dkim2.mcsv.net."),
  CNAME("k3._domainkey", "dkim3.mcsv.net."),
  A("mail", "92.205.4.228"),

  MX("@", 10, "mail"),

  // Web service for stateofthemap.eu index site
  osm_web_service("@", "naga"),
  osm_web_service("www", "naga"),

  // 2025 SoTM site
  CNAME("2025", "osm-uk.github.io."),

  // Previous editions

  A("2014", "49.12.5.171"),
  CNAME("2023", "osmbe.github.io."),
  CNAME("2024", "openstreetmap-polska.github.io."),

);
