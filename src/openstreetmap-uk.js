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

  A("hampshire.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("hampshire.aerial", KESSIE_IPV6, TTL("1h")),
  A("a.hampshire.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("a.hampshire.aerial", KESSIE_IPV6, TTL("1h")),
  A("b.hampshire.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("b.hampshire.aerial", KESSIE_IPV6, TTL("1h")),
  A("c.hampshire.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("c.hampshire.aerial", KESSIE_IPV6, TTL("1h")),

  A("surrey.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("surrey.aerial", KESSIE_IPV6, TTL("1h")),
  A("a.surrey.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("a.surrey.aerial", KESSIE_IPV6, TTL("1h")),
  A("b.surrey.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("b.surrey.aerial", KESSIE_IPV6, TTL("1h")),
  A("c.surrey.aerial", KESSIE_IPV4, TTL("1h")),
  AAAA("c.surrey.aerial", KESSIE_IPV6, TTL("1h")),

  A("os", KESSIE_IPV4, TTL("1h")),
  AAAA("os", KESSIE_IPV6, TTL("1h")),
  A("a.os", KESSIE_IPV4, TTL("1h")),
  AAAA("a.os", KESSIE_IPV6, TTL("1h")),
  A("b.os", KESSIE_IPV4, TTL("1h")),
  AAAA("b.os", KESSIE_IPV6, TTL("1h")),
  A("c.os", KESSIE_IPV4, TTL("1h")),
  AAAA("c.os", KESSIE_IPV6, TTL("1h")),

  A("ea", KESSIE_IPV4, TTL("1h")),
  AAAA("ea", KESSIE_IPV6, TTL("1h")),
  A("a.ea", KESSIE_IPV4, TTL("1h")),
  AAAA("a.ea", KESSIE_IPV6, TTL("1h")),
  A("b.ea", KESSIE_IPV4, TTL("1h")),
  AAAA("b.ea", KESSIE_IPV6, TTL("1h")),
  A("c.ea", KESSIE_IPV4, TTL("1h")),
  AAAA("c.ea", KESSIE_IPV6, TTL("1h"))

);
