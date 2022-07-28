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

  // Use shenron as the MX host

  MX("@", 10, QUALIFY("a.mx")),
  MX("messages", 10, QUALIFY("a.mx")),
  MX("noreply", 10, QUALIFY("a.mx")),
  MX("otrs", 10, QUALIFY("a.mx")),
  MX("community", 10, QUALIFY("a.mx")),
  A("a.mx", SHENRON_IPV4),
  AAAA("a.mx", SHENRON_IPV6),

  // Publish SPF records indicating that only shenron sends mail

  SPF_BUILDER({
    label: "@",
    ttl: "1h",
    parts: [
      "v=spf1",
      "ip4:212.110.172.32",       // shenron ipv4
      "ip6:2001:41c9:1:400::32",  // shenron ipv6
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "messages",
    ttl: "1h",
    parts: [
      "v=spf1",
      "ip4:212.110.172.32",       // shenron ipv4
      "ip6:2001:41c9:1:400::32",  // shenron ipv6
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "noreply",
    ttl: "1h",
    parts: [
      "v=spf1",
      "ip4:212.110.172.32",       // shenron ipv4
      "ip6:2001:41c9:1:400::32",  // shenron ipv6
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "otrs",
    ttl: "1h",
    parts: [
      "v=spf1",
      "ip4:212.110.172.32",       // shenron ipv4
      "ip6:2001:41c9:1:400::32",  // shenron ipv6
      "mx",                       // safety net if we change mx
      "-all"
    ]
  }),

  SPF_BUILDER({
    label: "community",
    ttl: "1h",
    parts: [
      "v=spf1",
      "ip4:212.110.172.32",       // shenron ipv4
      "ip6:2001:41c9:1:400::32",  // shenron ipv6
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

  // Delegate MTA-STS policy for subdomains

  CNAME("_mta-sts.messages", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.noreply", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.otrs", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.community", QUALIFY("_mta-sts")),

  // Google postmaster tools verification

  CNAME("af323lytato5", "gv-o4v3qh5pfayqex.dv.googlehosted.com."),
  CNAME("irzdddnmh465", "gv-cwr6bvt7xsgact.dv.googlehosted.com."),

  // Main web servers and their aliases

  A("spike-01", SPIKE01_IPV4),
  AAAA("spike-01", SPIKE01_IPV6),
  // A("@", SPIKE01_IPV4, TTL("10m")),
  // AAAA("@", SPIKE01_IPV6, TTL("10m")),
  // A("www", SPIKE01_IPV4, TTL("10m")),
  // AAAA("www", SPIKE01_IPV6, TTL("10m")),
  // A("api", SPIKE01_IPV4, TTL("10m")),
  // AAAA("api", SPIKE01_IPV6, TTL("10m")),
  // A("maps", SPIKE01_IPV4, TTL("10m")),
  // AAAA("maps", SPIKE01_IPV6, TTL("10m")),
  // A("mapz", SPIKE01_IPV4, TTL("10m")),
  // AAAA("mapz", SPIKE01_IPV6, TTL("10m")),
  A("spike-01.dub", SPIKE01_INTERNAL),
  A("spike-01.oob", SPIKE01_OOB),

  A("spike-02", SPIKE02_IPV4),
  AAAA("spike-02", SPIKE02_IPV6),
  // A("@", SPIKE02_IPV4, TTL("10m")),
  // AAAA("@", SPIKE02_IPV6, TTL("10m")),
  // A("www", SPIKE02_IPV4, TTL("10m")),
  // AAAA("www", SPIKE02_IPV6, TTL("10m")),
  // A("api", SPIKE02_IPV4, TTL("10m")),
  // AAAA("api", SPIKE02_IPV6, TTL("10m")),
  // A("maps", SPIKE02_IPV4, TTL("10m")),
  // AAAA("maps", SPIKE02_IPV6, TTL("10m")),
  // A("mapz", SPIKE02_IPV4, TTL("10m")),
  // AAAA("mapz", SPIKE02_IPV6, TTL("10m")),
  A("spike-02.dub", SPIKE02_INTERNAL),
  A("spike-02.oob", SPIKE02_OOB),

  A("spike-03", SPIKE03_IPV4),
  AAAA("spike-03", SPIKE03_IPV6),
  // A("@", SPIKE03_IPV4, TTL("10m")),
  // AAAA("@", SPIKE03_IPV6, TTL("10m")),
  // A("www", SPIKE03_IPV4, TTL("10m")),
  // AAAA("www", SPIKE03_IPV6, TTL("10m")),
  // A("api", SPIKE03_IPV4, TTL("10m")),
  // AAAA("api", SPIKE03_IPV6, TTL("10m")),
  // A("maps", SPIKE03_IPV4, TTL("10m")),
  // AAAA("maps", SPIKE03_IPV6, TTL("10m")),
  // A("mapz", SPIKE03_IPV4, TTL("10m")),
  // AAAA("mapz", SPIKE03_IPV6, TTL("10m")),
  A("spike-03.dub", SPIKE03_INTERNAL),
  A("spike-03.oob", SPIKE03_OOB),

  A("spike-04", SPIKE04_IPV4),
  AAAA("spike-04", SPIKE04_IPV6),
  // A("@", SPIKE04_IPV4, TTL("10m")),
  // AAAA("@", SPIKE04_IPV6, TTL("10m")),
  // A("www", SPIKE04_IPV4, TTL("10m")),
  // AAAA("www", SPIKE04_IPV6, TTL("10m")),
  // A("api", SPIKE04_IPV4, TTL("10m")),
  // AAAA("api", SPIKE04_IPV6, TTL("10m")),
  // A("maps", SPIKE04_IPV4, TTL("10m")),
  // AAAA("maps", SPIKE04_IPV6, TTL("10m")),
  // A("mapz", SPIKE04_IPV4, TTL("10m")),
  // AAAA("mapz", SPIKE04_IPV6, TTL("10m")),
  A("spike-04.bm", SPIKE04_INTERNAL),
  A("spike-04.oob", SPIKE04_OOB),

  A("spike-05", SPIKE05_IPV4),
  AAAA("spike-05", SPIKE05_IPV6),
  // A("@", SPIKE05_IPV4, TTL("10m")),
  // AAAA("@", SPIKE05_IPV6, TTL("10m")),
  // A("www", SPIKE05_IPV4, TTL("10m")),
  // AAAA("www", SPIKE05_IPV6, TTL("10m")),
  // A("api", SPIKE05_IPV4, TTL("10m")),
  // AAAA("api", SPIKE05_IPV6, TTL("10m")),
  // A("maps", SPIKE05_IPV4, TTL("10m")),
  // AAAA("maps", SPIKE05_IPV6, TTL("10m")),
  // A("mapz", SPIKE05_IPV4, TTL("10m")),
  // AAAA("mapz", SPIKE05_IPV6, TTL("10m")),
  A("spike-05.bm", SPIKE05_INTERNAL),
  A("spike-05.oob", SPIKE05_OOB),

  A("spike-06", SPIKE06_IPV4),
  AAAA("spike-06", SPIKE06_IPV6),
  // A("@", SPIKE06_IPV4, TTL("10m")),
  // AAAA("@", SPIKE06_IPV6, TTL("10m")),
  // A("www", SPIKE06_IPV4, TTL("10m")),
  // AAAA("www", SPIKE06_IPV6, TTL("10m")),
  // A("api", SPIKE06_IPV4, TTL("10m")),
  // AAAA("api", SPIKE06_IPV6, TTL("10m")),
  // A("maps", SPIKE06_IPV4, TTL("10m")),
  // AAAA("maps", SPIKE06_IPV6, TTL("10m")),
  // A("mapz", SPIKE06_IPV4, TTL("10m")),
  // AAAA("mapz", SPIKE06_IPV6, TTL("10m")),
  A("spike-06.ams", SPIKE06_INTERNAL),
  A("spike-06.oob", SPIKE06_OOB),

  A("spike-07", SPIKE07_IPV4),
  AAAA("spike-07", SPIKE07_IPV6),
  A("@", SPIKE07_IPV4, TTL("10m")),
  AAAA("@", SPIKE07_IPV6, TTL("10m")),
  A("www", SPIKE07_IPV4, TTL("10m")),
  AAAA("www", SPIKE07_IPV6, TTL("10m")),
  A("api", SPIKE07_IPV4, TTL("10m")),
  AAAA("api", SPIKE07_IPV6, TTL("10m")),
  A("maps", SPIKE07_IPV4, TTL("10m")),
  AAAA("maps", SPIKE07_IPV6, TTL("10m")),
  A("mapz", SPIKE07_IPV4, TTL("10m")),
  AAAA("mapz", SPIKE07_IPV6, TTL("10m")),
  A("spike-07.ams", SPIKE07_INTERNAL),
  A("spike-07.oob", SPIKE07_OOB),

  A("spike-08", SPIKE08_IPV4),
  AAAA("spike-08", SPIKE08_IPV6),
  A("@", SPIKE08_IPV4, TTL("10m")),
  AAAA("@", SPIKE08_IPV6, TTL("10m")),
  A("www", SPIKE08_IPV4, TTL("10m")),
  AAAA("www", SPIKE08_IPV6, TTL("10m")),
  A("api", SPIKE08_IPV4, TTL("10m")),
  AAAA("api", SPIKE08_IPV6, TTL("10m")),
  A("maps", SPIKE08_IPV4, TTL("10m")),
  AAAA("maps", SPIKE08_IPV6, TTL("10m")),
  A("mapz", SPIKE08_IPV4, TTL("10m")),
  AAAA("mapz", SPIKE08_IPV6, TTL("10m")),
  A("spike-08.ams", SPIKE08_INTERNAL),
  A("spike-08.oob", SPIKE08_OOB),

  // Rails application servers

  A("thorn-02.ams", THORN02_INTERNAL),
  A("rails2.ams", THORN02_INTERNAL),
  A("thorn-02.oob", THORN02_OOB),

  A("thorn-03.ams", THORN03_INTERNAL),
  A("rails3.ams", THORN03_INTERNAL),
  A("thorn-03.oob", THORN03_OOB),

  A("thorn-04.bm", THORN04_INTERNAL),
  A("rails4.bm", THORN04_INTERNAL),
  A("thorn-04.oob", THORN04_OOB),

  A("thorn-05.bm", THORN05_INTERNAL),
  A("rails5.bm", THORN05_INTERNAL),
  A("thorn-05.oob", THORN05_OOB),

  // Nominatim servers

  A("pummelzacken", PUMMELZACKEN_IPV4),
  A("pummelzacken.ucl", PUMMELZACKEN_INTERNAL),
  A("pummelzacken.oob", PUMMELZACKEN_OOB),

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

  CNAME("nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qgis.nominatim", "nominatim.geo.openstreetmap.org."),
  CNAME("qa-tile.nominatim", "longma.openstreetmap.org."),

  // Taginfo server

  A("grindtooth", GRINDTOOTH_IPV4),
  A("taginfo", GRINDTOOTH_IPV4, TTL("10m")),
  A("grindtooth.ucl", GRINDTOOTH_INTERNAL),
  A("grindtooth.oob", GRINDTOOTH_OOB),

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

  A("scorch", SCORCH_IPV4),
  AAAA("scorch", SCORCH_IPV6),

  A("rhaegal", RHAEGAL_IPV4),

  A("pyrene", PYRENE_IPV4),
  AAAA("pyrene", PYRENE_IPV6),
  A("pyrene.oob", TIAMAT00_INTERNAL),

  A("bowser", BOWSER_IPV4),

  A("balerion", BALERION_IPV4),

  A("albi", ALBI_IPV4),
  AAAA("albi", ALBI_IPV6),

  A("necrosan", NECROSAN_IPV4),
  AAAA("necrosan", NECROSAN_IPV6),

  CNAME("tile", "dualstack.n.sni.global.fastly.net.", TTL("10m")),
  CNAME("a.tile", "dualstack.n.sni.global.fastly.net.", TTL("10m")),
  CNAME("b.tile", "dualstack.n.sni.global.fastly.net.", TTL("10m")),
  CNAME("c.tile", "dualstack.n.sni.global.fastly.net.", TTL("10m")),
  // Fastly DNS based ACME Challenge requirement
  CNAME("_acme-challenge.tile", "bxve5ryiwwv7woiraq.fastly-validations.com.", TTL("10m")),

  A("render", CULEBRE_IPV4),
  A("render", NIDHOGG_IPV4),
  AAAA("render", CULEBRE_IPV6),
  AAAA("render", NIDHOGG_IPV6),

  // Services machine

  A("ironbelly", IRONBELLY_IPV4),
  AAAA("ironbelly", IRONBELLY_IPV6),
  A("backup", IRONBELLY_IPV4, TTL("10m")),
  AAAA("backup", IRONBELLY_IPV6, TTL("10m")),
  A("planet", IRONBELLY_IPV4, TTL("10m")),
  AAAA("planet", IRONBELLY_IPV6, TTL("10m")),
  A("logstash", IRONBELLY_IPV4),
  AAAA("logstash", IRONBELLY_IPV6),
  A("ironbelly.ams", IRONBELLY_INTERNAL),
  A("ironbelly.oob", IRONBELLY_OOB),

  A("norbert", NORBERT_IPV4),
  AAAA("norbert", NORBERT_IPV6),
  // A("backup", NORBERT_IPV4, TTL("10m")),
  // AAAA("backup", NORBERT_IPV6, TTL("10m")),
  // A("planet", NORBERT_IPV4, TTL("10m")),
  // AAAA("planet", NORBERT_IPV6, TTL("10m")),
  A("norbert.ams", NORBERT_INTERNAL),
  A("norbert.oob", NORBERT_OOB),

  A("fafnir", FAFNIR_IPV4),
  AAAA("fafnir", FAFNIR_IPV6),
  // A("backup", FAFNIR_IPV4, TTL("10m")),
  // AAAA("backup", FAFNIR_IPV6, TTL("10m")),
  // A("planet", FAFNIR_IPV4, TTL("10m")),
  // AAAA("planet", FAFNIR_IPV6, TTL("10m")),
  A("fafnir.dub", FAFNIR_INTERNAL),
  A("fafnir.oob", FAFNIR_OOB),

  A("horntail", HORNTAIL_IPV4),
  AAAA("horntail", HORNTAIL_IPV6),
  // A("backup", HORNTAIL_IPV4, TTL("10m")),
  // AAAA("backup", HORNTAIL_IPV6, TTL("10m")),
  // A("planet", HORNTAIL_IPV4, TTL("10m")),
  // AAAA("planet", HORNTAIL_IPV6, TTL("10m")),
  A("horntail.dub", HORNTAIL_INTERNAL),
  A("horntail.oob", HORNTAIL_OOB),

  A("grisu", GRISU_IPV4),
  AAAA("grisu", GRISU_IPV6),
  // A("backup", GRISU_IPV4, TTL("10m")),
  // AAAA("backup", GRISU_IPV6, TTL("10m")),
  // A("planet", GRISU_IPV4, TTL("10m")),
  // AAAA("planet", GRISU_IPV6, TTL("10m")),
  A("grisu.bm", GRISU_INTERNAL),
  A("grisu.oob", GRISU_OOB),

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

  A("katla.bm", KATLA_INTERNAL),
  A("katla.oob", KATLA_OOB),

  // Development server with wildcard alias for user sites

  A("errol", ERROL_IPV4),
  A("dev", ERROL_IPV4),
  A("*.dev", ERROL_IPV4),
  A("ooc", ERROL_IPV4),
  A("a.ooc", ERROL_IPV4),
  A("b.ooc", ERROL_IPV4),
  A("c.ooc", ERROL_IPV4),
  A("npe", ERROL_IPV4),
  A("errol.ucl", ERROL_INTERNAL),
  A("errol.oob", ERROL_OOB),

  // Foundation server

  A("ridley", RIDLEY_IPV4),
  A("otrs", RIDLEY_IPV4),
  A("blog", RIDLEY_IPV4),
  A("foundation", RIDLEY_IPV4),
  A("hot", RIDLEY_IPV4),
  A("dmca", RIDLEY_IPV4),
  A("ridley.ucl", RIDLEY_INTERNAL),
  A("ridley.oob", RIDLEY_OOB),

  // Piwik server

  A("eustace", EUSTACE_IPV4),
  A("piwik", EUSTACE_IPV4),
  A("eustace.ucl", EUSTACE_INTERNAL),
  A("eustace.oob", EUSTACE_OOB),

  // Imagery servers

  A("draco", DRACO_IPV4),
  A("draco.ucl", DRACO_INTERNAL),
  A("draco.oob", DRACO_OOB),

  A("kessie", KESSIE_IPV4),
  AAAA("kessie", KESSIE_IPV6),
  A("agri", KESSIE_IPV4, TTL("1h")),
  AAAA("agri", KESSIE_IPV6, TTL("1h")),
  A("a.agri", KESSIE_IPV4, TTL("1h")),
  AAAA("a.agri", KESSIE_IPV6, TTL("1h")),
  A("b.agri", KESSIE_IPV4, TTL("1h")),
  AAAA("b.agri", KESSIE_IPV6, TTL("1h")),
  A("c.agri", KESSIE_IPV4, TTL("1h")),
  AAAA("c.agri", KESSIE_IPV6, TTL("1h")),
  A("os", KESSIE_IPV4, TTL("1h")),
  AAAA("os", KESSIE_IPV6, TTL("1h")),
  A("a.os", KESSIE_IPV4, TTL("1h")),
  AAAA("a.os", KESSIE_IPV6, TTL("1h")),
  A("b.os", KESSIE_IPV4, TTL("1h")),
  AAAA("b.os", KESSIE_IPV6, TTL("1h")),
  A("c.os", KESSIE_IPV4, TTL("1h")),
  AAAA("c.os", KESSIE_IPV6, TTL("1h")),
  A("kessie.oob", KESSIE_OOB),

  // Munin server

  A("urmel", URMEL_IPV4),
  A("munin", URMEL_IPV4),
  A("urmel.ucl", URMEL_INTERNAL),
  A("urmel.oob", URMEL_OOB),

  // Prometheus server

  A("stormfly-03", STORMFLY03_IPV4),
  AAAA("stormfly-03", STORMFLY03_IPV6),
  A("prometheus", STORMFLY03_IPV4, TTL("10m")),
  AAAA("prometheus", STORMFLY03_IPV6, TTL("10m")),
  A("stormfly-03.oob", STORMFLY03_OOB),

  // Chef server

  A("sarel", SAREL_IPV4),
  A("chef", SAREL_IPV4),
  A("hardware", SAREL_IPV4),
  A("acme", SAREL_IPV4),
  A("git", SAREL_IPV4, TTL("10m")),
  A("dns", SAREL_IPV4, TTL("10m")),
  A("sarel.ucl", SAREL_INTERNAL),
  A("sarel.oob", SAREL_OOB),

  // Forum server

  A("clifford", CLIFFORD_IPV4),
  A("forum", CLIFFORD_IPV4, TTL("10m")),
  A("clifford.ucl", CLIFFORD_INTERNAL),
  A("clifford.oob", CLIFFORD_OOB),

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
  A("mail", SHENRON_IPV4),
  AAAA("mail", SHENRON_IPV6),
  A("mta-sts", SHENRON_IPV4),
  AAAA("mta-sts", SHENRON_IPV6),
  A("lists", SHENRON_IPV4),
  AAAA("lists", SHENRON_IPV6),
  A("help", SHENRON_IPV4),
  AAAA("help", SHENRON_IPV6),
  A("shenron.bm", SHENRON_INTERNAL),

  // Lockheed service

  A("lockheed", LOCKHEED_IPV4),
  AAAA("lockheed", LOCKHEED_IPV6),
  A("svn", LOCKHEED_IPV4),
  AAAA("svn", LOCKHEED_IPV6),
  A("trac", LOCKHEED_IPV4),
  AAAA("trac", LOCKHEED_IPV6),
  A("irc", LOCKHEED_IPV4),
  AAAA("irc", LOCKHEED_IPV6),
  A("blogs", LOCKHEED_IPV4),
  AAAA("blogs", LOCKHEED_IPV6),
  A("lockheed.ams", LOCKHEED_INTERNAL),
  A("lockheed.oob", LOCKHEED_OOB),

  // Wiki servers

  A("tabaluga", TABALUGA_IPV4),
  AAAA("tabaluga", TABALUGA_IPV6),
  A("wiki", TABALUGA_IPV4, TTL("10m")),
  AAAA("wiki", TABALUGA_IPV6, TTL("10m")),
  A("tabaluga.ams", TABALUGA_INTERNAL),
  A("tabaluga.oob", TABALUGA_OOB),

  // Overpass server

  A("gorwen", GORWEN_IPV4),
  AAAA("gorwen", GORWEN_IPV6),
  A("query", GORWEN_IPV4, TTL("10m")),
  AAAA("query", GORWEN_IPV6, TTL("10m")),
  A("gorwen.dub", GORWEN_INTERNAL),
  A("gorwen.oob", GORWEN_OOB),

  // GPS tile server

  A("noquiklos", NOQUIKLOS_IPV4),
  A("gps-tile", NOQUIKLOS_IPV4),
  A("a.gps-tile", NOQUIKLOS_IPV4),
  A("b.gps-tile", NOQUIKLOS_IPV4),
  A("c.gps-tile", NOQUIKLOS_IPV4),
  A("gps.tile", NOQUIKLOS_IPV4),
  A("gps-a.tile", NOQUIKLOS_IPV4),
  A("gps-b.tile", NOQUIKLOS_IPV4),
  A("gps-c.tile", NOQUIKLOS_IPV4),
  A("noquiklos.ucl", NOQUIKLOS_INTERNAL),
  A("noquiklos.oob", NOQUIKLOS_OOB),

  // Tile cache servers

  A("gorynych", GORYNYCH_IPV4),
  AAAA("gorynych", GORYNYCH_IPV6),
  A("trogdor", TROGDOR_IPV4),
  A("trogdor.oob", TROGDOR_OOB),
  A("ridgeback", RIDGEBACK_IPV4),
  A("ridgeback.oob", RIDGEBACK_OOB),
  A("nepomuk", NEPOMUK_IPV4),
  AAAA("nepomuk", NEPOMUK_IPV6),
  A("viserion", VISERION_IPV4),
  AAAA("viserion", VISERION_IPV6),
  A("drogon", DROGON_IPV4),
  AAAA("drogon", DROGON_IPV6),
  A("saphira", SAPHIRA_IPV4),
  AAAA("saphira", SAPHIRA_IPV6),
  A("toothless", TOOTHLESS_IPV4),
  AAAA("toothless", TOOTHLESS_IPV6),
  A("angor", ANGOR_IPV4),
  // AAAA("angor", ANGOR_IPV6),
  A("ladon", LADON_IPV4),
  AAAA("ladon", LADON_IPV6),
  A("ascalon", ASCALON_IPV4),
  A("takhisis", TAKHISIS_IPV4),
  AAAA("takhisis", TAKHISIS_IPV6),
  A("neak", NEAK_IPV4),
  A("meraxes", MERAXES_IPV4),
  AAAA("meraxes", MERAXES_IPV6),
  A("firnen", FIRNEN_IPV4),

  // Blades

  A("tiamat-00", TIAMAT00_IPV4),
  A("tiamat-00.ucl", TIAMAT00_INTERNAL),
  A("tiamat-00.oob", TIAMAT00_OOB),
  A("tiamat-01", TIAMAT01_IPV4),
  A("tiamat-01.ucl", TIAMAT01_INTERNAL),
  A("tiamat-01.oob", TIAMAT01_OOB),
  A("tiamat-02", TIAMAT02_IPV4),
  A("tiamat-02.ucl", TIAMAT02_INTERNAL),
  A("tiamat-02.oob", TIAMAT02_OOB),
  A("tiamat-03", TIAMAT03_IPV4),
  A("tiamat-03.ucl", TIAMAT03_INTERNAL),
  A("tiamat-03.oob", TIAMAT03_OOB),
  A("tiamat-10", TIAMAT10_IPV4),
  A("tiamat-10.ucl", TIAMAT10_INTERNAL),
  A("tiamat-10.oob", TIAMAT10_OOB),
  A("tiamat-11", TIAMAT11_IPV4),
  A("tiamat-11.ucl", TIAMAT11_INTERNAL),
  A("tiamat-11.oob", TIAMAT11_OOB),
  A("tiamat-12", TIAMAT12_IPV4),
  A("tiamat-12.ucl", TIAMAT12_INTERNAL),
  A("tiamat-12.oob", TIAMAT12_OOB),
  A("tiamat-13", TIAMAT13_IPV4),
  A("tiamat-13.ucl", TIAMAT13_INTERNAL),
  A("tiamat-13.oob", TIAMAT13_OOB),
  A("tiamat-20", TIAMAT20_IPV4),
  A("tiamat-20.ucl", TIAMAT20_INTERNAL),
  A("tiamat-20.oob", TIAMAT20_OOB),
  A("tiamat-21", TIAMAT21_IPV4),
  A("tiamat-21.ucl", TIAMAT21_INTERNAL),
  A("tiamat-21.oob", TIAMAT21_OOB),
  A("tiamat-22", TIAMAT22_IPV4),
  A("tiamat-22.ucl", TIAMAT22_INTERNAL),
  A("tiamat-22.oob", TIAMAT22_OOB),
  A("tiamat-23", TIAMAT23_IPV4),
  A("tiamat-23.ucl", TIAMAT23_INTERNAL),
  A("tiamat-23.oob", TIAMAT23_OOB),

  // Spare

  A("idris", IDRIS_IPV4),
  AAAA("idris", IDRIS_IPV6),
  A("idris.dub", IDRIS_INTERNAL),
  A("idris.oob", IDRIS_OOB),
  A("konqi", KONQI_IPV4),
  AAAA("konqi", KONQI_IPV6),
  A("konqi.dub", KONQI_INTERNAL),
  A("konqi.oob", KONQI_OOB),
  A("naga", NAGA_IPV4),
  AAAA("naga", NAGA_IPV6),
  A("naga.dub", NAGA_INTERNAL),
  A("naga.oob", NAGA_OOB),

  // Discourse server ("community")
  A("jakelong", JAKELONG_IPV4),
  AAAA("jakelong", JAKELONG_IPV6),
  A("community", JAKELONG_IPV4),
  A("communities", JAKELONG_IPV4),
  AAAA("community", JAKELONG_IPV6),
  AAAA("communities", JAKELONG_IPV6),
  A("jakelong.dub", JAKELONG_INTERNAL),
  A("jakelong.oob", JAKELONG_OOB),

  // Donation site

  A("donate", RIDLEY_IPV4),

  // Uptime site at StatusCake

  CNAME("uptime", "uptimessl-new.statuscake.com."),

  // Custom Domain for https://github.com/osmfoundation/welcome-mat/

  CNAME("welcome", "osmfoundation.github.io."),

  // Dynamic DNS records

  DYNAMIC_RECORDS

);
