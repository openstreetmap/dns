D(DOMAIN, REGISTRAR, DnsProvider(PROVIDER),

  // https://kb.mailbox.org/service-desk/account-article/how-to-set-up-my-domain-name
  MX("@", 10, "mxext1.mailbox.org."),
  MX("@", 10, "mxext2.mailbox.org."),
  MX("@", 20, "mxext3.mailbox.org."),

  // https://kb.mailbox.org/en/private/custom-domains/spf-dkim-and-dmarc-how-to-improve-spam-reputation-and-avoid-bounces
  SPF_BUILDER({
    label: "@",
    parts: [
      "v=spf1",
      "include:mailbox.org",
      "~all"
    ]
  }),

  // https://kb.mailbox.org/en/private/custom-domains/spf-dkim-and-dmarc-how-to-improve-spam-reputation-and-avoid-bounces
  CNAME("MBO0001._domainkey", "MBO0001._domainkey.mailbox.org."),
  CNAME("MBO0002._domainkey", "MBO0002._domainkey.mailbox.org."),
  CNAME("MBO0003._domainkey", "MBO0003._domainkey.mailbox.org."),
  CNAME("MBO0004._domainkey", "MBO0004._domainkey.mailbox.org."),

  // https://kb.mailbox.org/en/private/custom-domains/how-to-configure-e-mail-clients-automatically-through-dns
  CNAME("autoconfig", "mailbox.org."),
  SRV("_autodiscover._tcp", 0, 0, 443, "mailbox.org."),

  // Publish DMARC report-only policy
  DMARC_BUILDER({
    policy: "none",
    rua: [
      "mailto:openstreetmap-d@dmarc.report-uri.com"
    ],
    failureOptions: 1
  }),

  // https://kb.mailbox.org/en/private/custom-domains/how-to-specify-a-key-server-in-the-srv-record
  SRV("_hkps._tcp", 1, 1, 443, "pgp.mailbox.org."),


  // mailbox.org validation
  TXT("d00f46a3fde45d06c53f3cd5b21f213ea384e7f5", "6d4584a5987b1d97e691d9664107c604e53e083e")

);