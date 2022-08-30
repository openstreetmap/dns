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

  // Main web server and it's aliases

  A("@", "138.201.190.130"),
  AAAA("@", "2a01:4f8:1c17:6433::2"),
  A("www", "138.201.190.130"),
  AAAA("www", "2a01:4f8:1c17:6433::2"),

  // Test server for osm2pgsql development
  A("test", "135.181.221.216")

);
