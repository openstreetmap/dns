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

  A("hampshire.aerial", LOCKHEED_IPV4),
  AAAA("hampshire.aerial", LOCKHEED_IPV6),
  A("a.hampshire.aerial", LOCKHEED_IPV4),
  AAAA("a.hampshire.aerial", LOCKHEED_IPV6),
  A("b.hampshire.aerial", LOCKHEED_IPV4),
  AAAA("b.hampshire.aerial", LOCKHEED_IPV6),
  A("c.hampshire.aerial", LOCKHEED_IPV4),
  AAAA("c.hampshire.aerial", LOCKHEED_IPV6),

  A("surrey.aerial", LOCKHEED_IPV4),
  AAAA("surrey.aerial", LOCKHEED_IPV6),
  A("a.surrey.aerial", LOCKHEED_IPV4),
  AAAA("a.surrey.aerial", LOCKHEED_IPV6),
  A("b.surrey.aerial", LOCKHEED_IPV4),
  AAAA("b.surrey.aerial", LOCKHEED_IPV6),
  A("c.surrey.aerial", LOCKHEED_IPV4),
  AAAA("c.surrey.aerial", LOCKHEED_IPV6),

  A("os", LOCKHEED_IPV4),
  AAAA("os", LOCKHEED_IPV6),
  A("a.os", LOCKHEED_IPV4),
  AAAA("a.os", LOCKHEED_IPV6),
  A("b.os", LOCKHEED_IPV4),
  AAAA("b.os", LOCKHEED_IPV6),
  A("c.os", LOCKHEED_IPV4),
  AAAA("c.os", LOCKHEED_IPV6),

  A("ea", LOCKHEED_IPV4),
  AAAA("ea", LOCKHEED_IPV6),
  A("a.ea", LOCKHEED_IPV4),
  AAAA("a.ea", LOCKHEED_IPV6),
  A("b.ea", LOCKHEED_IPV4),
  AAAA("b.ea", LOCKHEED_IPV6),
  A("c.ea", LOCKHEED_IPV4),
  AAAA("c.ea", LOCKHEED_IPV6)

);
