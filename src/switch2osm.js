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
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Main web server and it's aliases

  A("@", NAGA_IPV4_HE),
  AAAA("@", NAGA_IPV6_HE),
  A("www", NAGA_IPV4_HE),
  AAAA("www", NAGA_IPV6_HE),

  // HTTPS / SVCB records
  HTTPS("@", 1, ".", "alpn=h2"),
  HTTPS("www", 1, ".", "alpn=h2")

);
