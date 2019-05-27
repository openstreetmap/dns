FROM debian:stable

RUN apt-get update && apt-get install -y --no-install-recommends \
      make \
      libxml-treebuilder-perl \
      libyaml-perl \
      libjson-xs-perl \
      jq \
      less

WORKDIR /dns
ADD . .
RUN make

VOLUME ["/dns/data"]
