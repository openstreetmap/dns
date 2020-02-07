D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA("@", "issue", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "issuewild", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "iodef", "mailto:hostmaster@openstreetmap.org"),

  // Main web server and it's aliases

  A("@", "193.60.236.19", TTL("10m")),
  A("old", "193.60.236.19", TTL("10m")),
  A("www", "193.60.236.19", TTL("10m"))

);
