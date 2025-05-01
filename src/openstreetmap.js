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

  A("a.mx", IPV4["fafnir"]),
  AAAA("a.mx", IPV6["fafnir"]),
  A("mail", IPV4["fafnir"]),
  AAAA("mail", IPV6["fafnir"]),
  A("mta-sts", IPV4["fafnir"]),
  AAAA("mta-sts", IPV6["fafnir"]),

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
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "noreply",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "otrs",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "community",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "supporting",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",  // main openstreetmap.org spf record
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

  osm_web_service("@", [ "spike-06",
                         "spike-07",
                         "spike-08"
                       ], { cfproxy: true }),

  osm_web_service("www", [ "spike-06",
                           "spike-07",
                           "spike-08"
                         ], { cfproxy: true }),

  osm_web_service("api", [ "spike-06",
                           "spike-07",
                           "spike-08"
                         ], { cfproxy: true }),

  osm_web_service("maps", [ "spike-06",
                            "spike-07",
                            "spike-08"
                          ], { cfproxy: true }),

  osm_web_service("mapz", [ "spike-06",
                            "spike-07",
                             "spike-08"
                          ], { cfproxy: true }),

  // Nominatim servers

  CNAME("nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qgis.nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qa-tile.nominatim", "longma.openstreetmap.org."),

  // Tile servers

  CNAME("tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("a.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("b.tile", "dualstack.n.sni.global.fastly.net."),
  CNAME("c.tile", "dualstack.n.sni.global.fastly.net."),

  osm_web_service("render", [ "culebre",
                              "nidhogg"
                            ]),

  // Vector tile servers

  CNAME("vector", "dualstack.n.sni.global.fastly.net."),

  // Planet servers

  A("backup", IPV4["norbert"]),
  AAAA("backup", IPV6["norbert"]),
  // A("backup", IPV4["horntail"]),
  // AAAA("backup", IPV6["horntail"]),

  osm_web_service("planet", "norbert"),
  // osm_web_service("planet", "horntail"),

  // Development server with wildcard alias for user sites

  osm_web_service("dev", "faffy"),
  osm_web_service("*.dev", "faffy"),

  osm_web_service("ooc", "faffy"),
  osm_web_service("a.ooc", "faffy"),
  osm_web_service("b.ooc", "faffy"),
  osm_web_service("c.ooc", "faffy"),

  osm_web_service("npe", "faffy"),

  // Foundation server

  osm_web_service("blog", "ridley"),
  osm_web_service("foundation", "ridley"),

  // Matomo server

  osm_web_service("matomo", "smaug"),
  osm_web_service("piwik", "smaug"),

  // Imagery servers

  osm_web_service("agri", "lockheed"),
  osm_web_service("a.agri", "lockheed"),
  osm_web_service("b.agri", "lockheed"),
  osm_web_service("c.agri", "lockheed"),

  osm_web_service("act-imagery", "lockheed"),
  osm_web_service("a.act-imagery", "lockheed"),
  osm_web_service("b.act-imagery", "lockheed"),
  osm_web_service("c.act-imagery", "lockheed"),

  osm_web_service("au-vic-melbourne-imagery", "lockheed"),
  osm_web_service("a.au-vic-melbourne-imagery", "lockheed"),
  osm_web_service("b.au-vic-melbourne-imagery", "lockheed"),
  osm_web_service("c.au-vic-melbourne-imagery", "lockheed"),

  osm_web_service("os", "lockheed"),
  osm_web_service("a.os", "lockheed"),
  osm_web_service("b.os", "lockheed"),
  osm_web_service("c.os", "lockheed"),

  osm_web_service("tiler", "lockheed"),

  osm_web_service("us-imagery", "lockheed"),
  osm_web_service("a.us-imagery", "lockheed"),
  osm_web_service("b.us-imagery", "lockheed"),
  osm_web_service("c.us-imagery", "lockheed"),

  // Prometheus server and munin redirect

  osm_web_service("prometheus", "stormfly-03"),
  osm_web_service("munin", "stormfly-03"),

  // Management server

  osm_web_service("acme", "idris"),
  osm_web_service("apt", "idris"),
  osm_web_service("chef", "idris"),
  osm_web_service("dns", "idris"),
  osm_web_service("git", "idris"),
  osm_web_service("hardware", "idris"),

  // Bytemark machine, and the services which operate from it

  osm_web_service("lists", "shenron"),
  osm_web_service("help", "shenron"),

  // Naga services

  osm_web_service("svn", "naga"),
  osm_web_service("trac", "naga"),
  osm_web_service("irc", "naga"),
  osm_web_service("blogs", "naga"),
  osm_web_service("welcome", "naga"),
  osm_web_service("operations", "naga"),
  osm_web_service("hot", "naga"),
  osm_web_service("dmca", "naga"),
  osm_web_service("otrs", "naga", { h1: true, h2: false }), // OTRS is not available using HTTPS/2
  osm_web_service("birthday20", "naga"),

  // Wiki servers

  osm_web_service("wiki", "konqi"),
  osm_web_service("test.wiki", "muirdris"),

  // Overpass server

  osm_web_service("query", "grisu"),

  // GPS tile server

  osm_web_service("gps-tile", "muirdris"),
  osm_web_service("a.gps-tile", "muirdris"),
  osm_web_service("b.gps-tile", "muirdris"),
  osm_web_service("c.gps-tile", "muirdris"),
  osm_web_service("gps.tile", "muirdris"),
  osm_web_service("gps-a.tile", "muirdris"),
  osm_web_service("gps-b.tile", "muirdris"),
  osm_web_service("gps-c.tile", "muirdris"),

  // Donation site and new OSMF crm site

  osm_web_service("donate", "ridley"),
  osm_web_service("support", "ridley"),
  osm_web_service("supporting", "ridley"),

  osm_web_service("test.civicrm", "muirdris"),

  // Discourse server ("community")

  osm_web_service("community", "fume"),
  osm_web_service("communities", "fume"),
  osm_web_service("c", "fume"),
  osm_web_service("forum", "fume"),

  CNAME("community-cdn", "dualstack.n.sni.global.fastly.net."),
  TXT("community", "google-site-verification=hQ8GZyj4KwnPqAX2oAzpbLrh6I5dfR08PSdL3icVkfg"),

  // Taginfo and Staging Blog Server

  osm_web_service("taginfo", "tabaluga"),

  // Staging Blog Server

  osm_web_service("staging.blog", "tabaluga"),

);
