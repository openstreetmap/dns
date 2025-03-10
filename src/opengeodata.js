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

  // Delegate SPF policy to the main domain

  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:openstreetmap.org",      // main openstreetmap.org spf record
      "-all"
    ]
  }),

  // Main web server and it's aliases

  osm_web_service("@", "ridley"),
  osm_web_service("old", "ridley"), // Legacy URL support https://blog.openstreetmap.org/2010/02/25/old-opengeodata-posts-now-up-at-old-opengeodata-org/
  osm_web_service("www", "ridley"),

);
