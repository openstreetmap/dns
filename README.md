OpenStreetMap DNS
======================================

This repository contains the DNS zone file templates and related code for managing OpenStreetMap.org and other domain names DNS. The full list of domains are in the [dnsconfig.js](dnsconfig.js) file.

## Standard DNS Zone Files

We use [dnscontrol](https://stackexchange.github.io/dnscontrol/) to manage the DNS zones. We have a few wrapper scripts which are called from the [Makefile](Makefile)

On a repo commit, a git [post-receive](https://github.com/openstreetmap/chef/blob/master/cookbooks/dns/files/default/post-receive) runs `make update` via a [script](https://github.com/openstreetmap/chef/blob/master/cookbooks/dns/templates/default/dns-update.erb) which then pushes the updates the DNS zones on the authoritative DNS nameservers.

## GeoDNS Zones

For GeoDNS zones we use [gdnsd](https://gdnsd.org/).