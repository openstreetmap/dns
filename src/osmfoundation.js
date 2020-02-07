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

  // DKIM key

  TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJmTBAkYRCocCCNtVsdRNMlQel8kNfjPYJpjEm7woEgZh9yZeDzxImtz+u73oUF4+7bXzrNYbP946WNQIwAba1J69he8L1qfPBJLd3Z/fgmuaGdWcxpDno2EY4cQ8PrzvI6Vfm+6YAFANl8w09CIg41ykdlzH4iUJXD35k3SIl3wIDAQAB", TTL("15m")),

  // XMPP chat servers

  SRV("_xmpp-server._tcp", 5, 0, 5269, "xmpp-server.l.google.com."),
  SRV("_xmpp-server._tcp", 20, 0, 5269, "xmpp-server1.l.google.com."),
  SRV("_xmpp-server._tcp", 20, 0, 5269, "xmpp-server2.l.google.com."),
  SRV("_xmpp-server._tcp", 20, 0, 5269, "xmpp-server3.l.google.com."),
  SRV("_xmpp-server._tcp", 20, 0, 5269, "xmpp-server4.l.google.com."),

  // Aliases for google services

  CNAME("login", "ghs.google.com."),
  CNAME("docs", "ghs.google.com."),
  CNAME("mail", "ghs.google.com."),
  CNAME("calendar", "ghs.google.com."),
  CNAME("sites", "ghs.google.com."),

  // Main web server and it's aliases

  A("@", "193.60.236.19", TTL("10m")),
  A("old", "193.60.236.19", TTL("10m")),
  A("www", "193.60.236.19", TTL("10m")),
  A("wiki", "193.60.236.19", TTL("10m")),
  A("blog", "193.60.236.19", TTL("10m")),
  A("crm", "193.60.236.19", TTL("10m")),
  A("join", "193.60.236.19", TTL("10m")),
  A("board", "193.60.236.19", TTL("10m")),
  A("dwg", "193.60.236.19", TTL("10m")),
  A("mwg", "193.60.236.19", TTL("10m")),
  A("operations", "193.60.236.19", TTL("10m"))

);
