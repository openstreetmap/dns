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

  HTTPS("www", 1, ".", "alpn=h2"),
  HTTPS("api", 1, ".", "alpn=h2"),
  HTTPS("maps", 1, ".", "alpn=h2"),
  HTTPS("mapz", 1, ".", "alpn=h2"),

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

  // Nominatim servers

  CNAME("nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qgis.nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qa-tile.nominatim", "longma.openstreetmap.org."),

  // Tile servers

  CNAME("tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("a.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("b.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("c.tile", "dualstack.n.sni.global.fastly.net."),

  A("render", IPV4["culebre.he"]),
  A("render", IPV4["nidhogg"]),
  AAAA("render", IPV6["culebre.he"]),
  AAAA("render", IPV6["nidhogg"]),

  // Vector tile servers

  CNAME("vector", "dualstack.n.sni.global.fastly.net."),

  // Planet servers

  HTTPS("planet", 1, ".", "alpn=h2"),

  A("backup", IPV4["norbert"]),
  AAAA("backup", IPV6["norbert"]),
  A("planet", IPV4["norbert"]),
  AAAA("planet", IPV6["norbert"]),

  // A("backup", IPV4["horntail.he"]),
  // AAAA("backup", IPV6["horntail.he"]),
  // A("planet", IPV4["horntail.he"]),
  // AAAA("planet", IPV6["horntail.he"]),

  // Development server with wildcard alias for user sites

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

  // Foundation server

  HTTPS("blog", 1, ".", "alpn=h2"),
  HTTPS("foundation", 1, ".", "alpn=h2"),

  A("blog", IPV4["ridley"]),
  A("foundation", IPV4["ridley"]),

  // Matomo server

  HTTPS("matomo", 1, ".", "alpn=h2"),
  HTTPS("piwik", 1, ".", "alpn=h2"),

  A("matomo", IPV4["smaug.he"]),
  AAAA("matomo", IPV6["smaug.he"]),
  A("piwik", IPV4["smaug.he"]),
  AAAA("piwik", IPV6["smaug.he"]),

  // Imagery servers

  HTTPS("agri", 1, ".", "alpn=h2"),
  HTTPS("a.agri", 1, ".", "alpn=h2"),
  HTTPS("b.agri", 1, ".", "alpn=h2"),
  HTTPS("c.agri", 1, ".", "alpn=h2"),

  A("agri", IPV4["lockheed"]),
  AAAA("agri", IPV6["lockheed"]),
  A("a.agri", IPV4["lockheed"]),
  AAAA("a.agri", IPV6["lockheed"]),
  A("b.agri", IPV4["lockheed"]),
  AAAA("b.agri", IPV6["lockheed"]),
  A("c.agri", IPV4["lockheed"]),
  AAAA("c.agri", IPV6["lockheed"]),

  HTTPS("os", 1, ".", "alpn=h2"),
  HTTPS("a.os", 1, ".", "alpn=h2"),
  HTTPS("b.os", 1, ".", "alpn=h2"),
  HTTPS("c.os", 1, ".", "alpn=h2"),

  A("os", IPV4["lockheed"]),
  AAAA("os", IPV6["lockheed"]),
  A("a.os", IPV4["lockheed"]),
  AAAA("a.os", IPV6["lockheed"]),
  A("b.os", IPV4["lockheed"]),
  AAAA("b.os", IPV6["lockheed"]),
  A("c.os", IPV4["lockheed"]),
  AAAA("c.os", IPV6["lockheed"]),

  HTTPS("tiler", 1, ".", "alpn=h2"),
  HTTPS("us-imagery", 1, ".", "alpn=h2"),
  HTTPS("a.us-imagery", 1, ".", "alpn=h2"),
  HTTPS("b.us-imagery", 1, ".", "alpn=h2"),
  HTTPS("c.us-imagery", 1, ".", "alpn=h2"),

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

  // Prometheus server and munin redirect

  HTTPS("prometheus", 1, ".", "alpn=h2"),
  HTTPS("munin", 1, ".", "alpn=h2"),

  A("prometheus", IPV4["stormfly-03"]),
  AAAA("prometheus", IPV6["stormfly-03"]),
  A("munin", IPV4["stormfly-03"]),
  AAAA("munin", IPV6["stormfly-03"]),

  // Management server

  HTTPS("acme", 1, ".", "alpn=h2"),
  HTTPS("chef", 1, ".", "alpn=h2"),
  HTTPS("dns", 1, ".", "alpn=h2"),
  HTTPS("git", 1, ".", "alpn=h2"),
  HTTPS("hardware", 1, ".", "alpn=h2"),

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

  // Bytemark machine, and the services which operate from it

  HTTPS("lists", 1, ".", "alpn=h2"),
  HTTPS("help", 1, ".", "alpn=h2"),

  A("lists", IPV4["shenron"]),
  AAAA("lists", IPV6["shenron"]),
  A("help", IPV4["shenron"]),
  AAAA("help", IPV6["shenron"]),

  // Naga services

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

  // Wiki servers

  HTTPS("wiki", 1, ".", "alpn=h2"),

  A("wiki", IPV4["konqi.he"]),
  AAAA("wiki", IPV6["konqi.he"]),

  // Overpass server

  HTTPS("query", 1, ".", "alpn=h2"),

  A("query", IPV4["grisu.he"]),
  AAAA("query", IPV6["grisu.he"]),

  // GPS tile server

  HTTPS("gps-tile", 1, ".", "alpn=h2"),
  HTTPS("a.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("b.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("c.gps-tile", 1, ".", "alpn=h2"),
  HTTPS("gps-a.tile", 1, ".", "alpn=h2"),
  HTTPS("gps-b.tile", 1, ".", "alpn=h2"),
  HTTPS("gps-c.tile", 1, ".", "alpn=h2"),

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

  // Donation site and new OSMF crm site

  HTTPS("donate", 1, ".", "alpn=h2"),
  HTTPS("support", 1, ".", "alpn=h2"),
  HTTPS("supporting", 1, ".", "alpn=h2"),

  A("donate", IPV4["ridley"]),
  A("support", IPV4["ridley"]),
  A("supporting", IPV4["ridley"]),

  // Discourse server ("community")

  HTTPS("community", 1, ".", "alpn=h2"),
  HTTPS("communities", 1, ".", "alpn=h2"),
  HTTPS("c", 1, ".", "alpn=h2"),

  A("community", IPV4["fume.he"]),
  A("communities", IPV4["fume.he"]),
  A("c", IPV4["fume.he"]),
  AAAA("community", IPV6["fume.he"]),
  AAAA("communities", IPV6["fume.he"]),
  AAAA("c", IPV6["fume.he"]),

  CNAME("community-cdn", "dualstack.n.sni.global.fastly.net."),
  TXT("community", "google-site-verification=hQ8GZyj4KwnPqAX2oAzpbLrh6I5dfR08PSdL3icVkfg"),

  HTTPS("forum", 1, ".", "alpn=h2"),

  A("forum", IPV4["fume.he"]),
  AAAA("forum", IPV6["fume.he"]),

  // Taginfo and Staging Blog Server

  HTTPS("taginfo", 1, ".", "alpn=h2"),

  A("taginfo", IPV4["tabaluga"]),
  AAAA("taginfo", IPV6["tabaluga"]),

  HTTPS("staging.blog", 1, ".", "alpn=h2"),

  A("staging.blog", IPV4["tabaluga"]),
  AAAA("staging.blog", IPV6["tabaluga"]),

  // Uptime site at StatusCake

  CNAME("uptime", "uptimessl-new.statuscake.com.")

);
