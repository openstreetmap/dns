preview: preview_dnscontrol

preview_dnscontrol: check sshfp gdns
	dnscontrol preview

check: check_dnscontrol

check_dnscontrol: sshfp gdns
	dnscontrol check

update: update_dnscontrol update_geodns

update_primary: update_dnscontrol_primary update_geodns

update_dnscontrol: check sshfp gdns
	dnscontrol push

update_dnscontrol_primary: check sshfp gdns
	dnscontrol push --domains openstreetmap.org

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
