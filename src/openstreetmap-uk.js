D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // Publish CAA records indicating that only letsencrypt should issue certificates

  CAA_BUILDER({
    label: "@",
    iodef: "mailto:hostmaster@openstreetmap.org",
    issue: [
      "letsencrypt.org",
    ],
    issuewild: [
      "letsencrypt.org",
    ],
  }),

  // Let the main domain handle the email

  MX("@", 10, "a.mx.openstreetmap.org."),

  // Delegate SPF policy to the main domain

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",      // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Delegate MTA-STS policy to the main domain

  CNAME("_mta-sts", "_mta-sts.openstreetmap.org."),

  // Main web site

  ALIAS("@", "www.openstreetmap.org."),
  CNAME("www", "www.openstreetmap.org."),
  CNAME("api", "api.openstreetmap.org."),

  // Shaun McDonald's taginfo instance

  CNAME("taginfo", "proxy.mythic-beasts.com."),

  // Aerial imagery sites

  osm_web_service("hampshire.aerial", "lockheed"),
  osm_web_service("a.hampshire.aerial", "lockheed"),
  osm_web_service("b.hampshire.aerial", "lockheed"),
  osm_web_service("c.hampshire.aerial", "lockheed"),

  osm_web_service("surrey.aerial", "lockheed"),
  osm_web_service("a.surrey.aerial", "lockheed"),
  osm_web_service("b.surrey.aerial", "lockheed"),
  osm_web_service("c.surrey.aerial", "lockheed"),

  osm_web_service("os", "lockheed"),
  osm_web_service("a.os", "lockheed"),
  osm_web_service("b.os", "lockheed"),
  osm_web_service("c.os", "lockheed"),

  osm_web_service("ea", "lockheed"),
  osm_web_service("a.ea", "lockheed"),
  osm_web_service("b.ea", "lockheed"),
  osm_web_service("c.ea", "lockheed"),

);
