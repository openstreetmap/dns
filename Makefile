all: data/openstreetmap.org data/openstreetmap.com data/openstreetmap.net \
     data/openstreetmap.ca data/openstreetmap.eu data/openstreetmap.pro \
     data/openstreetmaps.org data/osm.org data/openmaps.org \
     data/openstreetmap.io data/osm.io \
     data/openworldmap.org data/freeosm.org data/open-maps.org data/open-maps.com \
     data/openstreetmap.org.uk data/openstreetmap.co.uk \
     data/osmfoundation.org data/stateofthemap.org data/stateofthemap.com \
     data/stateofthemap.eu \
     data/opengeodata.org \
     data/switch2osm.org data/switch2osm.com \
     data/tile.openstreetmap.org \
     data/render.openstreetmap.org

clean:
	rm lib/countries.xml data/*

update: all
	bin/update

lib/countries.xml:
	curl -s -o $@ http://api.geonames.org/countryInfo?username=demo

data/openstreetmap.org: src/openstreetmap
data/openstreetmap.com: src/openstreetmap
data/openstreetmap.net: src/openstreetmap
data/openstreetmap.ca: src/openstreetmap
data/openstreetmap.eu: src/openstreetmap
data/openstreetmap.pro: src/openstreetmap
data/openstreetmaps.org: src/openstreetmap
data/osm.org: src/openstreetmap
data/openmaps.org: src/openstreetmap
data/openstreetmap.io: src/openstreetmap
data/osm.io: src/openstreetmap
data/openworldmap.org: src/openstreetmap
data/freeosm.org: src/openstreetmap
data/open-maps.org: src/openstreetmap
data/open-maps.com: src/openstreetmap
data/openstreetmap.org.uk: src/openstreetmap-uk
data/openstreetmap.co.uk: src/openstreetmap-uk
data/osmfoundation.org: src/osmfoundation
data/stateofthemap.org: src/stateofthemap
data/stateofthemap.com: src/stateofthemap
data/opengeodata.org: src/opengeodata
data/switch2osm.org: src/switch2osm
data/switch2osm.com: src/switch2osm
data/stateofthemap.eu: src/stateofthemap-eu

origins/tile.openstreetmap.yml: bin/mkcountries lib/countries.xml bandwidth/tile.openstreetmap.yml
	bin/mkcountries bandwidth/tile.openstreetmap.yml origins/tile.openstreetmap.yml

data/tile.openstreetmap.org json/tile.openstreetmap.org.json origins/render.openstreetmap.yml: bin/mkgeo origins/tile.openstreetmap.yml src/tile.openstreetmap
	bin/mkgeo origins/tile.openstreetmap.yml src/tile.openstreetmap tile.openstreetmap.org origins/render.openstreetmap.yml

data/render.openstreetmap.org json/render.openstreetmap.org.json: bin/mkgeo origins/render.openstreetmap.yml src/render.openstreetmap
	bin/mkgeo origins/render.openstreetmap.yml src/render.openstreetmap render.openstreetmap.org

data/%:
	sed -r -e 's/$(notdir $<)(:|$$)/$(notdir $@)\1/g' < $< > $@
