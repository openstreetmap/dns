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

  // Block email delivery

  TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
  TXT("*._domainkey", "v=DKIM1; p="),
  TXT("@", "v=spf1 -all"),

  // Site hosted on github pages

  ALIAS("@", "openstreetmap-madagascar.github.io."),
  CNAME("www", "openstreetmap-madagascar.github.io."),

  CNAME("sotm2024", "openstreetmap-madagascar.github.io."),

);