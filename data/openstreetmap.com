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

+puff.openstreetmap.com:128.40.168.98
+openstreetmap.com:128.40.168.98:3600
+www.openstreetmap.com:128.40.168.98:3600
+api.openstreetmap.com:128.40.168.98:3600
+maps.openstreetmap.com:128.40.168.98:3600
+mapz.openstreetmap.com:128.40.168.98:3600
+puff.internal.openstreetmap.com:10.0.0.8
+puff.ilo.openstreetmap.com:10.0.0.58

+fuchur.openstreetmap.com:128.40.168.105
+openstreetmap.com:128.40.168.105:3600
+www.openstreetmap.com:128.40.168.105:3600
+api.openstreetmap.com:128.40.168.105:3600
+maps.openstreetmap.com:128.40.168.105:3600
+mapz.openstreetmap.com:128.40.168.105:3600
+fuchur.internal.openstreetmap.com:10.0.0.9
+fuchur.ilo.openstreetmap.com:10.0.0.59

# Rails application servers

+draco.internal.openstreetmap.com:10.0.0.10
+rails1.internal.openstreetmap.com:10.0.0.10
+draco.ilo.openstreetmap.com:10.0.0.60
+sarel.internal.openstreetmap.com:10.0.0.11
+rails2.internal.openstreetmap.com:10.0.0.11
+sarel.ilo.openstreetmap.com:10.0.0.61
+norbert.internal.openstreetmap.com:10.0.0.12
+rails3.internal.openstreetmap.com:10.0.0.12
+norbert.ilo.openstreetmap.com:10.0.0.62

# Gazetteer (nominatim) server

+poldi.openstreetmap.com:128.40.168.106 
+poldi.internal.openstreetmap.com:10.0.0.16
+poldi.ilo.openstreetmap.com:10.0.0.66
+nominatim.openstreetmap.com:128.40.168.106

# Gazetteer (namefinder) server

+gazetteer.openstreetmap.com:128.40.168.96
+gazetteer.internal.openstreetmap.com:10.0.0.1

# XAPI server

+fafnir.openstreetmap.com:128.40.168.97
+xapi.openstreetmap.com:128.40.168.97
+fafnir.internal.openstreetmap.com:10.0.0.4

# OWL server

+albi.openstreetmap.com:128.40.168.95
+owl.openstreetmap.com:128.40.168.95
+albi.internal.openstreetmap.com:10.0.0.2
+albi.ilo.openstreetmap.com:10.0.0.52

# Spare server

+azure.openstreetmap.com:128.40.168.100
+jxapi.openstreetmap.com:128.40.168.100
+azure.internal.openstreetmap.com:10.0.0.5
+azure.ilo.openstreetmap.com:10.0.0.55

# Mapnik tile server, with wildcard alias to allow parallel loading

+yevaud.openstreetmap.com:128.40.168.104
+tile.openstreetmap.com:193.63.75.26:1800
+a.tile.openstreetmap.com:193.63.75.26:900
+b.tile.openstreetmap.com:128.40.168.95:900
+c.tile.openstreetmap.com:128.40.168.95:900
+yevaud.internal.openstreetmap.com:10.0.0.15
+yevaud.ilo.openstreetmap.com:10.0.0.65

# Services machine

+horntail.openstreetmap.com:128.40.168.99
+munin.openstreetmap.com:128.40.168.99
+apt.openstreetmap.com:128.40.168.99
+stats.openstreetmap.com:128.40.168.99
+chef.openstreetmap.com:128.40.168.99
+backup.openstreetmap.com:10.0.0.7
+horntail.internal.openstreetmap.com:10.0.0.7
+horntail.ilo.openstreetmap.com:10.0.0.57

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

+smaug.internal.openstreetmap.com:10.0.0.13
+db.internal.openstreetmap.com:10.0.0.13:60
+smaug.ilo.internal.openstreetmap.com:10.0.0.63

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
+errol.ilo.openstreetmap.com:10.0.0.64

# Foundation server

+ridley.openstreetmap.com:128.40.168.102
+otrs.openstreetmap.com:128.40.168.102
+blog.openstreetmap.com:128.40.168.102
+foundation.openstreetmap.com:128.40.168.102
+ridley.internal.openstreetmap.com:10.0.0.3

# Planet dumps are currently served from horntail

+planet.openstreetmap.com:128.40.168.99

# APC power switch

+apc1.internal.openstreetmap.com:10.0.0.49
+apc2.internal.openstreetmap.com:10.0.0.50
+apc3.internal.openstreetmap.com:10.0.0.51

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
+shenron.internal.openstreetmap.com:10.0.0.251

3shenron.openstreetmap.com:200141c800100996021d7dfffec3df70
3mail.openstreetmap.com:200141c800100996021d7dfffec3df70
3lists.openstreetmap.com:200141c800100996021d7dfffec3df70
3svn.openstreetmap.com:200141c800100996021d7dfffec3df70
3git.openstreetmap.com:200141c800100996021d7dfffec3df70
3trac.openstreetmap.com:200141c800100996021d7dfffec3df70
3irc.openstreetmap.com:200141c800100996021d7dfffec3df70
3help.openstreetmap.com:200141c800100996021d7dfffec3df70
3shop.openstreetmap.com:200141c800100996021d7dfffec3df70

# Wiki server

+konqi.openstreetmap.com:193.63.75.26
+konqi.ilo.openstreetmap.com:193.63.75.27
+konqi.internal.openstreetmap.com:10.0.0.252
+wiki.openstreetmap.com:193.63.75.26
+dump.wiki.openstreetmap.com:193.63.75.26

# Tile cache server

+orm.openstreetmap.com:193.63.75.98

# Blog aggregator (on Shaun McDonald's VM)

+blogs.openstreetmap.com:89.16.175.12

# Cruise (on Shaun McDonald's VM)

+cruise.openstreetmap.com:89.16.175.12
 
# Donation site

+donate.openstreetmap.com:89.145.67.86

# HOT site

+hot.openstreetmap.com:69.163.129.108
