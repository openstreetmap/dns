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

  // Let mailbox.org handle email

  MX("@", 10, "mxext1.mailbox.org."),
  MX("@", 10, "mxext2.mailbox.org."),
  MX("@", 20, "mxext3.mailbox.org."),

  // Handle mail for the join subdomain ourselves

  MX("join", 10, "a.mx.openstreetmap.org."),

  // SPF policy

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:mailbox.org",     // mailbox.org
      "include:_spf.google.com", // Google GSuite
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "wiki",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Apple Business Manager verification
  TXT("@", "apple-domain-verification=ZzBG2msRtUDehTMW"),

  // Mailbox.org registration verification
  TXT("d00f46a3fde45d06c53f3cd5b21f213ea384e7f5", "4a229bebe41606a1f7d909507846729a73998c31"),

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

  // https://kb.mailbox.org/en/private/custom-domains/spf-dkim-and-dmarc-how-to-improve-spam-reputation-and-avoid-bounces
  CNAME("MBO0001._domainkey", "MBO0001._domainkey.mailbox.org."),
  CNAME("MBO0002._domainkey", "MBO0002._domainkey.mailbox.org."),
  CNAME("MBO0003._domainkey", "MBO0003._domainkey.mailbox.org."),
  CNAME("MBO0004._domainkey", "MBO0004._domainkey.mailbox.org."),

  // Google postmaster tools verification

  CNAME("uaqn4jv2xaoe", "gv-jun5dginqysxph.dv.googlehosted.com."),

  // Aliases for google services

  CNAME("login", "ghs.googlehosted.com."),
  CNAME("docs", "ghs.googlehosted.com."),
  CNAME("mail", "ghs.googlehosted.com."),
  CNAME("calendar", "ghs.googlehosted.com."),
  CNAME("sites", "ghs.googlehosted.com."),

  // Aliases for mailbox.org services

  CNAME("autoconfig", "mailbox.org."),
  SRV("_hkps._tcp", 1, 1, 443, "pgp.mailbox.org."),

  // Main web server and it's aliases

  A("@", IPV4["ridley"]),
  A("www", IPV4["ridley"]),
  A("wiki", IPV4["ridley"]),
  A("blog", IPV4["ridley"]),
  A("crm", IPV4["ridley"]),
  A("join", IPV4["ridley"]),
  A("support", IPV4["ridley"]),
  A("supporting", IPV4["ridley"]),
  A("donate", IPV4["ridley"]),

  A("board", IPV4["ridley"]),
  A("dwg", IPV4["ridley"]),
  A("mwg", IPV4["ridley"]),
  A("operations", IPV4["naga.he"]),
  AAAA("operations", IPV6["naga.he"]),

  // HTTPS / SVCB records
  HTTPS("www", 1, ".", "alpn=h2"),
  HTTPS("wiki", 1, ".", "alpn=h2"),
  HTTPS("blog", 1, ".", "alpn=h2"),
  HTTPS("crm", 1, ".", "alpn=h2"),
  HTTPS("join", 1, ".", "alpn=h2"),
  HTTPS("support", 1, ".", "alpn=h2"),
  HTTPS("supporting", 1, ".", "alpn=h2"),
  HTTPS("donate", 1, ".", "alpn=h2"),
  HTTPS("board", 1, ".", "alpn=h2"),
  HTTPS("dwg", 1, ".", "alpn=h2"),
  HTTPS("mwg", 1, ".", "alpn=h2"),
  HTTPS("operations", 1, ".", "alpn=h2"),

  // Nextcloud instance

  CNAME("files", "nextcloud-openstreetmapfoundation.cloud68.systems."),

  // Staging Blog
  A("staging.blog", IPV4["tabaluga"]),
  AAAA("staging.blog", IPV6["tabaluga"]),
  // HTTPS / SVCB records
  HTTPS("staging.blog", 1, ".", "alpn=h2"),

  A("hardware", IPV4["idris.he"]),

  // HTTPS / SVCB records
  HTTPS("hardware", 1, ".", "alpn=h2")

);
