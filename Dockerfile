FROM debian:stable

RUN apt-get update && apt-get install -y --no-install-recommends \
      make \
      libxml-treebuilder-perl \
      libyaml-libyaml-perl \
      libyaml-perl \
      libjson-xs-perl \
      jq \
      less \
      curl \
      ca-certificates

RUN curl -fsSL https://github.com/StackExchange/dnscontrol/releases/download/v3.20.0/dnscontrol_3.20.0_amd64.deb -o /tmp/dnscontrol.deb \
    && apt install /tmp/dnscontrol.deb -y

WORKDIR /dns
ADD . .
RUN make preview

VOLUME ["/dns/data"]
