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

  // Aerial imagery sites on draco

  A("aerial", "193.60.236.12", TTL("10m")),
  A("a.aerial", "193.60.236.12", TTL("10m")),
  A("b.aerial", "193.60.236.12", TTL("10m")),
  A("c.aerial", "193.60.236.12", TTL("10m")),

  // Aerial imagery sites on kessie

  A("coct.aerial", "178.250.74.36", TTL("30m")),
  AAAA("coct.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("a.coct.aerial", "178.250.74.36", TTL("30m")),
  AAAA("a.coct.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("b.coct.aerial", "178.250.74.36", TTL("30m")),
  AAAA("b.coct.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("c.coct.aerial", "178.250.74.36", TTL("30m")),
  AAAA("c.coct.aerial", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),

  A("topo", "178.250.74.36", TTL("30m")),
  AAAA("topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("a.topo", "178.250.74.36", TTL("30m")),
  AAAA("a.topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("b.topo", "178.250.74.36", TTL("30m")),
  AAAA("b.topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("c.topo", "178.250.74.36", TTL("30m")),
  AAAA("c.topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),

  A("namibia-topo", "178.250.74.36", TTL("30m")),
  AAAA("namibia-topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("a.namibia-topo", "178.250.74.36", TTL("30m")),
  AAAA("a.namibia-topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("b.namibia-topo", "178.250.74.36", TTL("30m")),
  AAAA("b.namibia-topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),
  A("c.namibia-topo", "178.250.74.36", TTL("30m")),
  AAAA("c.namibia-topo", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("30m")),

);
