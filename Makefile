all: data/openstreetmap.org data/openstreetmap.com data/openstreetmap.net \
     data/openstreetmaps.org data/osm.org data/openmaps.org \
     data/openworldmap.org data/freeosm.org data/open-maps.org data/open-maps.com \
     data/osmfoundation.org data/stateofthemap.org data/stateofthemap.com \
     data/stateofthemap.eu \
     data/opengeodata.org \
     data/switch2osm.org data/switch2osm.com \
     data/tile.openstreetmap.org

clean:
	rm lib/countries.xml data/*

update: all
	bin/update

lib/countries.xml:
	curl -s -o $@ http://api.geonames.org/countryInfo?username=demo

data/openstreetmap.org: src/openstreetmap
data/openstreetmap.com: src/openstreetmap
data/openstreetmap.net: src/openstreetmap
data/openstreetmaps.org: src/openstreetmap
data/osm.org: src/openstreetmap
data/openmaps.org: src/openstreetmap
data/openworldmap.org: src/openstreetmap
data/freeosm.org: src/openstreetmap
data/open-maps.org: src/openstreetmap
data/open-maps.com: src/openstreetmap
data/osmfoundation.org: src/osmfoundation
data/stateofthemap.org: src/stateofthemap
data/stateofthemap.com: src/stateofthemap
data/opengeodata.org: src/opengeodata
data/switch2osm.org: src/switch2osm
data/switch2osm.com: src/switch2osm
data/stateofthemap.eu: src/stateofthemap-eu

data/tile.openstreetmap.org json/tile.openstreetmap.org.json: src/tile.openstreetmap bandwidth/tile.openstreetmap.yml bin/mkgeo lib/countries.xml
	bin/mkgeo tile.openstreetmap tile.openstreetmap.org

data/%:
	sed -e 's/$(notdir $<):/$(notdir $@):/g' < $< > $@
