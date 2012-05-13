all: data/openstreetmap.org data/openstreetmap.com data/openstreetmap.net \
     data/openstreetmaps.org data/osm.org data/openmaps.org \
     data/osmfoundation.org data/stateofthemap.org data/stateofthemap.com \
     data/opengeodata.org \
     data/switch2osm.org data/switch2osm.com \
     data/tile.openstreetmap.org kml/tile.openstreetmap.org.kml

clean:
	rm lib/countries.xml data/*

lib/countries.xml:
	curl -s -o $@ http://api.geonames.org/countryInfo?username=demo

data/openstreetmap.org: src/openstreetmap
data/openstreetmap.com: src/openstreetmap
data/openstreetmap.net: src/openstreetmap
data/openstreetmaps.org: src/openstreetmap
data/osm.org: src/openstreetmap
data/openmaps.org: src/openstreetmap
data/osmfoundation.org: src/osmfoundation
data/stateofthemap.org: src/stateofthemap
data/stateofthemap.com: src/stateofthemap
data/opengeodata.org: src/opengeodata
data/switch2osm.org: src/switch2osm
data/switch2osm.com: src/switch2osm

data/tile.openstreetmap.org kml/tile.openstreetmap.org.kml: src/tile.openstreetmap bin/mkgeo lib/countries.xml
	bin/mkgeo tile.openstreetmap tile.openstreetmap.org

data/%:
	sed -e 's/$(notdir $<):/$(notdir $@):/g' < $< > $@
