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

  A("a.mx", IPV4["fafnir.he"]),
  AAAA("a.mx", IPV6["fafnir.he"]),
  A("mail", IPV4["fafnir.he"]),
  AAAA("mail", IPV6["fafnir.he"]),
  A("mta-sts", IPV4["fafnir.he"]),
  AAAA("mta-sts", IPV6["fafnir.he"]),

  // Publish SPF records indicating that only shenron sends mail

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",         // fafnir ipv4 (he.net)
      "ip6:2001:470:1:b3b::2",      // fafnir ipv6 (he.net)
      "ip4:87.252.214.98",          // fafnir ipv4 (equinix)
      "ip6:2001:4d78:fe03:1c::2",   // fafnir ipv6 (equinix)
      "ip4:193.60.236.0/24",        // ucl external
      "ip4:82.199.86.96/27",        // amsterdam external (equinix)
      "ip6:2001:4d78:500:5e3::/64", // amsterdam external (equinix)
      "ip4:87.252.214.96/27",       // dublin external (equinix)
      "ip6:2001:4d78:fe03:1c::/64", // dublin external (equinix)
      "ip4:184.104.179.128/27",     // amsterdam external (he.net)
      "ip6:2001:470:1:fa1::/64",    // amsterdam external (he.net)
      "ip4:184.104.226.96/27",      // dublin external (he.net)
      "ip6:2001:470:1:b3b::/64",    // dublin external (he.net)
      "mx",                         // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "messages",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",         // fafnir ipv4 (he.net)
      "ip6:2001:470:1:b3b::2",      // fafnir ipv6 (he.net)
      "ip4:87.252.214.98",          // fafnir ipv4 (equinix)
      "ip6:2001:4d78:fe03:1c::2",   // fafnir ipv6 (equinix)
      "ip4:193.60.236.0/24",        // ucl external
      "ip4:82.199.86.96/27",        // amsterdam external (equinix)
      "ip6:2001:4d78:500:5e3::/64", // amsterdam external (equinix)
      "ip4:87.252.214.96/27",       // dublin external (equinix)
      "ip6:2001:4d78:fe03:1c::/64", // dublin external (equinix)
      "ip4:184.104.179.128/27",     // amsterdam external (he.net)
      "ip6:2001:470:1:fa1::/64",    // amsterdam external (he.net)
      "ip4:184.104.226.96/27",      // dublin external (he.net)
      "ip6:2001:470:1:b3b::/64",    // dublin external (he.net)
      "mx",                         // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "noreply",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",         // fafnir ipv4 (he.net)
      "ip6:2001:470:1:b3b::2",      // fafnir ipv6 (he.net)
      "ip4:87.252.214.98",          // fafnir ipv4 (equinix)
      "ip6:2001:4d78:fe03:1c::2",   // fafnir ipv6 (equinix)
      "ip4:193.60.236.0/24",        // ucl external
      "ip4:82.199.86.96/27",        // amsterdam external (equinix)
      "ip6:2001:4d78:500:5e3::/64", // amsterdam external (equinix)
      "ip4:87.252.214.96/27",       // dublin external (equinix)
      "ip6:2001:4d78:fe03:1c::/64", // dublin external (equinix)
      "ip4:184.104.179.128/27",     // amsterdam external (he.net)
      "ip6:2001:470:1:fa1::/64",    // amsterdam external (he.net)
      "ip4:184.104.226.96/27",      // dublin external (he.net)
      "ip6:2001:470:1:b3b::/64",    // dublin external (he.net)
      "mx",                         // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "otrs",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",         // fafnir ipv4 (he.net)
      "ip6:2001:470:1:b3b::2",      // fafnir ipv6 (he.net)
      "ip4:87.252.214.98",          // fafnir ipv4 (equinix)
      "ip6:2001:4d78:fe03:1c::2",   // fafnir ipv6 (equinix)
      "ip4:193.60.236.0/24",        // ucl external
      "ip4:82.199.86.96/27",        // amsterdam external (equinix)
      "ip6:2001:4d78:500:5e3::/64", // amsterdam external (equinix)
      "ip4:87.252.214.96/27",       // dublin external (equinix)
      "ip6:2001:4d78:fe03:1c::/64", // dublin external (equinix)
      "ip4:184.104.179.128/27",     // amsterdam external (he.net)
      "ip6:2001:470:1:fa1::/64",    // amsterdam external (he.net)
      "ip4:184.104.226.96/27",      // dublin external (he.net)
      "ip6:2001:470:1:b3b::/64",    // dublin external (he.net)
      "mx",                         // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "community",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",         // fafnir ipv4 (he.net)
      "ip6:2001:470:1:b3b::2",      // fafnir ipv6 (he.net)
      "ip4:87.252.214.98",          // fafnir ipv4 (equinix)
      "ip6:2001:4d78:fe03:1c::2",   // fafnir ipv6 (equinix)
      "ip4:193.60.236.0/24",        // ucl external
      "ip4:82.199.86.96/27",        // amsterdam external (equinix)
      "ip6:2001:4d78:500:5e3::/64", // amsterdam external (equinix)
      "ip4:87.252.214.96/27",       // dublin external (equinix)
      "ip6:2001:4d78:fe03:1c::/64", // dublin external (equinix)
      "ip4:184.104.179.128/27",     // amsterdam external (he.net)
      "ip6:2001:470:1:fa1::/64",    // amsterdam external (he.net)
      "ip4:184.104.226.96/27",      // dublin external (he.net)
      "ip6:2001:470:1:b3b::/64",    // dublin external (he.net)
      "mx",                         // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "supporting",
    parts: [
      "v=spf1",
      "ip4:184.104.226.98",         // fafnir ipv4 (he.net)
      "ip6:2001:470:1:b3b::2",      // fafnir ipv6 (he.net)
      "ip4:87.252.214.98",          // fafnir ipv4 (equinix)
      "ip6:2001:4d78:fe03:1c::2",   // fafnir ipv6 (equinix)
      "ip4:193.60.236.0/24",        // ucl external
      "ip4:82.199.86.96/27",        // amsterdam external (equinix)
      "ip6:2001:4d78:500:5e3::/64", // amsterdam external (equinix)
      "ip4:87.252.214.96/27",       // dublin external (equinix)
      "ip6:2001:4d78:fe03:1c::/64", // dublin external (equinix)
      "ip4:184.104.179.128/27",     // amsterdam external (he.net)
      "ip6:2001:470:1:fa1::/64",    // amsterdam external (he.net)
      "ip4:184.104.226.96/27",      // dublin external (he.net)
      "ip6:2001:470:1:b3b::/64",    // dublin external (he.net)
      "mx",                         // safety net if we change mx
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

  // Bluesky domain verification

  TXT("_atproto", "did=did:plc:i6llv7iwybeipknl57v4dalb"),

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

  A("spike-01", IPV4["spike-01.he"]),
  AAAA("spike-01", IPV6["spike-01.he"]),
  // A("@", IPV4["spike-01.he"]),
  // AAAA("@", IPV6["spike-01.he"]),
  // A("www", IPV4["spike-01.he"]),
  // AAAA("www", IPV6["spike-01.he"]),
  // A("api", IPV4["spike-01.he"]),
  // AAAA("api", IPV6["spike-01.he"]),
  // A("maps", IPV4["spike-01.he"]),
  // AAAA("maps", IPV6["spike-01.he"]),
  // A("mapz", IPV4["spike-01.he"]),
  // AAAA("mapz", IPV6["spike-01.he"]),
  A("spike-01.dub", IPV4["spike-01.dub"]),
  A("spike-01.oob", IPV4["spike-01.oob"]),

  A("spike-02", IPV4["spike-02.he"]),
  AAAA("spike-02", IPV6["spike-02.he"]),
  // A("@", IPV4["spike-02.he"]),
  // AAAA("@", IPV6["spike-02.he"]),
  // A("www", IPV4["spike-02.he"]),
  // AAAA("www", IPV6["spike-02.he"]),
  // A("api", IPV4["spike-02.he"]),
  // AAAA("api", IPV6["spike-02.he"]),
  // A("maps", IPV4["spike-02.he"]),
  // AAAA("maps", IPV6["spike-02.he"]),
  // A("mapz", IPV4["spike-02.he"]),
  // AAAA("mapz", IPV6["spike-02.he"]),
  A("spike-02.dub", IPV4["spike-02.dub"]),
  A("spike-02.oob", IPV4["spike-02.oob"]),

  A("spike-03", IPV4["spike-03.he"]),
  AAAA("spike-03", IPV6["spike-03.he"]),
  // A("@", IPV4["spike-03.he"]),
  // AAAA("@", IPV6["spike-03.he"]),
  // A("www", IPV4["spike-03.he"]),
  // AAAA("www", IPV6["spike-03.he"]),
  // A("api", IPV4["spike-03.he"]),
  // AAAA("api", IPV6["spike-03.he"]),
  // A("maps", IPV4["spike-03.he"]),
  // AAAA("maps", IPV6["spike-03.he"]),
  // A("mapz", IPV4["spike-03.he"]),
  // AAAA("mapz", IPV6["spike-03.he"]),
  A("spike-03.dub", IPV4["spike-03.dub"]),
  A("spike-03.oob", IPV4["spike-03.oob"]),

  A("spike-06", IPV4["spike-06"]),
  AAAA("spike-06", IPV6["spike-06"]),
  A("@", IPV4["spike-06"], CF_PROXY_ON),
  AAAA("@", IPV6["spike-06"], CF_PROXY_ON),
  A("www", IPV4["spike-06"], CF_PROXY_ON),
  AAAA("www", IPV6["spike-06"], CF_PROXY_ON),
  A("api", IPV4["spike-06"], CF_PROXY_ON),
  AAAA("api", IPV6["spike-06"], CF_PROXY_ON),
  A("maps", IPV4["spike-06"], CF_PROXY_ON),
  AAAA("maps", IPV6["spike-06"], CF_PROXY_ON),
  A("mapz", IPV4["spike-06"], CF_PROXY_ON),
  AAAA("mapz", IPV6["spike-06"], CF_PROXY_ON),
  A("spike-06.ams", IPV4["spike-06.ams"]),
  A("spike-06.oob", IPV4["spike-06.oob"]),

  A("spike-07", IPV4["spike-07"]),
  AAAA("spike-07", IPV6["spike-07"]),
  A("@", IPV4["spike-07"], CF_PROXY_ON),
  AAAA("@", IPV6["spike-07"], CF_PROXY_ON),
  A("www", IPV4["spike-07"], CF_PROXY_ON),
  AAAA("www", IPV6["spike-07"], CF_PROXY_ON),
  A("api", IPV4["spike-07"], CF_PROXY_ON),
  AAAA("api", IPV6["spike-07"], CF_PROXY_ON),
  A("maps", IPV4["spike-07"], CF_PROXY_ON),
  AAAA("maps", IPV6["spike-07"], CF_PROXY_ON),
  A("mapz", IPV4["spike-07"], CF_PROXY_ON),
  AAAA("mapz", IPV6["spike-07"], CF_PROXY_ON),
  A("spike-07.ams", IPV4["spike-07.ams"]),
  A("spike-07.oob", IPV4["spike-07.oob"]),

  A("spike-08", IPV4["spike-08"]),
  AAAA("spike-08", IPV6["spike-08"]),
  A("@", IPV4["spike-08"], CF_PROXY_ON),
  AAAA("@", IPV6["spike-08"], CF_PROXY_ON),
  A("www", IPV4["spike-08"], CF_PROXY_ON),
  AAAA("www", IPV6["spike-08"], CF_PROXY_ON),
  A("api", IPV4["spike-08"], CF_PROXY_ON),
  AAAA("api", IPV6["spike-08"], CF_PROXY_ON),
  A("maps", IPV4["spike-08"], CF_PROXY_ON),
  AAAA("maps", IPV6["spike-08"], CF_PROXY_ON),
  A("mapz", IPV4["spike-08"], CF_PROXY_ON),
  AAAA("mapz", IPV6["spike-08"], CF_PROXY_ON),
  A("spike-08.ams", IPV4["spike-08.ams"]),
  A("spike-08.oob", IPV4["spike-08.oob"]),

  // HTTPS / SVCB records
  HTTPS("www", 1, ".", "alpn=h2"),
  HTTPS("api", 1, ".", "alpn=h2"),
  HTTPS("maps", 1, ".", "alpn=h2"),
  HTTPS("mapz", 1, ".", "alpn=h2"),

  // Nominatim servers

  A("dulcy", IPV4["dulcy"]),
  AAAA("dulcy", IPV6["dulcy"]),
  A("dulcy.ams", IPV4["dulcy.ams"]),
  A("dulcy.oob", IPV4["dulcy.oob"]),

  A("longma", IPV4["longma.he"]),
  AAAA("longma", IPV6["longma.he"]),
  A("longma.dub", IPV4["longma.dub"]),
  A("longma.oob", IPV4["longma.oob"]),

  A("stormfly-04", IPV4["stormfly-04"]),
  AAAA("stormfly-04", IPV6["stormfly-04"]),
  A("stormfly-04.oob", IPV4["stormfly-04.oob"]),

  A("vhagar", IPV4["vhagar"]),
  AAAA("vhagar", IPV6["vhagar"]),
  A("vhagar.ams", IPV4["vhagar.ams"]),
  A("vhagar.oob", IPV4["vhagar.oob"]),

  CNAME("nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qgis.nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qa-tile.nominatim", "longma.openstreetmap.org."),

  // Tile servers

  A("odin", IPV4["odin"]),
  AAAA("odin", IPV6["odin"]),
  A("odin.ams", IPV4["odin.ams"]),
  A("odin.oob", IPV4["odin.oob"]),

  A("ysera", IPV4["ysera"]),
  A("ysera.ucl", IPV4["ysera.ucl"]),
  A("ysera.oob", IPV4["ysera.oob"]),

  A("culebre", IPV4["culebre.he"]),
  AAAA("culebre", IPV6["culebre.he"]),
  A("culebre.dub", IPV4["culebre.dub"]),
  A("culebre.oob", IPV4["culebre.oob"]),

  A("nidhogg", IPV4["nidhogg"]),
  AAAA("nidhogg", IPV6["nidhogg"]),
  A("nidhogg.oob", IPV4["nidhogg.oob"]),

  A("wawel", IPV4["wawel"]),

  A("rhaegal", IPV4["rhaegal"]),
  AAAA("rhaegal", IPV6["rhaegal"]),

  A("palulukon", IPV4["palulukon"]),

  A("piasa", IPV4["piasa"]),
  AAAA("piasa", IPV6["piasa"]),
  A("piasa.oob", IPV4["piasa.oob"]),

  A("albi", IPV4["albi"]),
  AAAA("albi", IPV6["albi"]),

  CNAME("tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("a.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("b.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("c.tile", "dualstack.n.sni.global.fastly.net."),

  A("render", IPV4["culebre.he"]),
  A("render", IPV4["nidhogg"]),
  AAAA("render", IPV6["culebre.he"]),
  AAAA("render", IPV6["nidhogg"]),

  // Vector tile servers

  A("cmok", IPV4["cmok"]),

  A("dribble", IPV4["dribble"]),
  AAAA("dribble", IPV6["dribble"]),
  A("dribble.ams", IPV4["dribble.ams"]),
  A("dribble.oob", IPV4["dribble.oob"]),

  CNAME("vector", "dualstack.n.sni.global.fastly.net."),

  // Site gateways

  A("fafnir", IPV4["fafnir.he"]),
  AAAA("fafnir", IPV6["fafnir.he"]),
  A("fafnir.dub", IPV4["fafnir.dub"]),
  A("fafnir.oob", IPV4["fafnir.oob"]),

  // Planet servers

  A("norbert", IPV4["norbert"]),
  AAAA("norbert", IPV6["norbert"]),
  A("backup", IPV4["norbert"]),
  AAAA("backup", IPV6["norbert"]),
  A("planet", IPV4["norbert"]),
  AAAA("planet", IPV6["norbert"]),
  A("norbert.ams", IPV4["norbert.ams"]),
  A("norbert.oob", IPV4["norbert.oob"]),

  // HTTPS / SVCB records
  HTTPS("planet", 1, ".", "alpn=h2"),

  A("horntail", IPV4["horntail.he"]),
  AAAA("horntail", IPV6["horntail.he"]),
  // A("backup", IPV4["horntail.he"]),
  // AAAA("backup", IPV6["horntail.he"]),
  // A("planet", IPV4["horntail.he"]),
  // AAAA("planet", IPV6["horntail.he"]),
  A("horntail.dub", IPV4["horntail.dub"]),
  A("horntail.oob", IPV4["horntail.oob"]),

  // Database servers

  A("snap-01.ams", IPV4["snap-01.ams"]),
  A("snap-01.oob", IPV4["snap-01.oob"]),

  A("snap-02.ucl", IPV4["snap-02.ucl"]),
  A("snap-02.oob", IPV4["snap-02.oob"]),

  A("snap-03.dub", IPV4["snap-03.dub"]),
  A("snap-03.oob", IPV4["snap-03.oob"]),

  A("karm.ams", IPV4["karm.ams"]),
  A("karm.oob", IPV4["karm.oob"]),

  A("eddie.ucl", IPV4["eddie.ucl"]),
  A("eddie.oob", IPV4["eddie.oob"]),

  // Development server with wildcard alias for user sites

  A("faffy", IPV4["faffy"]),
  AAAA("faffy", IPV6["faffy"]),
  A("dev", IPV4["faffy"]),
  AAAA("dev", IPV6["faffy"]),
  A("*.dev", IPV4["faffy"]),
  AAAA("*.dev", IPV6["faffy"]),
  A("ooc", IPV4["faffy"]),
  AAAA("ooc", IPV6["faffy"]),
  A("a.ooc", IPV4["faffy"]),
  AAAA("a.ooc", IPV6["faffy"]),
  A("b.ooc", IPV4["faffy"]),
  AAAA("b.ooc", IPV6["faffy"]),
  A("c.ooc", IPV4["faffy"]),
  AAAA("c.ooc", IPV6["faffy"]),
  A("npe", IPV4["faffy"]),
  AAAA("npe", IPV6["faffy"]),
  A("faffy.ams", IPV4["faffy.ams"]),
  A("faffy.oob", IPV4["faffy.oob"]),

  // Foundation server

  A("ridley", IPV4["ridley"]),
  A("blog", IPV4["ridley"]),
  A("foundation", IPV4["ridley"]),
  A("ridley.ucl", IPV4["ridley.ucl"]),
  A("ridley.oob", IPV4["ridley.oob"]),

  // HTTPS / SVCB records
  HTTPS("blog", 1, ".", "alpn=h2"),
  HTTPS("foundation", 1, ".", "alpn=h2"),

  // Matomo server

  A("smaug", IPV4["smaug.he"]),
  AAAA("smaug", IPV6["smaug.he"]),
  A("matomo", IPV4["smaug.he"]),
  AAAA("matomo", IPV6["smaug.he"]),
  A("piwik", IPV4["smaug.he"]),
  AAAA("piwik", IPV6["smaug.he"]),
  A("smaug.dub", IPV4["smaug.dub"]),
  A("smaug.oob", IPV4["smaug.oob"]),

  // HTTPS / SVCB records
  HTTPS("matomo", 1, ".", "alpn=h2"),
  HTTPS("piwik", 1, ".", "alpn=h2"),

  // Imagery servers

  A("agri", IPV4["lockheed"]),
  AAAA("agri", IPV6["lockheed"]),
  A("a.agri", IPV4["lockheed"]),
  AAAA("a.agri", IPV6["lockheed"]),
  A("b.agri", IPV4["lockheed"]),
  AAAA("b.agri", IPV6["lockheed"]),
  A("c.agri", IPV4["lockheed"]),
  AAAA("c.agri", IPV6["lockheed"]),

  // HTTPS / SVCB records
  HTTPS("agri", 1, ".", "alpn=h2"),
  HTTPS("a.agri", 1, ".", "alpn=h2"),
  HTTPS("b.agri", 1, ".", "alpn=h2"),
  HTTPS("c.agri", 1, ".", "alpn=h2"),

  A("os", IPV4["lockheed"]),
  AAAA("os", IPV6["lockheed"]),
  A("a.os", IPV4["lockheed"]),
  AAAA("a.os", IPV6["lockheed"]),
  A("b.os", IPV4["lockheed"]),
  AAAA("b.os", IPV6["lockheed"]),
  A("c.os", IPV4["lockheed"]),
  AAAA("c.os", IPV6["lockheed"]),

  // HTTPS / SVCB records
  HTTPS("os", 1, ".", "alpn=h2"),
  HTTPS("a.os", 1, ".", "alpn=h2"),
  HTTPS("b.os", 1, ".", "alpn=h2"),
  HTTPS("c.os", 1, ".", "alpn=h2"),


  // Prometheus server and munin redirect

  A("stormfly-03", IPV4["stormfly-03"]),
  AAAA("stormfly-03", IPV6["stormfly-03"]),
  A("prometheus", IPV4["stormfly-03"]),
  AAAA("prometheus", IPV6["stormfly-03"]),
  A("munin", IPV4["stormfly-03"]),
  AAAA("munin", IPV6["stormfly-03"]),
  A("stormfly-03.oob", IPV4["stormfly-03.oob"]),

  // HTTPS / SVCB records
  HTTPS("prometheus", 1, ".", "alpn=h2"),
  HTTPS("munin", 1, ".", "alpn=h2"),

  // Management server

  A("idris", IPV4["idris.he"]),
  AAAA("idris", IPV6["idris.he"]),
  A("acme", IPV4["idris.he"]),
  AAAA("acme", IPV6["idris.he"]),
  A("apt", IPV4["idris.he"]),
  AAAA("apt", IPV6["idris.he"]),
  A("chef", IPV4["idris.he"]),
  AAAA("chef", IPV6["idris.he"]),
  A("dns", IPV4["idris.he"]),
  AAAA("dns", IPV6["idris.he"]),
  A("git", IPV4["idris.he"]),
  AAAA("git", IPV6["idris.he"]),
  A("hardware", IPV4["idris.he"]),
  AAAA("hardware", IPV6["idris.he"]),
  A("idris.dub", IPV4["idris.dub"]),
  A("idris.oob", IPV4["idris.oob"]),

  // HTTPS / SVCB records
  HTTPS("acme", 1, ".", "alpn=h2"),
  HTTPS("chef", 1, ".", "alpn=h2"),
  HTTPS("dns", 1, ".", "alpn=h2"),
  HTTPS("git", 1, ".", "alpn=h2"),
  HTTPS("hardware", 1, ".", "alpn=h2"),

  // Managed network switches

  A("switch1.ams", IPV4["switch1.ams"]),
  AAAA("switch1.ams", IPV6["switch1.ams"]),

  A("switch1.dub", IPV4["switch1.he.dub"]),
  AAAA("switch1.dub", IPV6["switch1.he.dub"]),

  // Managed power strips

  A("pdu1.ams", IPV4["pdu1.ams"]),
  A("pdu2.ams", IPV4["pdu2.ams"]),

  A("pdu1.dub", IPV4["pdu1.dub"]),
  A("pdu2.dub", IPV4["pdu2.dub"]),

  // Out of band access servers

  A("oob1.ams", IPV4["oob1.ams"]),

  A("oob1.dub", IPV4["oob1.dub"]),

  // Network gateways

  A("equinix-gw.ams", IPV4["equinix-gw.ams"]),
  AAAA("equinix-gw.ams", IPV6["equinix-gw.ams"]),
  A("equinix-gw-1.ams", IPV4["equinix-gw-1.ams"]),
  AAAA("equinix-gw-1.ams", IPV6["equinix-gw-1.ams"]),
  A("equinix-gw-2.ams", IPV4["equinix-gw-2.ams"]),
  AAAA("equinix-gw-2.ams", IPV6["equinix-gw-2.ams"]),
  A("equinix-osm.ams", IPV4["equinix-osm.ams"]),
  AAAA("equinix-osm.ams", IPV6["equinix-osm.ams"]),

  A("equinix-gw.dub", IPV4["equinix-gw.dub"]),
  AAAA("equinix-gw.dub", IPV6["equinix-gw.dub"]),
  A("equinix-gw-1.dub", IPV4["equinix-gw-1.dub"]),
  AAAA("equinix-gw-1.dub", IPV6["equinix-gw-1.dub"]),
  A("equinix-gw-2.dub", IPV4["equinix-gw-2.dub"]),
  AAAA("equinix-gw-2.dub", IPV6["equinix-gw-2.dub"]),
  A("equinix-osm.dub", IPV4["equinix-osm.dub"]),
  AAAA("equinix-osm.dub", IPV6["equinix-osm.dub"]),

  // Bytemark machine, and the services which operate from it

  A("shenron", IPV4["shenron"]),
  AAAA("shenron", IPV6["shenron"]),
  A("lists", IPV4["shenron"]),
  AAAA("lists", IPV6["shenron"]),
  A("help", IPV4["shenron"]),
  AAAA("help", IPV6["shenron"]),

  // HTTPS / SVCB records
  HTTPS("lists", 1, ".", "alpn=h2"),
  HTTPS("help", 1, ".", "alpn=h2"),

  // Naga service

  A("naga", IPV4["naga.he"]),
  AAAA("naga", IPV6["naga.he"]),
  A("svn", IPV4["naga.he"]),
  AAAA("svn", IPV6["naga.he"]),
  A("trac", IPV4["naga.he"]),
  AAAA("trac", IPV6["naga.he"]),
  A("irc", IPV4["naga.he"]),
  AAAA("irc", IPV6["naga.he"]),
  A("blogs", IPV4["naga.he"]),
  AAAA("blogs", IPV6["naga.he"]),
  A("welcome", IPV4["naga.he"]),
  AAAA("welcome", IPV6["naga.he"]),
  A("operations", IPV4["naga.he"]),
  AAAA("operations", IPV6["naga.he"]),
  A("hot", IPV4["naga.he"]),
  AAAA("hot", IPV6["naga.he"]),
  A("dmca", IPV4["naga.he"]),
  AAAA("dmca", IPV6["naga.he"]),
  A("otrs", IPV4["naga.he"]),
  AAAA("otrs", IPV6["naga.he"]),
  A("birthday20", IPV4["naga.he"]),
  AAAA("birthday20", IPV6["naga.he"]),

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

  A("naga.dub", IPV4["naga.dub"]),
  A("naga.oob", IPV4["naga.oob"]),

  // Wiki servers

  A("konqi", IPV4["konqi.he"]),
  AAAA("konqi", IPV6["konqi.he"]),
  A("wiki", IPV4["konqi.he"]),
  AAAA("wiki", IPV6["konqi.he"]),
  A("konqi.dub", IPV4["konqi.dub"]),
  A("konqi.oob", IPV4["konqi.oob"]),

  // HTTPS / SVCB records
  HTTPS("wiki", 1, ".", "alpn=h2"),

  // Overpass server

  A("grisu", IPV4["grisu.he"]),
  AAAA("grisu", IPV6["grisu.he"]),
  A("query", IPV4["grisu.he"]),
  AAAA("query", IPV6["grisu.he"]),
  A("grisu.dub", IPV4["grisu.dub"]),
  A("grisu.oob", IPV4["grisu.oob"]),

  // HTTPS / SVCB records
  HTTPS("query", 1, ".", "alpn=h2"),

  // GPS tile server

  A("muirdris", IPV4["muirdris.he"]),
  AAAA("muirdris", IPV6["muirdris.he"]),
  A("gps-tile", IPV4["muirdris.he"]),
  AAAA("gps-tile", IPV6["muirdris.he"]),
  A("a.gps-tile", IPV4["muirdris.he"]),
  AAAA("a.gps-tile", IPV6["muirdris.he"]),
  A("b.gps-tile", IPV4["muirdris.he"]),
  AAAA("b.gps-tile", IPV6["muirdris.he"]),
  A("c.gps-tile", IPV4["muirdris.he"]),
  AAAA("c.gps-tile", IPV6["muirdris.he"]),
  A("gps.tile", IPV4["muirdris.he"]),
  AAAA("gps.tile", IPV6["muirdris.he"]),
  A("gps-a.tile", IPV4["muirdris.he"]),
  AAAA("gps-a.tile", IPV6["muirdris.he"]),
  A("gps-b.tile", IPV4["muirdris.he"]),
  AAAA("gps-b.tile", IPV6["muirdris.he"]),
  A("gps-c.tile", IPV4["muirdris.he"]),
  AAAA("gps-c.tile", IPV6["muirdris.he"]),
  A("muirdris.dub", IPV4["muirdris.dub"]),
  A("muirdris.oob", IPV4["muirdris.oob"]),

  // HTTPS / SVCB records
  HTTPS("gps-tile", 1, ".", "alpn=h2"),
  HTTPS("a.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("b.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("c.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("gps-a.tile", 1, ".", "alpn=h2"),
  HTTPS("gps-b.tile", 1, ".", "alpn=h2"),
  HTTPS("gps-c.tile", 1, ".", "alpn=h2"),

  // Tile cache servers

  A("ridgeback", IPV4["ridgeback"]),
  A("ridgeback.oob", IPV4["ridgeback.oob"]),
  A("angor", IPV4["angor"]),
  AAAA("angor", IPV6["angor"]),
  A("ladon", IPV4["ladon"]),
  AAAA("ladon", IPV6["ladon"]),
  A("neak", IPV4["neak"]),
  A("meraxes", IPV4["meraxes"]),
  AAAA("meraxes", IPV6["meraxes"]),

  // Donation site and new OSMF crm site

  A("donate", IPV4["ridley"]),
  A("support", IPV4["ridley"]),
  A("supporting", IPV4["ridley"]),

  // HTTPS / SVCB records
  HTTPS("donate", 1, ".", "alpn=h2"),
  HTTPS("support", 1, ".", "alpn=h2"),
  HTTPS("supporting", 1, ".", "alpn=h2"),

  A("lockheed", IPV4["lockheed"]),
  AAAA("lockheed", IPV6["lockheed"]),
  A("lockheed.ams", IPV4["lockheed.ams"]),
  A("lockheed.oob", IPV4["lockheed.oob"]),
  A("tiler", IPV4["lockheed"]),
  AAAA("tiler", IPV6["lockheed"]),
  A("us-imagery", IPV4["lockheed"]),
  AAAA("us-imagery", IPV6["lockheed"]),
  A("a.us-imagery", IPV4["lockheed"]),
  AAAA("a.us-imagery", IPV6["lockheed"]),
  A("b.us-imagery", IPV4["lockheed"]),
  AAAA("b.us-imagery", IPV6["lockheed"]),
  A("c.us-imagery", IPV4["lockheed"]),
  AAAA("c.us-imagery", IPV6["lockheed"]),

  // HTTPS / SVCB records
  HTTPS("tiler", 1, ".", "alpn=h2"),
  HTTPS("us-imagery", 1, ".", "alpn=h2"),
  HTTPS("a.us-imagery", 1, ".", "alpn=h2"),
  HTTPS("b.us-imagery", 1, ".", "alpn=h2"),
  HTTPS("c.us-imagery", 1, ".", "alpn=h2"),

  // Discourse server ("community")

  A("fume", IPV4["fume.he"]),
  AAAA("fume", IPV6["fume.he"]),
  A("fume.dub", IPV4["fume.dub"]),
  A("fume.oob", IPV4["fume.oob"]),

  A("community", IPV4["fume.he"]),
  A("communities", IPV4["fume.he"]),
  A("c", IPV4["fume.he"]),
  AAAA("community", IPV6["fume.he"]),
  AAAA("communities", IPV6["fume.he"]),
  AAAA("c", IPV6["fume.he"]),

  // HTTPS / SVCB records
  HTTPS("community", 1, ".", "alpn=h2"),
  HTTPS("communities", 1, ".", "alpn=h2"),
  HTTPS("c", 1, ".", "alpn=h2"),

  CNAME("community-cdn", "dualstack.n.sni.global.fastly.net."),
  TXT("community", "google-site-verification=hQ8GZyj4KwnPqAX2oAzpbLrh6I5dfR08PSdL3icVkfg"),

  A("forum", IPV4["fume.he"]),
  AAAA("forum", IPV6["fume.he"]),

  // HTTPS / SVCB records
  HTTPS("forum", 1, ".", "alpn=h2"),

  // Taginfo and Staging Blog Server

  A("tabaluga", IPV4["tabaluga"]),
  AAAA("tabaluga", IPV6["tabaluga"]),
  A("tabaluga.ams", IPV4["tabaluga.ams"]),
  A("tabaluga.oob", IPV4["tabaluga.oob"]),

  A("staging.blog", IPV4["tabaluga"]),
  AAAA("staging.blog", IPV6["tabaluga"]),

  // HTTPS / SVCB records
  HTTPS("staging.blog", 1, ".", "alpn=h2"),

  A("taginfo", IPV4["tabaluga"]),
  AAAA("taginfo", IPV6["tabaluga"]),

  // HTTPS / SVCB records
  HTTPS("taginfo", 1, ".", "alpn=h2"),

  // Spare servers


  // Uptime site at StatusCake

  CNAME("uptime", "uptimessl-new.statuscake.com.")

);
