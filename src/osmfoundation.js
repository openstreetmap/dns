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

  // Google Workspace DKIM keys
  DKIM_BUILDER({
    selector: "google",
    keytype: 'rsa',
    pubkey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJmTBAkYRCocCCNtVsdRNMlQel8kNfjPYJpjEm7woEgZh9yZeDzxImtz+u73oUF4+7bXzrNYbP946WNQIwAba1J69he8L1qfPBJLd3Z/fgmuaGdWcxpDno2EY4cQ8PrzvI6Vfm+6YAFANl8w09CIg41ykdlzH4iUJXD35k3SIl3wIDAQAB"
  }),
  DKIM_BUILDER({
    selector: "20201112",
    keytype: 'rsa',
    pubkey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz4OyJc77mpW5djxVfZm18HcmJHQLpo7B2Z8Og8byICjDiG91Tpkv5ws3xIbMsi/tVA6p5L76uL0TGKlo4ayewYvJUTC22+hBWARUuWA0DgeMwBpW/dNUOJHBABCTouolvXLKRTPTefA177Y5jYbD7ZeJAR4ZnFbZX6spimXCT66AyhqCBSrOCXYXFm3ons5ANkkQBNZ/jMYczYs9T1ijNEbBNTJmLO+whOrYLyGd3iZ9X9iOmuNFBCgXp0tsN//FBsOyTl559/XY25r3GZhiKXMbrZ1IJewqJlG0+hN1y9qwWGgq5YpZPt5YJ1KGjIrcFX59/PhNQX4khPOaD5g7ZQIDAQAB"
  }),

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

  osm_web_service("@", "ridley"),
  osm_web_service("www", "ridley"),
  osm_web_service("wiki", "ridley"),
  osm_web_service("blog", "ridley"),
  osm_web_service("crm", "ridley"),
  osm_web_service("join", "ridley"),
  osm_web_service("support", "ridley"),
  osm_web_service("supporting", "ridley"),
  osm_web_service("donate", "ridley"),
  osm_web_service("board", "ridley"),
  osm_web_service("dwg", "ridley"),
  osm_web_service("mwg", "naga"),
  osm_web_service("operations", "naga"),

  // Nextcloud instance

  CNAME("files", "nextcloud-openstreetmapfoundation.cloud68.systems."),

  // Staging Blog
  osm_web_service("staging.blog", "tabaluga"),

  osm_web_service("hardware", "idris"),

);
