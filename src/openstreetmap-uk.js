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

  // Shaun McDonald's taginfo instance

  CNAME("taginfo", "proxy.mythic-beasts.com."),

  // Aerial imagery sites

  A("hampshire.aerial", IPV4["lockheed"]),
  AAAA("hampshire.aerial", IPV6["lockheed"]),
  A("a.hampshire.aerial", IPV4["lockheed"]),
  AAAA("a.hampshire.aerial", IPV6["lockheed"]),
  A("b.hampshire.aerial", IPV4["lockheed"]),
  AAAA("b.hampshire.aerial", IPV6["lockheed"]),
  A("c.hampshire.aerial", IPV4["lockheed"]),
  AAAA("c.hampshire.aerial", IPV6["lockheed"]),

  A("surrey.aerial", IPV4["lockheed"]),
  AAAA("surrey.aerial", IPV6["lockheed"]),
  A("a.surrey.aerial", IPV4["lockheed"]),
  AAAA("a.surrey.aerial", IPV6["lockheed"]),
  A("b.surrey.aerial", IPV4["lockheed"]),
  AAAA("b.surrey.aerial", IPV6["lockheed"]),
  A("c.surrey.aerial", IPV4["lockheed"]),
  AAAA("c.surrey.aerial", IPV6["lockheed"]),

  A("os", IPV4["lockheed"]),
  AAAA("os", IPV6["lockheed"]),
  A("a.os", IPV4["lockheed"]),
  AAAA("a.os", IPV6["lockheed"]),
  A("b.os", IPV4["lockheed"]),
  AAAA("b.os", IPV6["lockheed"]),
  A("c.os", IPV4["lockheed"]),
  AAAA("c.os", IPV6["lockheed"]),

  A("ea", IPV4["lockheed"]),
  AAAA("ea", IPV6["lockheed"]),
  A("a.ea", IPV4["lockheed"]),
  AAAA("a.ea", IPV6["lockheed"]),
  A("b.ea", IPV4["lockheed"]),
  AAAA("b.ea", IPV6["lockheed"]),
  A("c.ea", IPV4["lockheed"]),
  AAAA("c.ea", IPV6["lockheed"])

);
