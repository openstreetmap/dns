D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA("@", "issue", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "issuewild", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "iodef", "mailto:hostmaster@openstreetmap.org"),

  // Main web server and it's aliases

  A("@", "138.201.190.130"),
  AAAA("@", "2a01:4f8:1c17:6433::1"),
  A("www", "138.201.190.130"),
  AAAA("www", "2a01:4f8:1c17:6433::1")

);
