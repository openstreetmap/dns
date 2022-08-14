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

  MX("@", 1, "openstreetmap.at.", TTL("1h")),

  // Main web server and it's aliases

  A("@", "88.198.206.107", TTL("10m")),
  A("www", "88.198.206.107", TTL("10m"))

);
