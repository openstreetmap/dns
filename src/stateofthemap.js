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

  A("@", NAGA_IPV4_HE),
  AAAA("@", NAGA_IPV6_HE),
  A("www", NAGA_IPV4_HE),
  AAAA("www", NAGA_IPV6_HE),
  A("2024", NAGA_IPV4_HE),
  AAAA("2024", NAGA_IPV6_HE),
  A("2022", NAGA_IPV4_HE),
  AAAA("2022", NAGA_IPV6_HE),
  A("2021", NAGA_IPV4_HE),
  AAAA("2021", NAGA_IPV6_HE),
  A("2020", NAGA_IPV4_HE),
  AAAA("2020", NAGA_IPV6_HE),
  A("2019", NAGA_IPV4_HE),
  AAAA("2019", NAGA_IPV6_HE),
  A("2018", NAGA_IPV4_HE),
  AAAA("2018", NAGA_IPV6_HE),
  A("2017", NAGA_IPV4_HE),
  AAAA("2017", NAGA_IPV6_HE),
  A("2016", NAGA_IPV4_HE),
  AAAA("2016", NAGA_IPV6_HE),
  A("2013", NAGA_IPV4_HE),
  AAAA("2013", NAGA_IPV6_HE),
  A("2012", RIDLEY_IPV4),
  A("2011", RIDLEY_IPV4),
  A("2010", RIDLEY_IPV4),
  A("2009", NAGA_IPV4_HE),
  AAAA("2009", NAGA_IPV6_HE),
  A("2008", NAGA_IPV4_HE),
  AAAA("2008", NAGA_IPV6_HE),
  A("2007", NAGA_IPV4_HE),
  AAAA("2007", NAGA_IPV6_HE),

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
