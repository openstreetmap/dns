D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Include OSM standard CAA records
  OSM_CAA,

  // Mail service

  MX("@", 10, QUALIFY("a.mx")),

  A("a.mx", IPV4["fafnir"]),
  AAAA("a.mx", IPV6["fafnir"]),
  A("mail", IPV4["fafnir"]),
  AAAA("mail", IPV6["fafnir"]),
  A("mta-sts", IPV4["fafnir"]),
  AAAA("mta-sts", IPV6["fafnir"]),

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

  osm_web_service("wiki", "konqi"),
  osm_web_service("www", "konqi"),
  osm_web_service("@", "konqi"),

);
