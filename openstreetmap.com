# tinydns data for openstreetmap.com
#
# Full reference is at http://cr.yp.to/djbdns/tinydns-data.html

# Let Bytemark handle the DNS

.openstreetmap.com::a.ns.bytemark.co.uk
.openstreetmap.com::b.ns.bytemark.co.uk
.openstreetmap.com::c.ns.bytemark.co.uk

# Make the virtual machine the primary MX with Bytemark as backup

@openstreetmap.com:89.16.177.88:a:10
@openstreetmap.com::backup.mx.bytemark.co.uk:20

# Main web server and it's aliases

+openstreetmap.com:128.40.58.202
+www.openstreetmap.com:128.40.58.202
