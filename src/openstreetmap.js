D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt and globalsign (Fastly) should issue certificates

  CAA_BUILDER({
    label: "@",
    ttl: "1h",
    iodef: "mailto:hostmaster@openstreetmap.org",
    issue: [
      "letsencrypt.org",
      "globalsign.com",   // Used by Fastly for CDN certificates
    ],
    issuewild: [
      "letsencrypt.org",
      "globalsign.com",   // Used by Fastly for CDN certificates
    ],
  }),

  // Mail service

  MX("@", 10, QUALIFY("a.mx")),
  MX("messages", 10, QUALIFY("a.mx")),
  MX("noreply", 10, QUALIFY("a.mx")),
  MX("otrs", 10, QUALIFY("a.mx")),
  MX("community", 10, QUALIFY("a.mx")),
  MX("supporting", 10, QUALIFY("a.mx")),

  A("a.mx", FAFNIR_IPV4),
  AAAA("a.mx", FAFNIR_IPV6),
  A("mail", FAFNIR_IPV4),
  AAAA("mail", FAFNIR_IPV6),
  A("mta-sts", FAFNIR_IPV4),
  AAAA("mta-sts", FAFNIR_IPV6),

  // Publish SPF records indicating that only shenron sends mail

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "ip4:193.60.236.0/24",      // ucl external
      "ip4:184.104.179.128/27",   // amsterdam external
      "ip6:2001:470:1:fa1::/64",  // amsterdam external
      "ip4:184.104.226.96/27",    // dublin external
      "ip6:2001:470:1:b3b::/64",  // dublin external
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "messages",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "ip4:193.60.236.0/24",      // ucl external
      "ip4:184.104.179.128/27",   // amsterdam external
      "ip6:2001:470:1:fa1::/64",  // amsterdam external
      "ip4:184.104.226.96/27",    // dublin external
      "ip6:2001:470:1:b3b::/64",  // dublin external
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "noreply",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "ip4:193.60.236.0/24",      // ucl external
      "ip4:184.104.179.128/27",   // amsterdam external
      "ip6:2001:470:1:fa1::/64",  // amsterdam external
      "ip4:184.104.226.96/27",    // dublin external
      "ip6:2001:470:1:b3b::/64",  // dublin external
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "otrs",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "ip4:193.60.236.0/24",      // ucl external
      "ip4:184.104.179.128/27",   // amsterdam external
      "ip6:2001:470:1:fa1::/64",  // amsterdam external
      "ip4:184.104.226.96/27",    // dublin external
      "ip6:2001:470:1:b3b::/64",  // dublin external
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "community",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "ip4:193.60.236.0/24",      // ucl external
      "ip4:184.104.179.128/27",   // amsterdam external
      "ip6:2001:470:1:fa1::/64",  // amsterdam external
      "ip4:184.104.226.96/27",    // dublin external
      "ip6:2001:470:1:b3b::/64",  // dublin external
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "supporting",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",       // fafnir ipv4
      "ip6:2001:470:1:b3b::2",    // fafnir ipv6
      "ip4:193.60.236.0/24",      // ucl external
      "ip4:184.104.179.128/27",   // amsterdam external
      "ip6:2001:470:1:fa1::/64",  // amsterdam external
      "ip4:184.104.226.96/27",    // dublin external
      "ip6:2001:470:1:b3b::/64",  // dublin external
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  // Publish DKIM public key

  TXT("20200301._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzvoNZVOGfw1V4A171hxHMhzVTAnIUQVJ8iX3wbqCld8A5iIaXeTGYvBmewymax/cYJS4QqzbpUzkgrrTA9avuZhd+QGJDgjADgx4VyMOaOS6FwAxS0uXtLrt+lsixRDx/feKyZHaxjzJAQy46ok77xXL4UXIaaovw6G6eZpIScMzZQ2zkKNJxTICzzSOduIilHhMWte4XP+/2PdRmD7Ge9jb0U4bZjswX0AqKSGzDKYw+yxVna9l53adeCnklqg2ofoXu+ResiH+kt05aCUOMo8en3em6yBnRCMalgi1E3Tt7I5BWcYFRkT/8agUGW4gGC6XMV9IskOsYL0emG0kGwIDAQAB", AUTOSPLIT),

  // Publish DMARC report-only policy

  DMARC_BUILDER({
    policy: "none",
    rua: [
      "mailto:openstreetmap-d@dmarc.report-uri.com"
    ],
    failureOptions: 1
  }),

  // Announce MTA-STS policy and TLSRPT policy for error reports

  TXT("_mta-sts", "v=STSv1; id=202001291805Z"),
  TXT("_smtp._tls", "v=TLSRPTv1; rua=mailto:openstreetmap-d@tlsrpt.report-uri.com"),

  // Fastly cert domain ownership confirmation

  TXT("@", "_globalsign-domain-verification=ps00GlW1BzY9c2_cwH_pFqRkvzZyaCVZ-3RLssRG6S"),
  TXT("@", "_globalsign-domain-verification=W0buKB5ZmL-VwwHw2oQyQImk3I1q3hSemf2qmB1hjP"),

  // Facebook Business domain verification
  TXT("@", "facebook-domain-verification=j5hix5i8r0kortfugqf2p9wx9x9by0"),

  // Delegate MTA-STS policy for subdomains

  CNAME("_mta-sts.messages", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.noreply", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.otrs", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.community", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.supporting", QUALIFY("_mta-sts")),

  // Google postmaster tools verification

  CNAME("af323lytato5", "gv-o4v3qh5pfayqex.dv.googlehosted.com."),
  CNAME("irzdddnmh465", "gv-cwr6bvt7xsgact.dv.googlehosted.com."),

  // Main web servers and their aliases

  A("spike-01", SPIKE01_IPV4),
  AAAA("spike-01", SPIKE01_IPV6),
  // A("@", SPIKE01_IPV4),
  // AAAA("@", SPIKE01_IPV6),
  // A("www", SPIKE01_IPV4),
  // AAAA("www", SPIKE01_IPV6),
  // A("api", SPIKE01_IPV4),
  // AAAA("api", SPIKE01_IPV6),
  // A("maps", SPIKE01_IPV4),
  // AAAA("maps", SPIKE01_IPV6),
  // A("mapz", SPIKE01_IPV4),
  // AAAA("mapz", SPIKE01_IPV6),
  A("spike-01.dub", SPIKE01_INTERNAL),
  A("spike-01.oob", SPIKE01_OOB),

  A("spike-02", SPIKE02_IPV4),
  AAAA("spike-02", SPIKE02_IPV6),
  // A("@", SPIKE02_IPV4),
  // AAAA("@", SPIKE02_IPV6),
  // A("www", SPIKE02_IPV4),
  // AAAA("www", SPIKE02_IPV6),
  // A("api", SPIKE02_IPV4),
  // AAAA("api", SPIKE02_IPV6),
  // A("maps", SPIKE02_IPV4),
  // AAAA("maps", SPIKE02_IPV6),
  // A("mapz", SPIKE02_IPV4),
  // AAAA("mapz", SPIKE02_IPV6),
  A("spike-02.dub", SPIKE02_INTERNAL),
  A("spike-02.oob", SPIKE02_OOB),

  A("spike-03", SPIKE03_IPV4),
  AAAA("spike-03", SPIKE03_IPV6),
  // A("@", SPIKE03_IPV4),
  // AAAA("@", SPIKE03_IPV6),
  // A("www", SPIKE03_IPV4),
  // AAAA("www", SPIKE03_IPV6),
  // A("api", SPIKE03_IPV4),
  // AAAA("api", SPIKE03_IPV6),
  // A("maps", SPIKE03_IPV4),
  // AAAA("maps", SPIKE03_IPV6),
  // A("mapz", SPIKE03_IPV4),
  // AAAA("mapz", SPIKE03_IPV6),
  A("spike-03.dub", SPIKE03_INTERNAL),
  A("spike-03.oob", SPIKE03_OOB),

  A("spike-06", SPIKE06_IPV4),
  AAAA("spike-06", SPIKE06_IPV6),
  A("@", SPIKE06_IPV4, CF_PROXY_ON),
  AAAA("@", SPIKE06_IPV6, CF_PROXY_ON),
  A("www", SPIKE06_IPV4, CF_PROXY_ON),
  AAAA("www", SPIKE06_IPV6, CF_PROXY_ON),
  A("api", SPIKE06_IPV4, CF_PROXY_ON),
  AAAA("api", SPIKE06_IPV6, CF_PROXY_ON),
  A("maps", SPIKE06_IPV4, CF_PROXY_ON),
  AAAA("maps", SPIKE06_IPV6, CF_PROXY_ON),
  A("mapz", SPIKE06_IPV4, CF_PROXY_ON),
  AAAA("mapz", SPIKE06_IPV6, CF_PROXY_ON),
  A("spike-06.ams", SPIKE06_INTERNAL),
  A("spike-06.oob", SPIKE06_OOB),

  A("spike-07", SPIKE07_IPV4),
  AAAA("spike-07", SPIKE07_IPV6),
  A("@", SPIKE07_IPV4, CF_PROXY_ON),
  AAAA("@", SPIKE07_IPV6, CF_PROXY_ON),
  A("www", SPIKE07_IPV4, CF_PROXY_ON),
  AAAA("www", SPIKE07_IPV6, CF_PROXY_ON),
  A("api", SPIKE07_IPV4, CF_PROXY_ON),
  AAAA("api", SPIKE07_IPV6, CF_PROXY_ON),
  A("maps", SPIKE07_IPV4, CF_PROXY_ON),
  AAAA("maps", SPIKE07_IPV6, CF_PROXY_ON),
  A("mapz", SPIKE07_IPV4, CF_PROXY_ON),
  AAAA("mapz", SPIKE07_IPV6, CF_PROXY_ON),
  A("spike-07.ams", SPIKE07_INTERNAL),
  A("spike-07.oob", SPIKE07_OOB),

  A("spike-08", SPIKE08_IPV4),
  AAAA("spike-08", SPIKE08_IPV6),
  A("@", SPIKE08_IPV4, CF_PROXY_ON),
  AAAA("@", SPIKE08_IPV6, CF_PROXY_ON),
  A("www", SPIKE08_IPV4, CF_PROXY_ON),
  AAAA("www", SPIKE08_IPV6, CF_PROXY_ON),
  A("api", SPIKE08_IPV4, CF_PROXY_ON),
  AAAA("api", SPIKE08_IPV6, CF_PROXY_ON),
  A("maps", SPIKE08_IPV4, CF_PROXY_ON),
  AAAA("maps", SPIKE08_IPV6, CF_PROXY_ON),
  A("mapz", SPIKE08_IPV4, CF_PROXY_ON),
  AAAA("mapz", SPIKE08_IPV6, CF_PROXY_ON),
  A("spike-08.ams", SPIKE08_INTERNAL),
  A("spike-08.oob", SPIKE08_OOB),

  // HTTPS / SVCB records
  HTTPS("www", 1, ".", "alpn=h2"),
  HTTPS("api", 1, ".", "alpn=h2"),
  HTTPS("maps", 1, ".", "alpn=h2"),
  HTTPS("mapz", 1, ".", "alpn=h2"),

  // Nominatim servers

  A("dulcy", DULCY_IPV4),
  AAAA("dulcy", DULCY_IPV6),
  A("dulcy.ams", DULCY_INTERNAL),
  A("dulcy.oob", DULCY_OOB),

  A("longma", LONGMA_IPV4),
  AAAA("longma", LONGMA_IPV6),
  A("longma.dub", LONGMA_INTERNAL),
  A("longma.oob", LONGMA_OOB),

  A("stormfly-04", STORMFLY04_IPV4),
  AAAA("stormfly-04", STORMFLY04_IPV6),
  A("stormfly-04.oob", STORMFLY04_OOB),

  A("vhagar", VHAGAR_IPV4),
  AAAA("vhagar", VHAGAR_IPV6),
  A("vhagar.ams", VHAGAR_INTERNAL),
  A("vhagar.oob", VHAGAR_OOB),

  CNAME("nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qgis.nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qa-tile.nominatim", "longma.openstreetmap.org."),

  // Tile servers

  A("odin", ODIN_IPV4),
  AAAA("odin", ODIN_IPV6),
  A("odin.ams", ODIN_INTERNAL),
  A("odin.oob", ODIN_OOB),

  A("ysera", YSERA_IPV4),
  A("ysera.ucl", YSERA_INTERNAL),
  A("ysera.oob", YSERA_OOB),

  A("culebre", CULEBRE_IPV4),
  AAAA("culebre", CULEBRE_IPV6),
  A("culebre.dub", CULEBRE_INTERNAL),
  A("culebre.oob", CULEBRE_OOB),

  A("nidhogg", NIDHOGG_IPV4),
  AAAA("nidhogg", NIDHOGG_IPV6),
  A("nidhogg.oob", NIDHOGG_OOB),

  A("wawel", WAWEL_IPV4),

  A("scorch", SCORCH_IPV4),
  AAAA("scorch", SCORCH_IPV6),

  A("rhaegal", RHAEGAL_IPV4),
  AAAA("rhaegal", RHAEGAL_IPV6),

  A("palulukon", PALULUKON_IPV4),

  A("piasa", PIASA_IPV4),
  AAAA("piasa", PIASA_IPV6),
  A("piasa.oob", PIASA_OOB),

  A("bowser", BOWSER_IPV4),

  A("balerion", BALERION_IPV4),

  A("albi", ALBI_IPV4),
  AAAA("albi", ALBI_IPV6),

  CNAME("tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("a.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("b.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("c.tile", "dualstack.n.sni.global.fastly.net."),

  A("render", CULEBRE_IPV4),
  A("render", NIDHOGG_IPV4),
  AAAA("render", CULEBRE_IPV6),
  AAAA("render", NIDHOGG_IPV6),

  // Vector tile servers

  A("cmok", CMOK_IPV4),

  CNAME("vector", "dualstack.n.sni.global.fastly.net."),

  // Site gateways

  A("ironbelly", IRONBELLY_IPV4),
  AAAA("ironbelly", IRONBELLY_IPV6),
  A("logstash", IRONBELLY_IPV4),
  AAAA("logstash", IRONBELLY_IPV6),
  A("ironbelly.ams", IRONBELLY_INTERNAL),
  A("ironbelly.oob", IRONBELLY_OOB),

  A("fafnir", FAFNIR_IPV4),
  AAAA("fafnir", FAFNIR_IPV6),
  A("fafnir.dub", FAFNIR_INTERNAL),
  A("fafnir.oob", FAFNIR_OOB),

  // Planet servers

  A("norbert", NORBERT_IPV4),
  AAAA("norbert", NORBERT_IPV6),
  A("backup", NORBERT_IPV4),
  AAAA("backup", NORBERT_IPV6),
  A("planet", NORBERT_IPV4),
  AAAA("planet", NORBERT_IPV6),
  A("norbert.ams", NORBERT_INTERNAL),
  A("norbert.oob", NORBERT_OOB),

  // HTTPS / SVCB records
  HTTPS("planet", 1, ".", "alpn=h2"),

  A("horntail", HORNTAIL_IPV4),
  AAAA("horntail", HORNTAIL_IPV6),
  // A("backup", HORNTAIL_IPV4),
  // AAAA("backup", HORNTAIL_IPV6),
  // A("planet", HORNTAIL_IPV4),
  // AAAA("planet", HORNTAIL_IPV6),
  A("horntail.dub", HORNTAIL_INTERNAL),
  A("horntail.oob", HORNTAIL_OOB),

  // Database servers

  A("snap-01.ams", SNAP01_INTERNAL),
  A("snap-01.oob", SNAP01_OOB),

  A("snap-02.ucl", SNAP02_INTERNAL),
  A("snap-02.oob", SNAP02_OOB),

  A("snap-03.dub", SNAP03_INTERNAL),
  A("snap-03.oob", SNAP03_OOB),

  A("karm.ams", KARM_INTERNAL),
  A("karm.oob", KARM_OOB),

  A("eddie.ucl", EDDIE_INTERNAL),
  A("eddie.oob", EDDIE_OOB),

  // Development server with wildcard alias for user sites

  A("faffy", FAFFY_IPV4),
  AAAA("faffy", FAFFY_IPV6),
  A("dev", FAFFY_IPV4),
  AAAA("dev", FAFFY_IPV6),
  A("*.dev", FAFFY_IPV4),
  AAAA("*.dev", FAFFY_IPV6),
  A("ooc", FAFFY_IPV4),
  AAAA("ooc", FAFFY_IPV6),
  A("a.ooc", FAFFY_IPV4),
  AAAA("a.ooc", FAFFY_IPV6),
  A("b.ooc", FAFFY_IPV4),
  AAAA("b.ooc", FAFFY_IPV6),
  A("c.ooc", FAFFY_IPV4),
  AAAA("c.ooc", FAFFY_IPV6),
  A("npe", FAFFY_IPV4),
  AAAA("npe", FAFFY_IPV6),
  A("faffy.ams", FAFFY_INTERNAL),
  A("faffy.oob", FAFFY_OOB),

  // Foundation server

  A("ridley", RIDLEY_IPV4),
  A("blog", RIDLEY_IPV4),
  A("foundation", RIDLEY_IPV4),
  A("ridley.ucl", RIDLEY_INTERNAL),
  A("ridley.oob", RIDLEY_OOB),

  // HTTPS / SVCB records
  HTTPS("blog", 1, ".", "alpn=h2"),
  HTTPS("foundation", 1, ".", "alpn=h2"),

  // Matomo server

  A("smaug", SMAUG_IPV4),
  AAAA("smaug", SMAUG_IPV6),
  A("matomo", SMAUG_IPV4),
  AAAA("matomo", SMAUG_IPV6),
  A("piwik", SMAUG_IPV4),
  AAAA("piwik", SMAUG_IPV6),
  A("smaug.dub", SMAUG_INTERNAL),
  A("smaug.oob", SMAUG_OOB),

  // HTTPS / SVCB records
  HTTPS("matomo", 1, ".", "alpn=h2"),
  HTTPS("piwik", 1, ".", "alpn=h2"),

  // Imagery servers

  A("kessie", KESSIE_IPV4),
  AAAA("kessie", KESSIE_IPV6),
  A("agri", KESSIE_IPV4),
  AAAA("agri", KESSIE_IPV6),
  A("a.agri", KESSIE_IPV4),
  AAAA("a.agri", KESSIE_IPV6),
  A("b.agri", KESSIE_IPV4),
  AAAA("b.agri", KESSIE_IPV6),
  A("c.agri", KESSIE_IPV4),
  AAAA("c.agri", KESSIE_IPV6),
  A("os", KESSIE_IPV4),
  AAAA("os", KESSIE_IPV6),
  A("a.os", KESSIE_IPV4),
  AAAA("a.os", KESSIE_IPV6),
  A("b.os", KESSIE_IPV4),
  AAAA("b.os", KESSIE_IPV6),
  A("c.os", KESSIE_IPV4),
  AAAA("c.os", KESSIE_IPV6),
  A("kessie.oob", KESSIE_OOB),

  // Prometheus server and munin redirect

  A("stormfly-03", STORMFLY03_IPV4),
  AAAA("stormfly-03", STORMFLY03_IPV6),
  A("prometheus", STORMFLY03_IPV4),
  AAAA("prometheus", STORMFLY03_IPV6),
  A("munin", STORMFLY03_IPV4),
  AAAA("munin", STORMFLY03_IPV6),
  A("stormfly-03.oob", STORMFLY03_OOB),

  // HTTPS / SVCB records
  HTTPS("prometheus", 1, ".", "alpn=h2"),
  HTTPS("munin", 1, ".", "alpn=h2"),

  // Management server

  A("idris", IDRIS_IPV4),
  AAAA("idris", IDRIS_IPV6),
  A("acme", IDRIS_IPV4),
  AAAA("acme", IDRIS_IPV6),
  A("apt", IDRIS_IPV4),
  AAAA("apt", IDRIS_IPV6),
  A("chef", IDRIS_IPV4),
  AAAA("chef", IDRIS_IPV6),
  A("dns", IDRIS_IPV4),
  AAAA("dns", IDRIS_IPV6),
  A("git", IDRIS_IPV4),
  AAAA("git", IDRIS_IPV6),
  A("hardware", IDRIS_IPV4),
  AAAA("hardware", IDRIS_IPV6),
  A("idris.dub", IDRIS_INTERNAL),
  A("idris.oob", IDRIS_OOB),

  // HTTPS / SVCB records
  HTTPS("acme", 1, ".", "alpn=h2"),
  HTTPS("chef", 1, ".", "alpn=h2"),
  HTTPS("dns", 1, ".", "alpn=h2"),
  HTTPS("git", 1, ".", "alpn=h2"),
  HTTPS("hardware", 1, ".", "alpn=h2"),

  // KVMs

  A("kvm1.ucl", KVM1_INTERNAL),

  // Managed network switches

  A("switch1.ams", SWITCH1AMS_IPV4),
  AAAA("switch1.ams", SWITCH1AMS_IPV6),

  A("switch1.dub", SWITCH1DUB_IPV4),
  AAAA("switch1.dub", SWITCH1DUB_IPV6),

  // Managed power strips

  A("pdu1.ams", PDU1AMS_INTERNAL),
  A("pdu2.ams", PDU2AMS_INTERNAL),

  A("pdu1.dub", PDU1DUB_INTERNAL),
  A("pdu2.dub", PDU2DUB_INTERNAL),

  // Out of band access servers

  A("oob1.ams", OOB1AMS_INTERNAL),

  A("oob1.dub", OOB1DUB_INTERNAL),

  // Bytemark machine, and the services which operate from it

  A("shenron", SHENRON_IPV4),
  AAAA("shenron", SHENRON_IPV6),
  A("lists", SHENRON_IPV4),
  AAAA("lists", SHENRON_IPV6),
  A("help", SHENRON_IPV4),
  AAAA("help", SHENRON_IPV6),

  // HTTPS / SVCB records
  HTTPS("lists", 1, ".", "alpn=h2"),
  HTTPS("help", 1, ".", "alpn=h2"),

  // Naga service

  A("naga", NAGA_IPV4),
  AAAA("naga", NAGA_IPV6),
  A("svn", NAGA_IPV4),
  AAAA("svn", NAGA_IPV6),
  A("trac", NAGA_IPV4),
  AAAA("trac", NAGA_IPV6),
  A("irc", NAGA_IPV4),
  AAAA("irc", NAGA_IPV6),
  A("blogs", NAGA_IPV4),
  AAAA("blogs", NAGA_IPV6),
  A("welcome", NAGA_IPV4),
  AAAA("welcome", NAGA_IPV6),
  A("operations", NAGA_IPV4),
  AAAA("operations", NAGA_IPV6),
  A("hot", NAGA_IPV4),
  AAAA("hot", NAGA_IPV6),
  A("dmca", NAGA_IPV4),
  AAAA("dmca", NAGA_IPV6),
  A("otrs", NAGA_IPV4),
  AAAA("otrs", NAGA_IPV6),
  A("birthday20", NAGA_IPV4),
  AAAA("birthday20", NAGA_IPV6),

  // HTTPS / SVCB records
  HTTPS("svn", 1, ".", "alpn=h2"),
  HTTPS("trac", 1, ".", "alpn=h2"),
  HTTPS("irc", 1, ".", "alpn=h2"),
  HTTPS("blogs", 1, ".", "alpn=h2"),
  HTTPS("welcome", 1, ".", "alpn=h2"),
  HTTPS("operations", 1, ".", "alpn=h2"),
  HTTPS("hot", 1, ".", "alpn=h2"),
  HTTPS("dmca", 1, ".", "alpn=h2"),
  // HTTPS("otrs", 1, ".", "alpn=h2"), - OTRS is not available using HTTPS/2
  HTTPS("birthday20", 1, ".", "alpn=h2"),

  A("naga.dub", NAGA_INTERNAL),
  A("naga.oob", NAGA_OOB),

  // Wiki servers

  A("konqi", KONQI_IPV4),
  AAAA("konqi", KONQI_IPV6),
  A("wiki", KONQI_IPV4),
  AAAA("wiki", KONQI_IPV6),
  A("konqi.dub", KONQI_INTERNAL),
  A("konqi.oob", KONQI_OOB),

  // HTTPS / SVCB records
  HTTPS("wiki", 1, ".", "alpn=h2"),

  // Overpass server

  A("grisu", GRISU_IPV4),
  AAAA("grisu", GRISU_IPV6),
  A("query", GRISU_IPV4),
  AAAA("query", GRISU_IPV6),
  A("grisu.dub", GRISU_INTERNAL),
  A("grisu.oob", GRISU_OOB),

  // HTTPS / SVCB records
  HTTPS("query", 1, ".", "alpn=h2"),

  // GPS tile server

  A("muirdris", MUIRDRIS_IPV4),
  AAAA("muirdris", MUIRDRIS_IPV6),
  A("gps-tile", MUIRDRIS_IPV4),
  AAAA("gps-tile", MUIRDRIS_IPV6),
  A("a.gps-tile", MUIRDRIS_IPV4),
  AAAA("a.gps-tile", MUIRDRIS_IPV6),
  A("b.gps-tile", MUIRDRIS_IPV4),
  AAAA("b.gps-tile", MUIRDRIS_IPV6),
  A("c.gps-tile", MUIRDRIS_IPV4),
  AAAA("c.gps-tile", MUIRDRIS_IPV6),
  A("gps.tile", MUIRDRIS_IPV4),
  AAAA("gps.tile", MUIRDRIS_IPV6),
  A("gps-a.tile", MUIRDRIS_IPV4),
  AAAA("gps-a.tile", MUIRDRIS_IPV6),
  A("gps-b.tile", MUIRDRIS_IPV4),
  AAAA("gps-b.tile", MUIRDRIS_IPV6),
  A("gps-c.tile", MUIRDRIS_IPV4),
  AAAA("gps-c.tile", MUIRDRIS_IPV6),
  A("muirdris.dub", MUIRDRIS_INTERNAL),
  A("muirdris.oob", MUIRDRIS_OOB),

  // HTTPS / SVCB records
  HTTPS("gps-tile", 1, ".", "alpn=h2"),
  HTTPS("a.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("b.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("c.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("gps-a.tile", 1, ".", "alpn=h2"),
  HTTPS("gps-b.tile", 1, ".", "alpn=h2"),
  HTTPS("gps-c.tile", 1, ".", "alpn=h2"),

  // Tile cache servers

  A("ridgeback", RIDGEBACK_IPV4),
  A("ridgeback.oob", RIDGEBACK_OOB),
  A("angor", ANGOR_IPV4),
  AAAA("angor", ANGOR_IPV6),
  A("ladon", LADON_IPV4),
  AAAA("ladon", LADON_IPV6),
  A("ascalon", ASCALON_IPV4),
  A("neak", NEAK_IPV4),
  A("meraxes", MERAXES_IPV4),
  AAAA("meraxes", MERAXES_IPV6),

  // Donation site and new OSMF crm site

  A("donate", RIDLEY_IPV4),
  A("support", RIDLEY_IPV4),
  A("supporting", RIDLEY_IPV4),

  // HTTPS / SVCB records
  HTTPS("donate", 1, ".", "alpn=h2"),
  HTTPS("support", 1, ".", "alpn=h2"),
  HTTPS("supporting", 1, ".", "alpn=h2"),

  A("lockheed", LOCKHEED_IPV4),
  AAAA("lockheed", LOCKHEED_IPV6),
  A("lockheed.ams", LOCKHEED_INTERNAL),
  A("lockheed.oob", LOCKHEED_OOB),
  A("tiler", LOCKHEED_IPV4),
  AAAA("tiler", LOCKHEED_IPV6),
  A("us-imagery", LOCKHEED_IPV4),
  AAAA("us-imagery", LOCKHEED_IPV6),
  A("a.us-imagery", LOCKHEED_IPV4),
  AAAA("a.us-imagery", LOCKHEED_IPV6),
  A("b.us-imagery", LOCKHEED_IPV4),
  AAAA("b.us-imagery", LOCKHEED_IPV6),
  A("c.us-imagery", LOCKHEED_IPV4),
  AAAA("c.us-imagery", LOCKHEED_IPV6),

  // HTTPS / SVCB records
  HTTPS("tiler", 1, ".", "alpn=h2"),
  HTTPS("us-imagery", 1, ".", "alpn=h2"),
  HTTPS("a.us-imagery", 1, ".", "alpn=h2"),
  HTTPS("b.us-imagery", 1, ".", "alpn=h2"),
  HTTPS("c.us-imagery", 1, ".", "alpn=h2"),

  // Discourse server ("community")

  A("fume", FUME_IPV4),
  AAAA("fume", FUME_IPV6),
  A("fume.dub", FUME_INTERNAL),
  A("fume.oob", FUME_OOB),

  A("community", FUME_IPV4),
  A("communities", FUME_IPV4),
  A("c", FUME_IPV4),
  AAAA("community", FUME_IPV6),
  AAAA("communities", FUME_IPV6),
  AAAA("c", FUME_IPV6),

  // HTTPS / SVCB records
  HTTPS("community", 1, ".", "alpn=h2"),
  HTTPS("communities", 1, ".", "alpn=h2"),
  HTTPS("c", 1, ".", "alpn=h2"),

  CNAME("community-cdn", "dualstack.n.sni.global.fastly.net."),
  TXT("community", "google-site-verification=hQ8GZyj4KwnPqAX2oAzpbLrh6I5dfR08PSdL3icVkfg"),

  A("forum", FUME_IPV4),
  AAAA("forum", FUME_IPV6),

  // HTTPS / SVCB records
  HTTPS("forum", 1, ".", "alpn=h2"),

  // Taginfo and Staging Blog Server

  A("tabaluga", TABALUGA_IPV4),
  AAAA("tabaluga", TABALUGA_IPV6),
  A("tabaluga.ams", TABALUGA_INTERNAL),
  A("tabaluga.oob", TABALUGA_OOB),

  A("staging.blog", TABALUGA_IPV4),
  AAAA("staging.blog", TABALUGA_IPV6),

  // HTTPS / SVCB records
  HTTPS("staging.blog", 1, ".", "alpn=h2"),

  A("taginfo", TABALUGA_IPV4),
  AAAA("taginfo", TABALUGA_IPV6),

  // HTTPS / SVCB records
  HTTPS("taginfo", 1, ".", "alpn=h2"),

  // Spare servers

  A("dribble", DRIBBLE_IPV4),
  AAAA("dribble", DRIBBLE_IPV6),
  A("dribble.ams", DRIBBLE_INTERNAL),
  A("dribble.oob", DRIBBLE_OOB),

  // Uptime site at StatusCake

  CNAME("uptime", "uptimessl-new.statuscake.com."),

  // Dynamic DNS records

  DYNAMIC_RECORDS

);
