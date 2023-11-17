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

  A("@", NAGA_IPV4),
  AAAA("@", NAGA_IPV6),
  A("www", NAGA_IPV4),
  AAAA("www", NAGA_IPV6),
  A("2024", NAGA_IPV4),
  AAAA("2024", NAGA_IPV6),
  A("2022", NAGA_IPV4),
  AAAA("2022", NAGA_IPV6),
  A("2021", NAGA_IPV4),
  AAAA("2021", NAGA_IPV6),
  A("2020", NAGA_IPV4),
  AAAA("2020", NAGA_IPV6),
  A("2019", NAGA_IPV4),
  AAAA("2019", NAGA_IPV6),
  A("2018", NAGA_IPV4),
  AAAA("2018", NAGA_IPV6),
  A("2017", NAGA_IPV4),
  AAAA("2017", NAGA_IPV6),
  A("2016", NAGA_IPV4),
  AAAA("2016", NAGA_IPV6),
  A("2013", NAGA_IPV4),
  AAAA("2013", NAGA_IPV6),
  A("2012", RIDLEY_IPV4),
  A("2011", RIDLEY_IPV4),
  A("2010", RIDLEY_IPV4),
  A("2009", RIDLEY_IPV4),
  A("2008", RIDLEY_IPV4),
  A("2007", RIDLEY_IPV4),

  // Google Site Verification - Grant
  TXT("2022", "google-site-verification=wT1dJzSYM_2By372lJ_v9IU1crF21qOySEAPABxUcyo"),
  TXT("@", "google-site-verification=pqJHZHtrC4UhevQdPlR_2gVDPml6UCwmyHq75bfWLRQ")

);
