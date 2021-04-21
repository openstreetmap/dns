D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA("@", "issue", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "issuewild", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "iodef", "mailto:hostmaster@openstreetmap.org"),

  // Let google handle email

  MX("@", 1, "aspmx.l.google.com.", TTL("1h")),
  MX("@", 5, "alt1.aspmx.l.google.com.", TTL("1h")),
  MX("@", 5, "alt2.aspmx.l.google.com.", TTL("1h")),
  MX("@", 10, "alt3.aspmx.l.google.com.", TTL("1h")),
  MX("@", 10, "alt4.aspmx.l.google.com.", TTL("1h")),

  // Handle mail for the join subdomain ourselves

  MX("join", 10, "a.mx.openstreetmap.org."),

  // SPF policy

  TXT("@", "v=spf1 ip4:212.110.172.32 ip6:2001:41c9:1:400::32 a mx include:_spf.google.com -all"),

  // DKIM keys

  TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJmTBAkYRCocCCNtVsdRNMlQel8kNfjPYJpjEm7woEgZh9yZeDzxImtz+u73oUF4+7bXzrNYbP946WNQIwAba1J69he8L1qfPBJLd3Z/fgmuaGdWcxpDno2EY4cQ8PrzvI6Vfm+6YAFANl8w09CIg41ykdlzH4iUJXD35k3SIl3wIDAQAB", TTL("15m")),
  TXT("20201112._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz4OyJc77mpW5djxVfZm18HcmJHQLpo7B2Z8Og8byICjDiG91Tpkv5ws3xIbMsi/tVA6p5L76uL0TGKlo4ayewYvJUTC22+hBWARUuWA0DgeMwBpW/dNUOJHBABCTouolvXLKRTPTefA177Y5jYbD7ZeJAR4ZnFbZX6spimXCT66AyhqCBSrOCXYXFm3ons5ANkkQBNZ/jMYczYs9T1ijNEbBNTJmLO+whOrYLyGd3iZ9X9iOmuNFBCgXp0tsN//FBsOyTl559/XY25r3GZhiKXMbrZ1IJewqJlG0+hN1y9qwWGgq5YpZPt5YJ1KGjIrcFX59/PhNQX4khPOaD5g7ZQIDAQAB", AUTOSPLIT),

  // Google postmaster tools verification

  CNAME("uaqn4jv2xaoe", "gv-jun5dginqysxph.dv.googlehosted.com."),

  // Aliases for google services

  CNAME("login", "ghs.google.com."),
  CNAME("docs", "ghs.google.com."),
  CNAME("mail", "ghs.google.com."),
  CNAME("calendar", "ghs.google.com."),
  CNAME("sites", "ghs.google.com."),

  // Main web server and it's aliases

  A("@", RIDLEY_IPV4, TTL("10m")),
  A("www", RIDLEY_IPV4, TTL("10m")),
  A("wiki", RIDLEY_IPV4, TTL("10m")),
  A("blog", RIDLEY_IPV4, TTL("10m")),
  A("crm", RIDLEY_IPV4, TTL("10m")),
  A("join", RIDLEY_IPV4, TTL("10m")),
  A("board", RIDLEY_IPV4, TTL("10m")),
  A("dwg", RIDLEY_IPV4, TTL("10m")),
  A("mwg", RIDLEY_IPV4, TTL("10m")),
  A("operations", RIDLEY_IPV4, TTL("10m"))

);
