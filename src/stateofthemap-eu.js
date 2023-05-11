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

  // Let OSMBE handle email (through Fastmail)
  // https://www.fastmail.help/hc/en-us/articles/1500000280261

  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  
  TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),
  CNAME("fm1._domainkey", "fm1.stateofthemap.eu.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.stateofthemap.eu.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.stateofthemap.eu.dkim.fmhosted.com."),

  // Site hosted on github pages

  ALIAS("@", "osmbe.github.io."),
  CNAME("www", "osmbe.github.io."),
  
  // Previous editions
  
  A("2014", "49.12.5.171")
  
);
