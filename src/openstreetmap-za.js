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

  // Let the main domain handle the email

  MX("@", 10, "a.mx.openstreetmap.org."),

  // Delegate SPF policy to the main domain

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",      // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Delegate MTA-STS policy to the main domain

  CNAME("_mta-sts", "_mta-sts.openstreetmap.org."),

  // Main web site

  ALIAS("@", "www.openstreetmap.org."),
  CNAME("www", "www.openstreetmap.org."),
  CNAME("api", "api.openstreetmap.org."),

  // Aerial imagery sites

  A("aerial", LOCKHEED_IPV4),
  AAAA("aerial", LOCKHEED_IPV6),
  A("a.aerial", LOCKHEED_IPV4),
  AAAA("a.aerial", LOCKHEED_IPV6),
  A("b.aerial", LOCKHEED_IPV4),
  AAAA("b.aerial", LOCKHEED_IPV6),
  A("c.aerial", LOCKHEED_IPV4),
  AAAA("c.aerial", LOCKHEED_IPV6),

  // HTTPS / SVCB records
  HTTPS("aerial", 1, ".", "alpn=h2"),
  HTTPS("a.aerial", 1, ".", "alpn=h2"),
  HTTPS("b.aerial", 1, ".", "alpn=h2"),
  HTTPS("c.aerial", 1, ".", "alpn=h2"),

  A("coct.aerial", LOCKHEED_IPV4),
  AAAA("coct.aerial", LOCKHEED_IPV6),
  A("a.coct.aerial", LOCKHEED_IPV4),
  AAAA("a.coct.aerial", LOCKHEED_IPV6),
  A("b.coct.aerial", LOCKHEED_IPV4),
  AAAA("b.coct.aerial", LOCKHEED_IPV6),
  A("c.coct.aerial", LOCKHEED_IPV4),
  AAAA("c.coct.aerial", LOCKHEED_IPV6),

  // HTTPS / SVCB records
  HTTPS("coct.aerial", 1, ".", "alpn=h2"),
  HTTPS("a.coct.aerial", 1, ".", "alpn=h2"),
  HTTPS("b.coct.aerial", 1, ".", "alpn=h2"),
  HTTPS("c.coct.aerial", 1, ".", "alpn=h2"),

  A("topo", LOCKHEED_IPV4),
  AAAA("topo", LOCKHEED_IPV6),
  A("a.topo", LOCKHEED_IPV4),
  AAAA("a.topo", LOCKHEED_IPV6),
  A("b.topo", LOCKHEED_IPV4),
  AAAA("b.topo", LOCKHEED_IPV6),
  A("c.topo", LOCKHEED_IPV4),
  AAAA("c.topo", LOCKHEED_IPV6),

  // HTTPS / SVCB records
  HTTPS("topo", 1, ".", "alpn=h2"),
  HTTPS("a.topo", 1, ".", "alpn=h2"),
  HTTPS("b.topo", 1, ".", "alpn=h2"),
  HTTPS("c.topo", 1, ".", "alpn=h2"),

  A("namibia-topo", LOCKHEED_IPV4),
  AAAA("namibia-topo", LOCKHEED_IPV6),
  A("a.namibia-topo", LOCKHEED_IPV4),
  AAAA("a.namibia-topo", LOCKHEED_IPV6),
  A("b.namibia-topo", LOCKHEED_IPV4),
  AAAA("b.namibia-topo", LOCKHEED_IPV6),
  A("c.namibia-topo", LOCKHEED_IPV4),
  AAAA("c.namibia-topo", LOCKHEED_IPV6),

  // HTTPS / SVCB records
  HTTPS("namibia-topo", 1, ".", "alpn=h2"),
  HTTPS("a.namibia-topo", 1, ".", "alpn=h2"),
  HTTPS("b.namibia-topo", 1, ".", "alpn=h2"),
  HTTPS("c.namibia-topo", 1, ".", "alpn=h2")

);
