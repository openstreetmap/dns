D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA_BUILDER({
    label: "@",
    iodef: "mailto:hostmaster@openstreetmap.org",
    issue: [
      "letsencrypt.org",
    ],
    issuewild: [
      "letsencrypt.org",
    ],
  }),

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

  MX("mail", 10, "mail"),

  // 2025 SoTM site

  ALIAS("@", "osm-uk.github.io.", CF_PROXY_ON),
  CNAME("www", "osm-uk.github.io.", CF_PROXY_ON),
  CF_SINGLE_REDIRECT("sotm-eu-root", 302, "stateofthemap.eu", "2025.stateofthemap.eu"),
  CF_SINGLE_REDIRECT("soth-eu-year", 302, "www.stateofthemap.eu", "2025.stateofthemap.eu"),

  CNAME("2025", "osm-uk.github.io."),

  // Previous editions

  A("2014", "49.12.5.171"),
  CNAME("2023", "osmbe.github.io."),
  CNAME("2024", "openstreetmap-polska.github.io."),

);
