D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA("@", "issue", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "issuewild", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "iodef", "mailto:hostmaster@openstreetmap.org"),

  // Main web server and it's aliases

  A("@", RIDLEY_IPV4, TTL("10m")),
  A("www", RIDLEY_IPV4, TTL("10m"))

);
