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

  // Aerial imagery sites on draco

  A("aerial", DRACO_IPV4, TTL("10m")),
  A("a.aerial", DRACO_IPV4, TTL("10m")),
  A("b.aerial", DRACO_IPV4, TTL("10m")),
  A("c.aerial", DRACO_IPV4, TTL("10m")),

  // Aerial imagery sites on kessie

  A("coct.aerial", KESSIE_IPV4, TTL("30m")),
  AAAA("coct.aerial", KESSIE_IPV6, TTL("30m")),
  A("a.coct.aerial", KESSIE_IPV4, TTL("30m")),
  AAAA("a.coct.aerial", KESSIE_IPV6, TTL("30m")),
  A("b.coct.aerial", KESSIE_IPV4, TTL("30m")),
  AAAA("b.coct.aerial", KESSIE_IPV6, TTL("30m")),
  A("c.coct.aerial", KESSIE_IPV4, TTL("30m")),
  AAAA("c.coct.aerial", KESSIE_IPV6, TTL("30m")),

  A("topo", KESSIE_IPV4, TTL("30m")),
  AAAA("topo", KESSIE_IPV6, TTL("30m")),
  A("a.topo", KESSIE_IPV4, TTL("30m")),
  AAAA("a.topo", KESSIE_IPV6, TTL("30m")),
  A("b.topo", KESSIE_IPV4, TTL("30m")),
  AAAA("b.topo", KESSIE_IPV6, TTL("30m")),
  A("c.topo", KESSIE_IPV4, TTL("30m")),
  AAAA("c.topo", KESSIE_IPV6, TTL("30m")),

  A("namibia-topo", KESSIE_IPV4, TTL("30m")),
  AAAA("namibia-topo", KESSIE_IPV6, TTL("30m")),
  A("a.namibia-topo", KESSIE_IPV4, TTL("30m")),
  AAAA("a.namibia-topo", KESSIE_IPV6, TTL("30m")),
  A("b.namibia-topo", KESSIE_IPV4, TTL("30m")),
  AAAA("b.namibia-topo", KESSIE_IPV6, TTL("30m")),
  A("c.namibia-topo", KESSIE_IPV4, TTL("30m")),
  AAAA("c.namibia-topo", KESSIE_IPV6, TTL("30m"))

);
