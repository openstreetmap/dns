preview: preview_cloudflare

preview_cloudflare: sshfp gdns
	dnscontrol preview

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

gdns: gdns_tile gdns_render gdns_nominatim

gdns_tile: lib/countries.xml origins/tile.openstreetmap.yml
	bin/mkgeo origins/tile.openstreetmap.yml src/tile.openstreetmap.yml tile origins/render.openstreetmap.yml tile

gdns_render: lib/countries.xml origins/render.openstreetmap.yml
	bin/mkgeo origins/render.openstreetmap.yml src/render.openstreetmap.yml render origins/tile-total.openstreetmap.yml

gdns_nominatim: lib/countries.xml origins/nominatim.openstreetmap.yml
	bin/mkgeo origins/nominatim.openstreetmap.yml src/nominatim.openstreetmap.yml nominatim origins/nominatim-total.openstreetmap.yml nominatim

clean:
	rm -f includes/* json/* origins/* gdns/*

lib/countries.xml:
	curl -s -o $@ http://api.geonames.org/countryInfo?username=demo

origins/tile.openstreetmap.yml: bin/mkcountries lib/countries.xml bandwidth/tile.openstreetmap.yml
	bin/mkcountries bandwidth/tile.openstreetmap.yml origins/tile.openstreetmap.yml

origins/render.openstreetmap.yml: gdns_tile

origins/nominatim.openstreetmap.yml: bin/mkcountries lib/countries.xml bandwidth/nominatim.openstreetmap.yml
	bin/mkcountries bandwidth/nominatim.openstreetmap.yml origins/nominatim.openstreetmap.yml
