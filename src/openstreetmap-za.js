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

  // Aerial imagery sites on ironbelly

  A("aerial", IRONBELLY_IPV4),
  AAAA("aerial", IRONBELLY_IPV6),
  A("a.aerial", IRONBELLY_IPV4),
  AAAA("a.aerial", IRONBELLY_IPV6),
  A("b.aerial", IRONBELLY_IPV4),
  AAAA("b.aerial", IRONBELLY_IPV6),
  A("c.aerial", IRONBELLY_IPV4),
  AAAA("c.aerial", IRONBELLY_IPV6),

  // Aerial imagery sites on kessie

  A("coct.aerial", KESSIE_IPV4),
  AAAA("coct.aerial", KESSIE_IPV6),
  A("a.coct.aerial", KESSIE_IPV4),
  AAAA("a.coct.aerial", KESSIE_IPV6),
  A("b.coct.aerial", KESSIE_IPV4),
  AAAA("b.coct.aerial", KESSIE_IPV6),
  A("c.coct.aerial", KESSIE_IPV4),
  AAAA("c.coct.aerial", KESSIE_IPV6),

  A("topo", KESSIE_IPV4),
  AAAA("topo", KESSIE_IPV6),
  A("a.topo", KESSIE_IPV4),
  AAAA("a.topo", KESSIE_IPV6),
  A("b.topo", KESSIE_IPV4),
  AAAA("b.topo", KESSIE_IPV6),
  A("c.topo", KESSIE_IPV4),
  AAAA("c.topo", KESSIE_IPV6),

  A("namibia-topo", KESSIE_IPV4),
  AAAA("namibia-topo", KESSIE_IPV6),
  A("a.namibia-topo", KESSIE_IPV4),
  AAAA("a.namibia-topo", KESSIE_IPV6),
  A("b.namibia-topo", KESSIE_IPV4),
  AAAA("b.namibia-topo", KESSIE_IPV6),
  A("c.namibia-topo", KESSIE_IPV4),
  AAAA("c.namibia-topo", KESSIE_IPV6)

);
