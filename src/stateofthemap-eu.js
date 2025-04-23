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

  A("@", "92.205.4.228"),
  A("www", "92.205.4.228"),

  // Previous editions

  A("2014", "49.12.5.171"),
  CNAME("2023", "osmbe.github.io."),
  CNAME("2024", "openstreetmap-polska.github.io."),

);
