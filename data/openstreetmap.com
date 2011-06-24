# tinydns data for openstreetmap.com
#
# Full reference is at http://cr.yp.to/djbdns/tinydns-data.html

# Let Bytemark handle the DNS

.openstreetmap.com::a.ns.bytemark.co.uk
.openstreetmap.com::b.ns.bytemark.co.uk
.openstreetmap.com::c.ns.bytemark.co.uk

# Make the virtual machine the primary MX with Bytemark as backup

@openstreetmap.com:89.16.179.150:a:10
@openstreetmap.com::backup.mx.bytemark.co.uk:20
@otrs.openstreetmap.com::a.mx.openstreetmap.com:10
@messages.openstreetmap.com::a.mx.openstreetmap.com:10

3a.mx.openstreetmap.com:200141c800100996021d7dfffec3df70

# Publish an SPF record indicating that only shenron sends mail

'openstreetmap.com:v=spf1 ip4\07289.16.179.150 ip6\0722001\07241c8\07210\072996\07221d\0727dff\072fec3\072df70 ~all

# Main web servers and their aliases

+puff.openstreetmap.com:193.63.75.99
+openstreetmap.com:193.63.75.99:600
+www.openstreetmap.com:193.63.75.99:600
+api.openstreetmap.com:193.63.75.99:600
+maps.openstreetmap.com:193.63.75.99:600
+mapz.openstreetmap.com:193.63.75.99:600
+puff.ic.openstreetmap.com:146.179.159.162
+puff.oob.openstreetmap.com:146.179.159.188

+fuchur.openstreetmap.com:193.63.75.100
#+openstreetmap.com:193.63.75.100:600
#+www.openstreetmap.com:193.63.75.100:600
#+api.openstreetmap.com:193.63.75.100:600
#+maps.openstreetmap.com:193.63.75.100:600
#+mapz.openstreetmap.com:193.63.75.100:600
+fuchur.ic.openstreetmap.com:146.179.159.163
+fuchur.oob.openstreetmap.com:146.179.159.187

# Rails application servers

+draco.ic.openstreetmap.com:146.179.159.165
+rails1.ic.openstreetmap.com:146.179.159.165
+draco.oob.openstreetmap.com:146.179.159.185
+sarel.ic.openstreetmap.com:146.179.159.166
+rails2.ic.openstreetmap.com:146.179.159.166
+sarel.oob.openstreetmap.com:146.179.159.184
+norbert.ic.openstreetmap.com:146.179.159.167
+rails3.ic.openstreetmap.com:146.179.159.167
+norbert.oob.openstreetmap.com:146.179.159.183

# Gazetteer (nominatim) server

+poldi.openstreetmap.com:128.40.168.106 
+nominatim.openstreetmap.com:128.40.168.106
+poldi.ucl.openstreetmap.com:10.0.0.16
+poldi.oob.openstreetmap.com:10.0.1.16

# Gazetteer (namefinder) server

+gazetteer.openstreetmap.com:128.40.168.96
+gazetteer.ucl.openstreetmap.com:10.0.0.1

# XAPI server

+fafnir.openstreetmap.com:128.40.168.97
+xapi.openstreetmap.com:128.40.168.97
+fafnir.ucl.openstreetmap.com:10.0.0.4

# OWL server

+albi.openstreetmap.com:128.40.168.95
+owl.openstreetmap.com:128.40.168.95
+albi.ilo.openstreetmap.com:10.0.0.52
+albi.ucl.openstreetmap.com:10.0.0.2
+albi.oob.openstreetmap.com:10.0.1.2

# Spare server

+azure.openstreetmap.com:128.40.168.100
+jxapi.openstreetmap.com:128.40.168.100
+azure.ilo.openstreetmap.com:10.0.0.55
+azure.ucl.openstreetmap.com:10.0.0.5
+azure.oob.openstreetmap.com:10.0.1.5

# Mapnik tile server, with wildcard alias to allow parallel loading

+yevaud.openstreetmap.com:128.40.168.104
+tile.openstreetmap.com:193.63.75.26:600
+a.tile.openstreetmap.com:193.63.75.26:600
+b.tile.openstreetmap.com:128.40.168.95:600
+c.tile.openstreetmap.com:128.40.168.95:600
+yevaud.ucl.openstreetmap.com:10.0.0.15
+yevaud.oob.openstreetmap.com:10.0.1.15

# Services machine

+horntail.openstreetmap.com:193.63.75.101
+planet.openstreetmap.com:193.63.75.101
+munin.openstreetmap.com:193.63.75.101
+apt.openstreetmap.com:193.63.75.101
+stats.openstreetmap.com:193.63.75.101
+chef.openstreetmap.com:193.63.75.101
+backup.openstreetmap.com:193.63.75.101
+horntail.ic.openstreetmap.com:146.179.159.164
+backup.ic.openstreetmap.com:146.179.159.164
+horntail.oob.openstreetmap.com:146.179.159.186

# Osmarender tile server, with wildcard alias to allow parallel loading

+tah.openstreetmap.com:129.132.168.206
+a.tah.openstreetmap.com:129.132.168.206
+b.tah.openstreetmap.com:129.132.168.206
+c.tah.openstreetmap.com:129.132.168.206
+d.tah.openstreetmap.com:129.132.168.206
+e.tah.openstreetmap.com:129.132.168.206
+f.tah.openstreetmap.com:129.132.168.206
+server.tah.openstreetmap.com:129.132.168.206

# Database server

+smaug.ic.openstreetmap.com:146.179.159.168
+db.ic.openstreetmap.com:146.179.159.168
+smaug.oob.openstreetmap.com:146.179.159.182

# Development server with wildcard alias for user sites

+errol.openstreetmap.com:128.40.168.103
+dev.openstreetmap.com:128.40.168.103
+*.dev.openstreetmap.com:128.40.168.103
+ooc.openstreetmap.com:128.40.168.103
+a.ooc.openstreetmap.com:128.40.168.103
+b.ooc.openstreetmap.com:128.40.168.103
+c.ooc.openstreetmap.com:128.40.168.103
+npe.openstreetmap.com:128.40.168.103
+os.openstreetmap.com:128.40.168.103
+a.os.openstreetmap.com:128.40.168.103
+b.os.openstreetmap.com:128.40.168.103
+c.os.openstreetmap.com:128.40.168.103
+errol.ucl.openstreetmap.com:10.0.0.14
+errol.oob.openstreetmap.com:10.0.1.14

# Foundation server

+ridley.openstreetmap.com:128.40.168.102
+otrs.openstreetmap.com:128.40.168.102
+blog.openstreetmap.com:128.40.168.102
+foundation.openstreetmap.com:128.40.168.102
+ridley.ucl.openstreetmap.com:10.0.0.3

# APC power switches

+apc1.ucl.openstreetmap.com:10.0.0.49
+apc2.ucl.openstreetmap.com:10.0.0.50
+apc3.ucl.openstreetmap.com:10.0.0.51

# Managed network switches

+switch1.openstreetmap.com:193.63.75.102
+switch2.ic.openstreetmap.com:146.179.159.169

# Forum server

+forum.openstreetmap.com:93.186.179.231

# Bytemark machine, and the services which operate from it

+shenron.openstreetmap.com:89.16.179.150
+mail.openstreetmap.com:89.16.179.150
+lists.openstreetmap.com:89.16.179.150
+svn.openstreetmap.com:89.16.179.150
+git.openstreetmap.com:89.16.179.150
+trac.openstreetmap.com:89.16.179.150
+irc.openstreetmap.com:89.16.179.150
+help.openstreetmap.com:89.16.179.150
+shop.openstreetmap.com:89.16.179.150
+shenron.bm.openstreetmap.com:10.0.0.251

3shenron.openstreetmap.com:200141c800100996021d7dfffec3df70
3mail.openstreetmap.com:200141c800100996021d7dfffec3df70
3lists.openstreetmap.com:200141c800100996021d7dfffec3df70
3svn.openstreetmap.com:200141c800100996021d7dfffec3df70
3git.openstreetmap.com:200141c800100996021d7dfffec3df70
3trac.openstreetmap.com:200141c800100996021d7dfffec3df70
3help.openstreetmap.com:200141c800100996021d7dfffec3df70
3shop.openstreetmap.com:200141c800100996021d7dfffec3df70

# Wiki server

+konqi.openstreetmap.com:193.63.75.26:600
+konqi.ilo.openstreetmap.com:193.63.75.27:600
+wiki.openstreetmap.com:193.63.75.26:600
+dump.wiki.openstreetmap.com:193.63.75.26:600
#+konqi.ic.openstreetmap.com:10.0.16.1
#+konqi.oob.openstreetmap.com:10.0.17.1

# Tile cache server

+orm.openstreetmap.com:193.63.75.98
#+orm.ic.openstreetmap.com:10.0.16.2
#+orm.oob.openstreetmap.com:10.0.17.2

# Blog aggregator (on Shaun McDonald's VM)

+blogs.openstreetmap.com:89.16.175.12

# Cruise (on Shaun McDonald's VM)

+cruise.openstreetmap.com:89.16.175.12
 
# Donation site

+donate.openstreetmap.com:89.145.67.86

# HOT site

+hot.openstreetmap.com:69.163.129.108

# Jochen Topf's taginfo service, running on openstreetmap.com.de hardware

+taginfo.openstreetmap.com:85.214.118.227
3taginfo.openstreetmap.com:2a0102384000000003cac7808a7d7be2
