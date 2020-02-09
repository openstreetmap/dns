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
  A("a.mx", "212.110.172.32"),
  AAAA("a.mx", "2001:41c9:1:400::32"),

  // Publish SPF records indicating that only shenron sends mail

  TXT("@", "v=spf1 ip4:212.110.172.32 ip6:2001:41c9:1:400::32 mx -all"),
  TXT("otrs", "v=spf1 ip4:212.110.172.32 ip6:2001:41c9:1:400::32 mx -all"),

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

  NS("geo", QUALIFY("saphira")),
  NS("geo", QUALIFY("ridgeback")),
  NS("geo", QUALIFY("jakelong")),
  NS("geo", QUALIFY("katie")),
  NS("geo", QUALIFY("stormfly-02")),
  NS("geo", QUALIFY("chrysophylax")),

  // Main web servers and their aliases

  A("spike-04", "89.16.162.21"),
  AAAA("spike-04", "2001:41c9:2:d6::21"),
  // A("@", "89.16.162.21", TTL("10m")),
  // AAAA("@", "2001:41c9:2:d6::21", TTL("10m")),
  // A("www", "89.16.162.21", TTL("10m")),
  // AAAA("www", "2001:41c9:2:d6::21", TTL("10m")),
  // A("api", "89.16.162.21", TTL("10m")),
  // AAAA("api", "2001:41c9:2:d6::21", TTL("10m")),
  // A("maps", "89.16.162.21", TTL("10m")),
  // AAAA("maps", "2001:41c9:2:d6::21", TTL("10m")),
  // A("mapz", "89.16.162.21", TTL("10m")),
  // AAAA("mapz", "2001:41c9:2:d6::21", TTL("10m")),
  A("spike-04.bm", "10.0.32.21"),
  A("spike-04.oob", "10.0.33.21"),

  A("spike-05", "89.16.162.22"),
  AAAA("spike-05", "2001:41c9:2:d6::22"),
  // A("@", "89.16.162.22", TTL("10m")),
  // AAAA("@", "2001:41c9:2:d6::22", TTL("10m")),
  // A("www", "89.16.162.22", TTL("10m")),
  // AAAA("www", "2001:41c9:2:d6::22", TTL("10m")),
  // A("api", "89.16.162.22", TTL("10m")),
  // AAAA("api", "2001:41c9:2:d6::22", TTL("10m")),
  // A("maps", "89.16.162.22", TTL("10m")),
  // AAAA("maps", "2001:41c9:2:d6::22", TTL("10m")),
  // A("mapz", "89.16.162.22", TTL("10m")),
  // AAAA("mapz", "2001:41c9:2:d6::22", TTL("10m")),
  A("spike-05.bm", "10.0.32.22"),
  A("spike-05.oob", "10.0.33.22"),

  A("spike-06", "130.117.76.11"),
  AAAA("spike-06", "2001:978:2:2c::172:B"),
  A("@", "130.117.76.11", TTL("10m")),
  AAAA("@", "2001:978:2:2c::172:B", TTL("10m")),
  A("www", "130.117.76.11", TTL("10m")),
  AAAA("www", "2001:978:2:2c::172:B", TTL("10m")),
  A("api", "130.117.76.11", TTL("10m")),
  AAAA("api", "2001:978:2:2c::172:B", TTL("10m")),
  A("maps", "130.117.76.11", TTL("10m")),
  AAAA("maps", "2001:978:2:2c::172:B", TTL("10m")),
  A("mapz", "130.117.76.11", TTL("10m")),
  AAAA("mapz", "2001:978:2:2c::172:B", TTL("10m")),
  A("spike-06.ams", "10.0.48.11"),
  A("spike-06.oob", "10.0.49.11"),

  A("spike-07", "130.117.76.12"),
  AAAA("spike-07", "2001:978:2:2c::172:C"),
  A("@", "130.117.76.12", TTL("10m")),
  AAAA("@", "2001:978:2:2c::172:C", TTL("10m")),
  A("www", "130.117.76.12", TTL("10m")),
  AAAA("www", "2001:978:2:2c::172:C", TTL("10m")),
  A("api", "130.117.76.12", TTL("10m")),
  AAAA("api", "2001:978:2:2c::172:C", TTL("10m")),
  A("maps", "130.117.76.12", TTL("10m")),
  AAAA("maps", "2001:978:2:2c::172:C", TTL("10m")),
  A("mapz", "130.117.76.12", TTL("10m")),
  AAAA("mapz", "2001:978:2:2c::172:C", TTL("10m")),
  A("spike-07.ams", "10.0.48.12"),
  A("spike-07.oob", "10.0.49.12"),

  A("spike-08", "130.117.76.13"),
  AAAA("spike-08", "2001:978:2:2c::172:D"),
  A("@", "130.117.76.13", TTL("10m")),
  AAAA("@", "2001:978:2:2c::172:D", TTL("10m")),
  A("www", "130.117.76.13", TTL("10m")),
  AAAA("www", "2001:978:2:2c::172:D", TTL("10m")),
  A("api", "130.117.76.13", TTL("10m")),
  AAAA("api", "2001:978:2:2c::172:D", TTL("10m")),
  A("maps", "130.117.76.13", TTL("10m")),
  AAAA("maps", "2001:978:2:2c::172:D", TTL("10m")),
  A("mapz", "130.117.76.13", TTL("10m")),
  AAAA("mapz", "2001:978:2:2c::172:D", TTL("10m")),
  A("spike-08.ams", "10.0.48.13"),
  A("spike-08.oob", "10.0.49.13"),

  // Rails application servers

  A("thorn-01.ams", "10.0.48.51"),
  A("rails1.ams", "10.0.48.51"),
  A("thorn-01.oob", "10.0.49.51"),

  A("thorn-02.ams", "10.0.48.52"),
  A("rails2.ams", "10.0.48.52"),
  A("thorn-02.oob", "10.0.49.52"),

  A("thorn-03.ams", "10.0.48.53"),
  A("rails3.ams", "10.0.48.53"),
  A("thorn-03.oob", "10.0.49.53"),

  A("thorn-04.bm", "10.0.32.41"),
  A("rails4.bm", "10.0.32.41"),
  A("thorn-04.oob", "10.0.33.41"),

  A("thorn-05.bm", "10.0.32.42"),
  A("rails5.bm", "10.0.32.42"),
  A("thorn-05.oob", "10.0.33.42"),

  // Nominatim servers

  A("pummelzacken", "193.60.236.18"),
  // A("nominatim", "193.60.236.18", TTL("10m")),
  A("pummelzacken.ucl", "10.0.0.20"),
  A("pummelzacken.oob", "10.0.1.20"),

  A("dulcy", "130.117.76.9"),
  AAAA("dulcy", "2001:978:2:2c::172:9"),
  A("nominatim", "130.117.76.9", TTL("10m")),
  AAAA("nominatim", "2001:978:2:2c::172:9", TTL("10m")),
  A("dulcy.ams", "10.0.48.9"),
  A("dulcy.oob", "10.0.49.9"),

  // Taginfo server

  A("grindtooth", "193.60.236.15"),
  A("taginfo", "193.60.236.15", TTL("10m")),
  A("grindtooth.ucl", "10.0.0.19"),
  A("grindtooth.oob", "10.0.1.19"),

  A("stormfly-01", "140.211.167.104"),
  AAAA("stormfly-01", "2605:bc80:3010:700::8cde:a768"),
  // A("taginfo", "140.211.167.104", TTL("10m")),
  // AAAA("taginfo", "2605:bc80:3010:700::8cde:a768", TTL("10m")),
  A("stormfly-01.oob", "10.0.0.99"),

  // Tile servers

  A("orm", "130.117.76.3"),
  AAAA("orm", "2001:978:2:2c::172:3"),
  A("orm.ams", "10.0.48.3"),
  A("orm.oob", "10.0.49.3"),

  A("odin", "130.117.76.15"),
  AAAA("odin", "2001:978:2:2c::172:f"),
  A("odin.ams", "10.0.48.15"),
  A("odin.oob", "10.0.49.15"),

  A("ysera", "193.60.236.22"),
  A("ysera.ucl", "10.0.0.15"),
  A("ysera.oob", "10.0.1.15"),

  A("scorch", "176.31.235.79"),
  AAAA("scorch", "2001:41d0:2:fc4f::1"),

  A("rhaegal", "161.53.248.77"),

  A("pyrene", "140.211.167.98"),
  AAAA("pyrene", "2605:bc80:3010:700::8cd3:a762"),
  A("pyrene.oob", "10.0.0.40"),

  A("bowser", "138.44.68.106"),

  CNAME("tile", QUALIFY("tile.geo")),
  CNAME("a.tile", QUALIFY("tile.geo")),
  CNAME("b.tile", QUALIFY("tile.geo")),
  CNAME("c.tile", QUALIFY("tile.geo")),

  // Services machine

  A("ironbelly", "130.117.76.10"),
  AAAA("ironbelly", "2001:978:2:2c::172:a"),
  A("backup", "130.117.76.10", TTL("10m")),
  AAAA("backup", "2001:978:2:2c::172:a", TTL("10m")),
  A("planet", "130.117.76.10", TTL("10m")),
  AAAA("planet", "2001:978:2:2c::172:a", TTL("10m")),
  A("logstash", "130.117.76.10"),
  AAAA("logstash", "2001:978:2:2c::172:a"),
  A("ironbelly.ams", "10.0.48.10"),
  A("ironbelly.oob", "10.0.49.10"),

  A("grisu", "89.16.162.20"),
  AAAA("grisu", "2001:41c9:2:d6::20"),
  // A("backup", "89.16.162.20", TTL("10m")),
  // AAAA("backup", "2001:41c9:2:d6::20", TTL("10m")),
  // A("planet", "89.16.162.20", TTL("10m")),
  // AAAA("planet", "2001:41c9:2:d6::20", TTL("10m")),
  A("grisu.bm", "10.0.32.20"),
  A("grisu.oob", "10.0.33.20"),

  // Database servers

  A("karm.ams", "10.0.48.50"),
  A("karm.oob", "10.0.49.50"),

  A("eddie.ucl", "10.0.0.10"),
  A("eddie.oob", "10.0.1.10"),

  A("katla.bm", "10.0.32.40"),
  A("katla.oob", "10.0.33.40"),

  A("ramoth.ams", "10.0.48.5"),
  A("ramoth.oob", "10.0.49.5"),

  // Development server with wildcard alias for user sites

  A("errol", "193.60.236.13"),
  A("dev", "193.60.236.13"),
  A("*.dev", "193.60.236.13"),
  A("ooc", "193.60.236.13"),
  A("a.ooc", "193.60.236.13"),
  A("b.ooc", "193.60.236.13"),
  A("c.ooc", "193.60.236.13"),
  A("npe", "193.60.236.13"),
  A("errol.ucl", "10.0.0.14"),
  A("errol.oob", "10.0.1.14"),

  // Foundation server

  A("ridley", "193.60.236.19"),
  A("otrs", "193.60.236.19"),
  A("blog", "193.60.236.19"),
  A("foundation", "193.60.236.19"),
  A("hot", "193.60.236.19"),
  A("dmca", "193.60.236.19"),
  A("ridley.ucl", "10.0.0.3"),
  A("ridley.oob", "10.0.1.3"),

  // Piwik server

  A("eustace", "193.60.236.14"),
  A("piwik", "193.60.236.14"),
  A("eustace.ucl", "10.0.0.9"),
  A("eustace.oob", "10.0.1.9"),

  // Imagery servers

  A("draco", "193.60.236.12"),
  A("draco.ucl", "10.0.0.11"),
  A("draco.oob", "10.0.1.11"),

  A("kessie", "178.250.74.36"),
  AAAA("kessie", "2a02:1658:4:0:dad3:85ff:fe5d:875e"),
  A("agri", "178.250.74.36", TTL("1h")),
  AAAA("agri", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("a.agri", "178.250.74.36", TTL("1h")),
  AAAA("a.agri", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("b.agri", "178.250.74.36", TTL("1h")),
  AAAA("b.agri", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("c.agri", "178.250.74.36", TTL("1h")),
  AAAA("c.agri", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("os", "178.250.74.36", TTL("1h")),
  AAAA("os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("a.os", "178.250.74.36", TTL("1h")),
  AAAA("a.os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("b.os", "178.250.74.36", TTL("1h")),
  AAAA("b.os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("c.os", "178.250.74.36", TTL("1h")),
  AAAA("c.os", "2a02:1658:4:0:dad3:85ff:fe5d:875e", TTL("1h")),
  A("kessie.oob", "178.250.74.37"),

  // Munin server

  A("urmel", "193.60.236.21"),
  A("munin", "193.60.236.21"),
  A("urmel.ucl", "10.0.0.6"),
  A("urmel.oob", "10.0.1.6"),

  // Chef server

  A("sarel", "193.60.236.20"),
  A("chef", "193.60.236.20"),
  A("hardware", "193.60.236.20"),
  A("acme", "193.60.236.20"),
  A("git", "193.60.236.20", TTL("10m")),
  A("dns", "193.60.236.20", TTL("10m")),
  A("sarel.ucl", "10.0.0.12"),
  A("sarel.oob", "10.0.1.12"),

  // Forum server

  A("clifford", "193.60.236.11"),
  A("forum", "193.60.236.11", TTL("10m")),
  A("clifford.ucl", "10.0.0.17"),
  A("clifford.oob", "10.0.1.17"),

  // KVMs

  A("kvm1.ucl", "10.0.0.21"),

  // Managed network switches

  A("switch1", "130.117.76.2"),
  AAAA("switch1", "2001:978:2:2c::172:2"),

  // Managed power strips

  A("pdu1.ams", "10.0.48.100"),
  A("pdu2.ams", "10.0.48.101"),

  // Bytemark machine, and the services which operate from it

  A("shenron", "212.110.172.32"),
  AAAA("shenron", "2001:41c9:1:400::32"),
  A("mail", "212.110.172.32"),
  AAAA("mail", "2001:41c9:1:400::32"),
  A("mta-sts", "212.110.172.32"),
  AAAA("mta-sts", "2001:41c9:1:400::32"),
  A("lists", "212.110.172.32"),
  AAAA("lists", "2001:41c9:1:400::32"),
  A("svn", "212.110.172.32"),
  AAAA("svn", "2001:41c9:1:400::32"),
  A("trac", "212.110.172.32"),
  AAAA("trac", "2001:41c9:1:400::32"),
  A("irc", "212.110.172.32"),
  AAAA("irc", "2001:41c9:1:400::32"),
  A("help", "212.110.172.32"),
  AAAA("help", "2001:41c9:1:400::32"),
  A("blogs", "212.110.172.32", TTL("10m")),
  AAAA("blogs", "2001:41c9:1:400::32", TTL("10m")),
  A("shenron.bm", "10.0.16.3"),

  // Wiki servers

  A("tabaluga", "130.117.76.14"),
  AAAA("tabaluga", "2001:978:2:2c::172:e"),
  A("wiki", "130.117.76.14", TTL("10m")),
  AAAA("wiki", "2001:978:2:2c::172:e", TTL("10m")),
  A("tabaluga.ams", "10.0.48.14"),
  A("tabaluga.oob", "10.0.49.14"),

  // GPS tile server

  A("noquiklos", "193.60.236.16"),
  A("gps-tile", "193.60.236.16"),
  A("a.gps-tile", "193.60.236.16"),
  A("b.gps-tile", "193.60.236.16"),
  A("c.gps-tile", "193.60.236.16"),
  A("gps.tile", "193.60.236.16"),
  A("gps-a.tile", "193.60.236.16"),
  A("gps-b.tile", "193.60.236.16"),
  A("gps-c.tile", "193.60.236.16"),
  A("noquiklos.ucl", "10.0.0.13"),
  A("noquiklos.oob", "10.0.1.13"),

  // Tile cache servers

  A("gorynych", "5.45.248.21"),
  AAAA("gorynych", "2a02:6b8:b010:5065::a001"),
  A("trogdor", "134.90.146.26"),
  A("trogdor.oob", "134.90.146.30"),
  A("ridgeback", "31.169.50.10"),
  A("ridgeback.oob", "31.169.50.14"),
  A("jakelong", "71.19.155.177"),
  AAAA("jakelong", "2605:2700:0:17:a800:ff:fe3e:cdca"),
  A("nepomuk", "77.95.65.39"),
  AAAA("nepomuk", "2a03:9180:0:100::7"),
  A("simurgh", "94.20.20.55"),
  A("katie", "144.76.70.77"),
  AAAA("katie", "2a01:4f8:191:834c::2"),
  A("konqi", "81.7.11.83"),
  AAAA("konqi", "2a02:180:1:1::517:b53"),
  A("longma", "140.110.240.7"),
  AAAA("longma", "2001:e10:2000:240::7"),
  A("viserion", "193.198.233.211"),
  AAAA("viserion", "2001:b68:4cff:3::3"),
  A("drogon", "161.53.30.107"),
  AAAA("drogon", "2001:b68:c0ff:0:221:5eff:fe40:c7c4"),
  A("saphira", "185.73.44.30"),
  AAAA("saphira", "2001:ba8:0:2c1e::"),
  A("toothless", "185.73.44.167"),
  AAAA("toothless", "2001:ba8:0:2ca7::"),
  A("sarkany", "37.17.173.8"),
  AAAA("sarkany", "2001:4c48:2:bf04:250:56ff:fe8f:5c81"),
  A("cmok", "31.130.201.40"),
  AAAA("cmok", "2001:67c:2268:1005:21e:8cff:fe8c:8d3b"),
  A("stormfly-02", "140.211.167.105"),
  AAAA("stormfly-02", "2605:bc80:3010:700::8cde:a769"),
  A("stormfly-02.oob", "10.0.0.108"),
  A("rimfaxe", "130.225.254.109"),
  AAAA("rimfaxe", "2001:878:346::109"),
  A("culebre", "155.210.4.103"),
  A("kalessin", "185.66.195.245"),
  AAAA("kalessin", "2a03:2260:2000:1::5"),
  A("angor", "196.10.54.165"),
  // AAAA("angor", "2001:43f8:1f4:b00:b283:feff:fed8:dd45"),
  A("ladon", "83.212.2.116"),
  AAAA("ladon", "2001:648:2ffe:4::116"),
  A("ascalon", "184.107.48.228"),
  A("noomoahk", "91.224.148.166"),
  AAAA("noomoahk", "2a03:7220:8080:a600::1"),
  A("cherufe", "200.91.44.37"),
  A("norbert", "89.234.186.100"),
  AAAA("norbert", "2a00:5884:821c::1"),
  A("chrysophylax", "217.71.244.22"),
  AAAA("chrysophylax", "2001:8e0:40:2039::10"),
  A("necrosan", "80.67.167.77"),
  AAAA("necrosan", "2a0b:cbc0:110d:1::1c"),
  A("keizer", "195.201.226.63"),
  AAAA("keizer", "2a01:4f8:1c1c:bc54::1"),
  A("vipertooth", "176.122.99.101"),
  AAAA("vipertooth", "2001:67c:2d40::65"),
  A("tuatara", "114.23.141.203"),
  AAAA("tuatara", "2406:1e00:b410:c24:529a:4cff:fe79:bc3b"),
  A("waima", "103.197.61.160"),
  A("nidhogg", "130.236.254.221"),
  AAAA("nidhogg", "2001:6b0:17:f0a0::dd"),
  A("boitata", "200.236.31.207"),
  AAAA("boitata", "2801:82:80ff:8002:216:ccff:feaa:21"),
  A("fafnir", "130.239.18.114"),
  AAAA("fafnir", "2001:6b0:e:2a18::114"),
  A("fume", "147.228.60.16"),
  A("balerion", "138.44.68.134"),
  A("naga", "185.116.130.151"),

  // Blades

  A("tiamat-00", "193.60.236.40"),
  A("tiamat-00.ucl", "10.0.0.40"),
  A("tiamat-00.oob", "10.0.1.40"),
  A("tiamat-01", "193.60.236.41"),
  A("tiamat-01.ucl", "10.0.0.41"),
  A("tiamat-01.oob", "10.0.1.41"),
  A("tiamat-02", "193.60.236.42"),
  A("tiamat-02.ucl", "10.0.0.42"),
  A("tiamat-02.oob", "10.0.1.42"),
  A("tiamat-03", "193.60.236.43"),
  A("tiamat-03.ucl", "10.0.0.43"),
  A("tiamat-03.oob", "10.0.1.43"),
  A("tiamat-10", "193.60.236.44"),
  A("tiamat-10.ucl", "10.0.0.44"),
  A("tiamat-10.oob", "10.0.1.44"),
  A("tiamat-11", "193.60.236.45"),
  A("tiamat-11.ucl", "10.0.0.45"),
  A("tiamat-11.oob", "10.0.1.45"),
  A("tiamat-12", "193.60.236.46"),
  A("tiamat-12.ucl", "10.0.0.46"),
  A("tiamat-12.oob", "10.0.1.46"),
  A("tiamat-13", "193.60.236.47"),
  A("tiamat-13.ucl", "10.0.0.47"),
  A("tiamat-13.oob", "10.0.1.47"),
  A("tiamat-20", "193.60.236.48"),
  A("tiamat-20.ucl", "10.0.0.48"),
  A("tiamat-20.oob", "10.0.1.48"),
  A("tiamat-21", "193.60.236.49"),
  A("tiamat-21.ucl", "10.0.0.49"),
  A("tiamat-21.oob", "10.0.1.49"),
  A("tiamat-22", "193.60.236.50"),
  A("tiamat-22.ucl", "10.0.0.50"),
  A("tiamat-22.oob", "10.0.1.50"),
  A("tiamat-23", "193.60.236.51"),
  A("tiamat-23.ucl", "10.0.0.51"),
  A("tiamat-23.oob", "10.0.1.51"),

  // Donation site

  A("donate", "193.60.236.19", TTL("10m")),

  // Uptime site at StatusCake

  CNAME("uptime", "uptimessl.statuscake.com."),

  // Custom Domain for https://github.com/osmfoundation/welcome-mat/

  CNAME("welcome", "osmfoundation.github.io."),

  // Dynamic DNS records

  DYNAMIC_RECORDS

);
