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

  ALIAS("@", "openstreetmap-polska.github.io."),
  CNAME("www", "openstreetmap-polska.github.io."),

  // Previous editions

  A("2014", "49.12.5.171"),
  CNAME("2023", "osmbe.github.io."),
  CNAME("2024", "openstreetmap-polska.github.io."),

);
