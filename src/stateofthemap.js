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

  // SPF policy

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:_spf.google.com",  // Google GSuite
      "ip4:212.110.172.32",       // shenron ipv4
      "ip6:2001:41c9:1:400::32",  // shenron ipv6
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "-all"
    ]
  }),

  // Let google handle email

  MX("@", 1, "aspmx.l.google.com."),
  MX("@", 5, "alt1.aspmx.l.google.com."),
  MX("@", 5, "alt2.aspmx.l.google.com."),
  MX("@", 10, "alt3.aspmx.l.google.com."),
  MX("@", 10, "alt4.aspmx.l.google.com."),

  // Aliases for google services

  CNAME("login", "ghs.googlehosted.com."),
  CNAME("docs", "ghs.googlehosted.com."),
  CNAME("mail", "ghs.googlehosted.com."),
  CNAME("calendar", "ghs.googlehosted.com."),
  CNAME("sites", "ghs.googlehosted.com."),

  // Main web server and it's aliases

  A("@", IPV4["naga.he"]),
  AAAA("@", IPV6["naga.he"]),
  A("www", IPV4["naga.he"]),
  AAAA("www", IPV6["naga.he"]),
  A("2024", IPV4["naga.he"]),
  AAAA("2024", IPV6["naga.he"]),
  A("2022", IPV4["naga.he"]),
  AAAA("2022", IPV6["naga.he"]),
  A("2021", IPV4["naga.he"]),
  AAAA("2021", IPV6["naga.he"]),
  A("2020", IPV4["naga.he"]),
  AAAA("2020", IPV6["naga.he"]),
  A("2019", IPV4["naga.he"]),
  AAAA("2019", IPV6["naga.he"]),
  A("2018", IPV4["naga.he"]),
  AAAA("2018", IPV6["naga.he"]),
  A("2017", IPV4["naga.he"]),
  AAAA("2017", IPV6["naga.he"]),
  A("2016", IPV4["naga.he"]),
  AAAA("2016", IPV6["naga.he"]),
  A("2013", IPV4["naga.he"]),
  AAAA("2013", IPV6["naga.he"]),
  A("2012", IPV4["ridley"]),
  A("2011", IPV4["ridley"]),
  A("2010", IPV4["ridley"]),
  A("2009", IPV4["naga.he"]),
  AAAA("2009", IPV6["naga.he"]),
  A("2008", IPV4["naga.he"]),
  AAAA("2008", IPV6["naga.he"]),
  A("2007", IPV4["naga.he"]),
  AAAA("2007", IPV6["naga.he"]),

  // HTTPS / SVCB records
  HTTPS("@", 1, ".", "alpn=h2"),
  HTTPS("www", 1, ".", "alpn=h2"),
  HTTPS("2024", 1, ".", "alpn=h2"),
  HTTPS("2022", 1, ".", "alpn=h2"),
  HTTPS("2021", 1, ".", "alpn=h2"),
  HTTPS("2020", 1, ".", "alpn=h2"),
  HTTPS("2019", 1, ".", "alpn=h2"),
  HTTPS("2018", 1, ".", "alpn=h2"),
  HTTPS("2017", 1, ".", "alpn=h2"),
  HTTPS("2016", 1, ".", "alpn=h2"),
  HTTPS("2013", 1, ".", "alpn=h2"),
  HTTPS("2012", 1, ".", "alpn=h2"),
  HTTPS("2011", 1, ".", "alpn=h2"),
  HTTPS("2010", 1, ".", "alpn=h2"),
  HTTPS("2009", 1, ".", "alpn=h2"),
  HTTPS("2008", 1, ".", "alpn=h2"),
  HTTPS("2007", 1, ".", "alpn=h2"),

  // Google Site Verification - Grant
  TXT("2022", "google-site-verification=wT1dJzSYM_2By372lJ_v9IU1crF21qOySEAPABxUcyo"),
  TXT("@", "google-site-verification=pqJHZHtrC4UhevQdPlR_2gVDPml6UCwmyHq75bfWLRQ")

);
