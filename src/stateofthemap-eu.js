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

  // Let openstreetmap.at handle email

  MX("@", 1, "mail.openstreetmap.at."),

  // Main web server and it's aliases

  A("@", "88.198.206.107"),
  A("www", "88.198.206.107")

);
