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

  osm_web_service("@", "naga"),
  osm_web_service("www", "naga"),
  osm_web_service("2025", "naga"),
  osm_web_service("2024", "naga"),
  osm_web_service("2022", "naga"),
  osm_web_service("2021", "naga"),
  osm_web_service("2020", "naga"),
  osm_web_service("2019", "naga"),
  osm_web_service("2018", "naga"),
  osm_web_service("2017", "naga"),
  osm_web_service("2016", "naga"),
  osm_web_service("2013", "naga"),
  osm_web_service("2012", "ridley"),
  osm_web_service("2011", "ridley"),
  osm_web_service("2010", "ridley"),
  osm_web_service("2009", "naga"),
  osm_web_service("2008", "naga"),
  osm_web_service("2007", "naga"),

  // Google Site Verification - Grant
  TXT("2022", "google-site-verification=wT1dJzSYM_2By372lJ_v9IU1crF21qOySEAPABxUcyo"),
  TXT("@", "google-site-verification=pqJHZHtrC4UhevQdPlR_2gVDPml6UCwmyHq75bfWLRQ"),

);
