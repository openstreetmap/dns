FROM debian:stable

RUN apt-get update && apt-get install -y --no-install-recommends \
      make \
      libxml-treebuilder-perl \
      libyaml-libyaml-perl \
      libyaml-perl \
      libjson-xs-perl \
      jq \
      less \
      curl

RUN curl -fsSL https://github.com/StackExchange/dnscontrol/releases/download/v3.9.0/dnscontrol-Linux -o /usr/local/bin/dnscontrol \
    && chmod +x /usr/local/bin/dnscontrol \
    && /usr/local/bin/dnscontrol version

WORKDIR /dns
ADD . .
RUN make preview

VOLUME ["/dns/data"]
