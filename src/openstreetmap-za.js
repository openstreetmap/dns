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

  A("aerial", IPV4["lockheed"]),
  AAAA("aerial", IPV6["lockheed"]),
  A("a.aerial", IPV4["lockheed"]),
  AAAA("a.aerial", IPV6["lockheed"]),
  A("b.aerial", IPV4["lockheed"]),
  AAAA("b.aerial", IPV6["lockheed"]),
  A("c.aerial", IPV4["lockheed"]),
  AAAA("c.aerial", IPV6["lockheed"]),

  // HTTPS / SVCB records
  HTTPS("aerial", 1, ".", "alpn=h2"),
  HTTPS("a.aerial", 1, ".", "alpn=h2"),
  HTTPS("b.aerial", 1, ".", "alpn=h2"),
  HTTPS("c.aerial", 1, ".", "alpn=h2"),

  A("coct.aerial", IPV4["lockheed"]),
  AAAA("coct.aerial", IPV6["lockheed"]),
  A("a.coct.aerial", IPV4["lockheed"]),
  AAAA("a.coct.aerial", IPV6["lockheed"]),
  A("b.coct.aerial", IPV4["lockheed"]),
  AAAA("b.coct.aerial", IPV6["lockheed"]),
  A("c.coct.aerial", IPV4["lockheed"]),
  AAAA("c.coct.aerial", IPV6["lockheed"]),

  // HTTPS / SVCB records
  HTTPS("coct.aerial", 1, ".", "alpn=h2"),
  HTTPS("a.coct.aerial", 1, ".", "alpn=h2"),
  HTTPS("b.coct.aerial", 1, ".", "alpn=h2"),
  HTTPS("c.coct.aerial", 1, ".", "alpn=h2"),

  A("topo", IPV4["lockheed"]),
  AAAA("topo", IPV6["lockheed"]),
  A("a.topo", IPV4["lockheed"]),
  AAAA("a.topo", IPV6["lockheed"]),
  A("b.topo", IPV4["lockheed"]),
  AAAA("b.topo", IPV6["lockheed"]),
  A("c.topo", IPV4["lockheed"]),
  AAAA("c.topo", IPV6["lockheed"]),

  // HTTPS / SVCB records
  HTTPS("topo", 1, ".", "alpn=h2"),
  HTTPS("a.topo", 1, ".", "alpn=h2"),
  HTTPS("b.topo", 1, ".", "alpn=h2"),
  HTTPS("c.topo", 1, ".", "alpn=h2"),

  A("namibia-topo", IPV4["lockheed"]),
  AAAA("namibia-topo", IPV6["lockheed"]),
  A("a.namibia-topo", IPV4["lockheed"]),
  AAAA("a.namibia-topo", IPV6["lockheed"]),
  A("b.namibia-topo", IPV4["lockheed"]),
  AAAA("b.namibia-topo", IPV6["lockheed"]),
  A("c.namibia-topo", IPV4["lockheed"]),
  AAAA("c.namibia-topo", IPV6["lockheed"]),

  // HTTPS / SVCB records
  HTTPS("namibia-topo", 1, ".", "alpn=h2"),
  HTTPS("a.namibia-topo", 1, ".", "alpn=h2"),
  HTTPS("b.namibia-topo", 1, ".", "alpn=h2"),
  HTTPS("c.namibia-topo", 1, ".", "alpn=h2")

);
