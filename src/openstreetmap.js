D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA("@", "issue", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "issuewild", "letsencrypt.org", CF_TTL_ANY),
  CAA("@", "iodef", "mailto:hostmaster@openstreetmap.org"),

  // Use shenron as the MX host

  MX("@", 10, QUALIFY("a.mx")),
  MX("messages", 10, QUALIFY("a.mx")),
  MX("noreply", 10, QUALIFY("a.mx")),
  MX("otrs", 10, QUALIFY("a.mx")),
  A("a.mx", SHENRON_IPV4),
  AAAA("a.mx", SHENRON_IPV6),

  // Publish SPF records indicating that only shenron sends mail

  TXT("@", "v=spf1 ip4:212.110.172.32 ip6:2001:41c9:1:400::32 mx -all"),
  TXT("otrs", "v=spf1 ip4:212.110.172.32 ip6:2001:41c9:1:400::32 mx -all"),

  // Publish DKIM public key

  TXT("20200301._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzvoNZVOGfw1V4A171hxHMhzVTAnIUQVJ8iX3wbqCld8A5iIaXeTGYvBmewymax/cYJS4QqzbpUzkgrrTA9avuZhd+QGJDgjADgx4VyMOaOS6FwAxS0uXtLrt+lsixRDx/feKyZHaxjzJAQy46ok77xXL4UXIaaovw6G6eZpIScMzZQ2zkKNJxTICzzSOduIilHhMWte4XP+/2PdRmD7Ge9jb0U4bZjswX0AqKSGzDKYw+yxVna9l53adeCnklqg2ofoXu+ResiH+kt05aCUOMo8en3em6yBnRCMalgi1E3Tt7I5BWcYFRkT/8agUGW4gGC6XMV9IskOsYL0emG0kGwIDAQAB"),

  // Announce MTA-STS policy and TLSRPT policy for error reports

  TXT("_mta-sts", "v=STSv1; id=202001291805Z"),
  TXT("_smtp._tls", "v=TLSRPTv1; rua=mailto:postmaster@openstreetmap.org"),

  // Delegate MTA-STS policy for subdomains

  CNAME("_mta-sts.messages", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.noreply", QUALIFY("_mta-sts")),
  CNAME("_mta-sts.otrs", QUALIFY("_mta-sts")),

  // Google postmaster tools verification

  CNAME("af323lytato5", "gv-o4v3qh5pfayqex.dv.googlehosted.com."),
  CNAME("irzdddnmh465", "gv-cwr6bvt7xsgact.dv.googlehosted.com."),

  // Delegate geo.openstreetmap.org to PowerDNS

  NS("geo", QUALIFY("balerion")),
  NS("geo", QUALIFY("chrysophylax")),
  NS("geo", QUALIFY("katie")),
  NS("geo", QUALIFY("saphira")),
  NS("geo", QUALIFY("stormfly-02")),
  NS("geo", QUALIFY("ridgeback")),

  // Main web servers and their aliases

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
  A("@", SPIKE06_IPV4, TTL("10m")),
  AAAA("@", SPIKE06_IPV6, TTL("10m")),
  A("www", SPIKE06_IPV4, TTL("10m")),
  AAAA("www", SPIKE06_IPV6, TTL("10m")),
  A("api", SPIKE06_IPV4, TTL("10m")),
  AAAA("api", SPIKE06_IPV6, TTL("10m")),
  A("maps", SPIKE06_IPV4, TTL("10m")),
  AAAA("maps", SPIKE06_IPV6, TTL("10m")),
  A("mapz", SPIKE06_IPV4, TTL("10m")),
  AAAA("mapz", SPIKE06_IPV6, TTL("10m")),
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

  A("thorn-01.ams", THORN01_INTERNAL),
  A("rails1.ams", THORN01_INTERNAL),
  A("thorn-01.oob", THORN01_OOB),

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

  CNAME("nominatim", "nominatim.geo.openstreetmap.org."),

  // Taginfo server

  A("grindtooth", GRINDTOOTH_IPV4),
  A("taginfo", GRINDTOOTH_IPV4, TTL("10m")),
  A("grindtooth.ucl", GRINDTOOTH_INTERNAL),
  A("grindtooth.oob", GRINDTOOTH_OOB),

  A("stormfly-01", STORMFLY01_IPV4),
  AAAA("stormfly-01", STORMFLY01_IPV6),
  // A("taginfo", STORMFLY01_IPV4, TTL("10m")),
  // AAAA("taginfo", STORMFLY01_IPV6, TTL("10m")),
  A("stormfly-01.oob", STORMFLY01_OOB),

  // Tile servers

  A("orm", ORM_IPV4),
  AAAA("orm", ORM_IPV6),
  A("orm.ams", ORM_INTERNAL),
  A("orm.oob", ORM_OOB),

  A("odin", ODIN_IPV4),
  AAAA("odin", ODIN_IPV6),
  A("odin.ams", ODIN_INTERNAL),
  A("odin.oob", ODIN_OOB),

  A("ysera", YSERA_IPV4),
  A("ysera.ucl", YSERA_INTERNAL),
  A("ysera.oob", YSERA_OOB),

  A("scorch", SCORCH_IPV4),
  AAAA("scorch", SCORCH_IPV6),

  A("rhaegal", RHAEGAL_IPV4),

  A("pyrene", PYRENE_IPV4),
  AAAA("pyrene", PYRENE_IPV6),
  A("pyrene.oob", TIAMAT00_INTERNAL),

  A("bowser", BOWSER_IPV4),

  A("albi", ALBI_IPV4),
  AAAA("albi", ALBI_IPV6),

  CNAME("tile", "tile.geo.openstreetmap.org."),
  CNAME("a.tile", "tile.geo.openstreetmap.org."),
  CNAME("b.tile", "tile.geo.openstreetmap.org."),
  CNAME("c.tile", "tile.geo.openstreetmap.org."),

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

  A("grisu", GRISU_IPV4),
  AAAA("grisu", GRISU_IPV6),
  // A("backup", GRISU_IPV4, TTL("10m")),
  // AAAA("backup", GRISU_IPV6, TTL("10m")),
  // A("planet", GRISU_IPV4, TTL("10m")),
  // AAAA("planet", GRISU_IPV6, TTL("10m")),
  A("grisu.bm", GRISU_INTERNAL),
  A("grisu.oob", GRISU_OOB),

  // Database servers

  A("karm.ams", KARM_INTERNAL),
  A("karm.oob", KARM_OOB),

  A("eddie.ucl", EDDIE_INTERNAL),
  A("eddie.oob", EDDIE_OOB),

  A("katla.bm", KATLA_INTERNAL),
  A("katla.oob", KATLA_OOB),

  A("ramoth.ams", RAMOTH_INTERNAL),
  A("ramoth.oob", RAMOTH_OOB),

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

  A("switch1", SWITCH1_IPV4),
  AAAA("switch1", SWITCH1_IPV6),

  // Managed power strips

  A("pdu1.ams", PDU1_INTERNAL),
  A("pdu2.ams", PDU2_INTERNAL),

  // Bytemark machine, and the services which operate from it

  A("shenron", SHENRON_IPV4),
  AAAA("shenron", SHENRON_IPV6),
  A("mail", SHENRON_IPV4),
  AAAA("mail", SHENRON_IPV6),
  A("mta-sts", SHENRON_IPV4),
  AAAA("mta-sts", SHENRON_IPV6),
  A("lists", SHENRON_IPV4),
  AAAA("lists", SHENRON_IPV6),
  A("svn", SHENRON_IPV4),
  AAAA("svn", SHENRON_IPV6),
  A("trac", SHENRON_IPV4),
  AAAA("trac", SHENRON_IPV6),
  A("irc", SHENRON_IPV4),
  AAAA("irc", SHENRON_IPV6),
  A("help", SHENRON_IPV4),
  AAAA("help", SHENRON_IPV6),
  A("blogs", SHENRON_IPV4, TTL("10m")),
  AAAA("blogs", SHENRON_IPV6, TTL("10m")),
  A("shenron.bm", SHENRON_INTERNAL),

  // Wiki servers

  A("tabaluga", TABALUGA_IPV4),
  AAAA("tabaluga", TABALUGA_IPV6),
  A("wiki", TABALUGA_IPV4, TTL("10m")),
  AAAA("wiki", TABALUGA_IPV6, TTL("10m")),
  A("tabaluga.ams", TABALUGA_INTERNAL),
  A("tabaluga.oob", TABALUGA_OOB),

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
  A("jakelong", JAKELONG_IPV4),
  AAAA("jakelong", JAKELONG_IPV6),
  A("nepomuk", NEPOMUK_IPV4),
  AAAA("nepomuk", NEPOMUK_IPV6),
  A("simurgh", SIMURGH_IPV4),
  A("katie", KATIE_IPV4),
  AAAA("katie", KATIE_IPV6),
  A("konqi", KONQI_IPV4),
  AAAA("konqi", KONQI_IPV6),
  A("longma", LONGMA_IPV4),
  AAAA("longma", LONGMA_IPV6),
  A("viserion", VISERION_IPV4),
  AAAA("viserion", VISERION_IPV6),
  A("drogon", DROGON_IPV4),
  AAAA("drogon", DROGON_IPV6),
  A("saphira", SAPHIRA_IPV4),
  AAAA("saphira", SAPHIRA_IPV6),
  A("toothless", TOOTHLESS_IPV4),
  AAAA("toothless", TOOTHLESS_IPV6),
  A("sarkany", SARKANY_IPV4),
  AAAA("sarkany", SARKANY_IPV6),
  A("cmok", CMOK_IPV4),
  AAAA("cmok", CMOK_IPV6),
  A("stormfly-02", STORMFLY02_IPV4),
  AAAA("stormfly-02", STORMFLY02_IPV6),
  A("stormfly-02.oob", STORMFLY02_OOB),
  A("rimfaxe", RIMFAXE_IPV4),
  AAAA("rimfaxe", RIMFAXE_IPV6),
  A("culebre", CULEBRE_IPV4),
  A("kalessin", KALESSIN_IPV4),
  AAAA("kalessin", KALESSIN_IPV6),
  A("angor", ANGOR_IPV4),
  // AAAA("angor", ANGOR_IPV6),
  A("ladon", LADON_IPV4),
  AAAA("ladon", LADON_IPV6),
  A("ascalon", ASCALON_IPV4),
  A("noomoahk", NOOMOAHK_IPV4),
  AAAA("noomoahk", NOOMOAHK_IPV6),
  A("cherufe", CHERUFE_IPV4),
  A("norbert", NORBERT_IPV4),
  AAAA("norbert", NORBERT_IPV6),
  A("chrysophylax", CHRYSOPHYLAX_IPV4),
  AAAA("chrysophylax", CHRYSOPHYLAX_IPV6),
  A("necrosan", NECROSAN_IPV4),
  AAAA("necrosan", NECROSAN_IPV6),
  A("keizer", KEIZER_IPV4),
  AAAA("keizer", KEIZER_IPV6),
  A("vipertooth", VIPERTOOTH_IPV4),
  AAAA("vipertooth", VIPERTOOTH_IPV6),
  A("tuatara", TUATARA_IPV4),
  AAAA("tuatara", TUATARA_IPV6),
  A("waima", WAIMA_IPV4),
  A("nidhogg", NIDHOGG_IPV4),
  AAAA("nidhogg", NIDHOGG_IPV6),
  A("boitata", BOITATA_IPV4),
  AAAA("boitata", BOITATA_IPV6),
  A("fafnir", FAFNIR_IPV4),
  AAAA("fafnir", FAFNIR_IPV6),
  A("fume", FUME_IPV4),
  A("balerion", BALERION_IPV4),
  A("naga", NAGA_IPV4),
  AAAA("naga", NAGA_IPV6),
  A("takhisis", TAKHISIS_IPV4),
  AAAA("takhisis", TAKHISIS_IPV6),
  A("gorwen", GORWEN_IPV4),
  AAAA("gorwen", GORWEN_IPV6),
  A("glaedr", GLAEDR_IPV4),
  AAAA("glaedr", GLAEDR_IPV6),
  A("neak", NEAK_IPV4),
  A("meraxes", MERAXES_IPV4),
  AAAA("meraxes", MERAXES_IPV6),
  A("fuchur", FUCHUR_IPV4),
  AAAA("fuchur", FUCHUR_IPV6),
  A("idris", IDRIS_IPV4),
  AAAA("idris", IDRIS_IPV6),
  A("gackelchen", GACKELCHEN_IPV4),
  AAAA("gackelchen", GACKELCHEN_IPV6),
  A("kokosnuss", KOKOSNUSS_IPV4),
  A("shruikan", SHRUIKAN_IPV4),
  AAAA("shruikan", SHRUIKAN_IPV6),
  A("falkor", FALKOR_IPV4),
  AAAA("falkor", FALKOR_IPV6),

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

  // Donation site

  A("donate", RIDLEY_IPV4, TTL("10m")),

  // Uptime site at StatusCake

  CNAME("uptime", "uptimessl.statuscake.com."),

  // Custom Domain for https://github.com/osmfoundation/welcome-mat/

  CNAME("welcome", "osmfoundation.github.io."),

  // Dynamic DNS records

  DYNAMIC_RECORDS

);
