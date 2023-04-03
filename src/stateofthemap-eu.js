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

  // MX("@", 1, "mail.openstreetmap.at."),

  // site hosted on github pages

  ALIAS("@", "osmbe.github.io."),
  CNAME("www", "osmbe.github.io.")

);
