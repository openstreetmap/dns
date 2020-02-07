D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA("@", "issue", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "issuewild", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "iodef", "mailto:hostmaster@openstreetmap.org"),

  // Let the main domain handle the email

  MX("@", 10, "a.mx.openstreetmap.org."),

  // Delegate SPF policy to the main domain

  TXT("@", "v=spf1 include:openstreetmap.org -all"),

  // Delegate MTA-STS policy to the main domain

  CNAME("_mta-sts", "_mta-sts.openstreetmap.org."),

  // Main web site

  ALIAS("@", "www.openstreetmap.org."),
  CNAME("www", "www.openstreetmap.org."),
  CNAME("api", "api.openstreetmap.org."),

  // Shaun McDonald's taginfo instance

  CNAME("taginfo", "proxy.mythic-beasts.com."),

  // Aerial imagery sites

  A("hampshire.aerial", "178.250.74.36", TTL("1h")),
  AAAA("hampshire.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("a.hampshire.aerial", "178.250.74.36", TTL("1h")),
  AAAA("a.hampshire.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("b.hampshire.aerial", "178.250.74.36", TTL("1h")),
  AAAA("b.hampshire.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("c.hampshire.aerial", "178.250.74.36", TTL("1h")),
  AAAA("c.hampshire.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),

  A("surrey.aerial", "178.250.74.36", TTL("1h")),
  AAAA("surrey.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("a.surrey.aerial", "178.250.74.36", TTL("1h")),
  AAAA("a.surrey.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("b.surrey.aerial", "178.250.74.36", TTL("1h")),
  AAAA("b.surrey.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("c.surrey.aerial", "178.250.74.36", TTL("1h")),
  AAAA("c.surrey.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),

  A("os", "178.250.74.36", TTL("1h")),
  AAAA("os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("a.os", "178.250.74.36", TTL("1h")),
  AAAA("a.os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("b.os", "178.250.74.36", TTL("1h")),
  AAAA("b.os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("c.os", "178.250.74.36", TTL("1h")),
  AAAA("c.os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),

  A("ea", "178.250.74.36", TTL("1h")),
  AAAA("ea", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("a.ea", "178.250.74.36", TTL("1h")),
  AAAA("a.ea", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("b.ea", "178.250.74.36", TTL("1h")),
  AAAA("b.ea", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("c.ea", "178.250.74.36", TTL("1h")),
  AAAA("c.ea", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h"))

);
