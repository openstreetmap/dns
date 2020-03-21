preview: preview_cloudflare

preview_cloudflare: include/sshfp.js include/tile.js include/render.js include/nominatim.js
	dnscontrol preview

update: update_cloudflare update_geodns

update_cloudflare: include/sshfp.js include/tile.js include/render.js include/nominatim.js
	dnscontrol push --providers cloudflare

update_geodns: gdns/tile.map gdns/tile.resource gdns/tile.weighted gdns/nominatim.map gdns/nominatim.resource gdns/nominatim.weighted
	parallel --will-cite rsync --quiet --recursive --checksum gdns/ {}::geodns ::: ${GEODNS_SERVERS}

clean:
	rm -f includes/* json/* origins/* gdns/*

lib/countries.xml:
	curl -s -o $@ http://api.geonames.org/countryInfo?username=demo

include/sshfp.js&: bin/mksshfp $(wildcard /etc/ssh/ssh_known_hosts)
	bin/mksshfp

origins/tile.openstreetmap.yml&: bin/mkcountries lib/countries.xml bandwidth/tile.openstreetmap.yml
	bin/mkcountries bandwidth/tile.openstreetmap.yml origins/tile.openstreetmap.yml

include/tile.js json/tile.openstreetmap.org.json origins/render.openstreetmap.yml gdns/tile.map gdns/tile.resource gdns/tile.weighted&: bin/mkgeo origins/tile.openstreetmap.yml src/tile.openstreetmap.yml
	bin/mkgeo origins/tile.openstreetmap.yml src/tile.openstreetmap.yml tile origins/render.openstreetmap.yml tile

include/render.js json/render.openstreetmap.org.json&: bin/mkgeo origins/render.openstreetmap.yml src/render.openstreetmap.yml
	bin/mkgeo origins/render.openstreetmap.yml src/render.openstreetmap.yml render origins/tile-total.openstreetmap.yml

origins/nominatim.openstreetmap.yml&: bin/mkcountries lib/countries.xml bandwidth/nominatim.openstreetmap.yml
	bin/mkcountries bandwidth/nominatim.openstreetmap.yml origins/nominatim.openstreetmap.yml

include/nominatim.js json/nominatim.openstreetmap.org.json origins/nominatim-total.openstreetmap.yml gdns/nominatim.map gdns/nominatim.resource gdns/nominatim.weighted&: bin/mkgeo origins/nominatim.openstreetmap.yml src/nominatim.openstreetmap.yml
	bin/mkgeo origins/nominatim.openstreetmap.yml src/nominatim.openstreetmap.yml nominatim origins/nominatim-total.openstreetmap.yml nominatim
