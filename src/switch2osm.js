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

  // Delegate SPF policy to the main domain

  SPF_BUILDER({
    label: "@",
    ttl: "1h",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Main web server and it's aliases

  A("@", NAGA_IPV4, TTL("10m")),
  AAAA("@", NAGA_IPV6, TTL("10m")),
  A("www", NAGA_IPV4, TTL("10m")),
  AAAA("www", NAGA_IPV6, TTL("10m"))

);
