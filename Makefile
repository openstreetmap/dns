all: data/openstreetmap.org data/openstreetmap.com data/openstreetmap.net \
     data/openstreetmaps.org data/osm.org \
     data/osmfoundation.org data/stateofthemap.org data/stateofthemap.com

clean:
	rm data/*

data/openstreetmap.org: src/openstreetmap
data/openstreetmap.com: src/openstreetmap
data/openstreetmap.net: src/openstreetmap
data/openstreetmaps.org: src/openstreetmap
data/osm.org: src/openstreetmap
data/osmfoundation.org: src/osmfoundation
data/stateofthemap.org: src/stateofthemap
data/stateofthemap.com: src/stateofthemap

data/%:
	sed -e 's/$(notdir $<)/$(notdir $@)/g' < $< > $@
