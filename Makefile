preview: preview_cloudflare

preview_cloudflare: sshfp gdns
	dnscontrol preview

check: check_cloudflare

check_cloudflare: sshfp gdns
	dnscontrol check

update: update_cloudflare update_geodns

update_primary: update_cloudflare_primary update_geodns

update_cloudflare: sshfp gdns
	dnscontrol push --providers cloudflare

update_cloudflare_primary: sshfp gdns
	dnscontrol push --providers cloudflare --domains openstreetmap.org

update_geodns: gdns
	parallel --will-cite rsync --quiet --recursive --checksum gdns/ {}::geodns ::: ${GEODNS_SERVERS}

sshfp:
	bin/mksshfp

gdns: gdns_nominatim

gdns_nominatim: lib/countries.xml origins/nominatim.openstreetmap.yml
	bin/mkgeo origins/nominatim.openstreetmap.yml src/nominatim.openstreetmap.yml nominatim origins/nominatim-total.openstreetmap.yml nominatim

clean:
	rm -f includes/* json/* origins/* gdns/*

lib/countries.xml:
	curl -s -o $@ http://api.geonames.org/countryInfo?username=demo

origins/nominatim.openstreetmap.yml: bin/mkcountries lib/countries.xml requests/nominatim.openstreetmap.yml
	bin/mkcountries requests/nominatim.openstreetmap.yml origins/nominatim.openstreetmap.yml
