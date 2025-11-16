export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vyom Voyage',
    alternateName: 'Vyom Voyage - TCET Space Club',
    url: 'https://vyomvoyage.tcet.ac.in',
    logo: 'https://vyomvoyage.tcet.ac.in/logo.png',
    description: 'Student SpaceTech Initiative at Thakur College of Engineering and Technology, Mumbai. Developing CubeSats and exploring the cosmos.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.instagram.com/vyomvoyage',
      'https://www.linkedin.com/company/vyomvoyage',
      'https://www.youtube.com/@vyomvoyage',
    ],
    memberOf: {
      '@type': 'EducationalOrganization',
      name: 'Thakur College of Engineering and Technology',
      url: 'https://www.tcet.ac.in',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vyom Voyage',
    url: 'https://vyomvoyage.tcet.ac.in',
    description: 'Exploring Innovation Beyond the Horizon – Student SpaceTech Initiative at TCET',
    publisher: {
      '@type': 'Organization',
      name: 'Vyom Voyage',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

