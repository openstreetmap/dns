D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  // CAA_BUILDER({
  //   label: "@",
  //   iodef: "mailto:hostmaster@openstreetmap.org",
  //   issue: [
  //     "letsencrypt.org",
  //   ],
  //   issuewild: [
  //     "letsencrypt.org",
  //   ],
  // }),

  // Let openstreetmap.at handle email

  // MX("@", 1, "mail.openstreetmap.at."),

  // Main web server and it's aliases

  A("@", "185.199.108.153"),
  A("@", "185.199.109.153"),
  A("@", "185.199.110.153"),
  A("@", "185.199.111.153"),

);
