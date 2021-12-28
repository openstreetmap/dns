D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA_BUILDER({
    label: "@",
    ttl: "1h",
    iodef: "mailto:hostmaster@openstreetmap.org",
    issue: [
      "letsencrypt.org",
    ],
    issuewild: [
      "letsencrypt.org",
    ],
  }),

  // Main web server and it's aliases

  A("@", "138.201.190.130", TTL("10m")),
  AAAA("@", "2a01:4f8:1c17:6433::2", TTL("10m")),
  A("www", "138.201.190.130", TTL("10m")),
  AAAA("www", "2a01:4f8:1c17:6433::2", TTL("10m"))

);
