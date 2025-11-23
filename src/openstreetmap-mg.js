D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Include OSM standard CAA records
  OSM_CAA,

  // Block email delivery

  TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
  TXT("*._domainkey", "v=DKIM1; p="),
  TXT("@", "v=spf1 -all"),

  ALIAS("@", "www.openstreetmap.org."),
  CNAME("www", "www.openstreetmap.org."),

  // Site hosted on github pages

  CNAME("sotm2024", "openstreetmap-madagascar.github.io."),

);