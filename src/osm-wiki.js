D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt and globalsign (Fastly) should issue certificates

  CAA_BUILDER({
    label: "@",
    ttl: "1h",
    iodef: "mailto:hostmaster@openstreetmap.org",
    issue: [
      "letsencrypt.org",
      "globalsign.com",   // Used by Fastly for CDN certificates
    ],
    issuewild: [
      "letsencrypt.org",
      "globalsign.com",   // Used by Fastly for CDN certificates
    ],
  }),

  // Mail service

  MX("@", 10, QUALIFY("a.mx")),

  A("a.mx", FAFNIR_IPV4),
  AAAA("a.mx", FAFNIR_IPV6),
  A("mail", FAFNIR_IPV4),
  AAAA("mail", FAFNIR_IPV6),
  A("mta-sts", FAFNIR_IPV4),
  AAAA("mta-sts", FAFNIR_IPV6),

  // Publish SPF records indicating that only shenron sends mail

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "ip4:212.110.172.32",       // shenron ipv4
      "ip6:2001:41c9:1:400::32",  // shenron ipv6
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "ip4:193.60.236.0/24",          // ucl external
      "ip4:184.104.179.128/27",       // amsterdam external
      "ip6:2001:470:1:fa1::/64",      // amsterdam external
      "ip4:184.104.226.96/27",        // dublin external
      "ip6:2001:470:1:b3b::/64",      // dublin external
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  // Publish DMARC report-only policy

  DMARC_BUILDER({
    policy: "none",
    rua: [
      "mailto:openstreetmap-d@dmarc.report-uri.com"
    ],
    failureOptions: 1
  }),

  // Announce MTA-STS policy and TLSRPT policy for error reports

  TXT("_mta-sts", "v=STSv1; id=202001291805Z"),
  TXT("_smtp._tls", "v=TLSRPTv1; rua=mailto:openstreetmap-d@tlsrpt.report-uri.com"),

  // Fastly cert domain ownership confirmation

  TXT("@", "_globalsign-domain-verification=ps00GlW1BzY9c2_cwH_pFqRkvzZyaCVZ-3RLssRG6S"),
  TXT("@", "_globalsign-domain-verification=W0buKB5ZmL-VwwHw2oQyQImk3I1q3hSemf2qmB1hjP"),

  A("wiki", KONQI_IPV4),
  AAAA("wiki", KONQI_IPV6),
  A("www", KONQI_IPV4),
  AAAA("www", KONQI_IPV6),
  A("@", KONQI_IPV4),
  AAAA("@", KONQI_IPV6)

);