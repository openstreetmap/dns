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

  // Let google handle email

  MX("@", 1, "aspmx.l.google.com.", TTL("1h")),
  MX("@", 5, "alt1.aspmx.l.google.com.", TTL("1h")),
  MX("@", 5, "alt2.aspmx.l.google.com.", TTL("1h")),
  MX("@", 10, "alt3.aspmx.l.google.com.", TTL("1h")),
  MX("@", 10, "alt4.aspmx.l.google.com.", TTL("1h")),

  // Handle mail for the join subdomain ourselves

  MX("join", 10, "a.mx.openstreetmap.org."),

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
      "ip4:193.60.236.0/24",          // ucl external
      "ip4:130.117.76.0/27",          // amsterdam external
      "ip6:2001:978:2:2C::172:0/112", // amsterdam external
      "ip4:184.104.226.96/27",        // dublin external
      "ip6:2001:470:1:b3b::/64",      // dublin external
      "-all"
    ]
  }),

  // Apple Business Manager verification
  TXT("@", "apple-domain-verification=ZzBG2msRtUDehTMW"),

  // Publish DMARC report-only policy

  DMARC_BUILDER({
    policy: "none",
    rua: [
      "mailto:openstreetmap-d@dmarc.report-uri.com"
    ],
    failureOptions: 1
  }),

  // DKIM keys

  TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJmTBAkYRCocCCNtVsdRNMlQel8kNfjPYJpjEm7woEgZh9yZeDzxImtz+u73oUF4+7bXzrNYbP946WNQIwAba1J69he8L1qfPBJLd3Z/fgmuaGdWcxpDno2EY4cQ8PrzvI6Vfm+6YAFANl8w09CIg41ykdlzH4iUJXD35k3SIl3wIDAQAB"),
  TXT("20201112._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz4OyJc77mpW5djxVfZm18HcmJHQLpo7B2Z8Og8byICjDiG91Tpkv5ws3xIbMsi/tVA6p5L76uL0TGKlo4ayewYvJUTC22+hBWARUuWA0DgeMwBpW/dNUOJHBABCTouolvXLKRTPTefA177Y5jYbD7ZeJAR4ZnFbZX6spimXCT66AyhqCBSrOCXYXFm3ons5ANkkQBNZ/jMYczYs9T1ijNEbBNTJmLO+whOrYLyGd3iZ9X9iOmuNFBCgXp0tsN//FBsOyTl559/XY25r3GZhiKXMbrZ1IJewqJlG0+hN1y9qwWGgq5YpZPt5YJ1KGjIrcFX59/PhNQX4khPOaD5g7ZQIDAQAB", AUTOSPLIT),

  // Google postmaster tools verification

  CNAME("uaqn4jv2xaoe", "gv-jun5dginqysxph.dv.googlehosted.com."),

  // Aliases for google services

  CNAME("login", "ghs.googlehosted.com."),
  CNAME("docs", "ghs.googlehosted.com."),
  CNAME("mail", "ghs.googlehosted.com."),
  CNAME("calendar", "ghs.googlehosted.com."),
  CNAME("sites", "ghs.googlehosted.com."),

  // Main web server and it's aliases

  A("@", RIDLEY_IPV4),
  A("www", RIDLEY_IPV4),
  A("wiki", RIDLEY_IPV4),
  A("blog", RIDLEY_IPV4),
  A("crm", RIDLEY_IPV4),
  A("join", RIDLEY_IPV4),
  A("board", RIDLEY_IPV4),
  A("dwg", RIDLEY_IPV4),
  A("mwg", RIDLEY_IPV4),
  A("operations", NAGA_IPV4),
  AAAA("operations", NAGA_IPV6),

  // Nextcloud instance

  CNAME("files", "nextcloud-openstreetmapfoundation.cloud68.systems."),

  A("hardware", IDRIS_IPV4)

);
