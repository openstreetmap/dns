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

  A("a.mx", FAFNIR_IPV4_HE),
  AAAA("a.mx", FAFNIR_IPV6_HE),
  A("mail", FAFNIR_IPV4_HE),
  AAAA("mail", FAFNIR_IPV6_HE),
  A("mta-sts", FAFNIR_IPV4_HE),
  AAAA("mta-sts", FAFNIR_IPV6_HE),

  // Delegate SPF policy to the main domain

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",      // main openstreetmap.org spf record
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

  A("wiki", KONQI_IPV4_HE),
  AAAA("wiki", KONQI_IPV6_HE),
  A("www", KONQI_IPV4_HE),
  AAAA("www", KONQI_IPV6_HE),
  A("@", KONQI_IPV4_HE),
  AAAA("@", KONQI_IPV6_HE)

);
