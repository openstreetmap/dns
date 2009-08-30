# tinydns data for stateofthemap.com
#
# Full reference is at http://cr.yp.to/djbdns/tinydns-data.html

# Let Bytemark handle the DNS

.stateofthemap.com::a.ns.bytemark.co.uk
.stateofthemap.com::b.ns.bytemark.co.uk
.stateofthemap.com::c.ns.bytemark.co.uk

# Let google handle email

@stateofthemap.com::aspmx.l.google.com:1:3600
@stateofthemap.com::alt1.aspmx.l.google.com:5:3600
@stateofthemap.com::alt2.aspmx.l.google.com:5:3600
@stateofthemap.com::aspmx2.googlemail.com:10:3600
@stateofthemap.com::aspmx3.googlemail.com:10:3600

# Alias for login

Clogin.stateofthemap.com:ghs.google.com

# Main web server and it's aliases

+stateofthemap.com:128.40.168.102
+www.stateofthemap.com:128.40.168.102
+2009.stateofthemap.com:128.40.168.102
+2008.stateofthemap.com:128.40.168.102
+2007.stateofthemap.com:128.40.168.102
