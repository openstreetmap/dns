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

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN arch=$(arch | sed s/aarch64/arm64/ | sed s/x86_64/amd64/) \
    && curl -fsSL https://github.com/StackExchange/dnscontrol/releases/download/v4.1.0/dnscontrol-4.1.0.${arch}.deb -o /tmp/dnscontrol.deb \
    && apt install /tmp/dnscontrol.deb -y

WORKDIR /dns
ADD . .

VOLUME ["/dns/data"]

CMD ["make", "check"]
