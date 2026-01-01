export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vyom Voyage',
    alternateName: 'Vyom Voyage - TCET Space Club',
    url: 'https://vyomvoyage.tcet.ac.in',
    logo: 'https://vyomvoyage.tcet.ac.in/logo.png',
    image: 'https://vyomvoyage.tcet.ac.in/og-image.jpg',
    description: 'Student SpaceTech Initiative at Thakur College of Engineering and Technology, Mumbai. Developing CubeSats, conducting space research, and exploring the cosmos through innovation and collaboration.',
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Thakur Village, Kandivali East',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400101',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@vyomvoyage.tcet.ac.in',
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.instagram.com/vyomvoyage',
      'https://www.linkedin.com/company/vyom-voyage',
      'https://www.youtube.com/@vyomvoyage',
    ],
    memberOf: {
      '@type': 'EducationalOrganization',
      name: 'Thakur College of Engineering and Technology',
      url: 'https://www.tcet.ac.in',
    },
    knowsAbout: [
      'CubeSat Development',
      'CanSat',
      'Space Technology',
      'Satellite Systems',
      'Embedded Systems',
      'Space Research',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vyom Voyage',
    url: 'https://vyomvoyage.tcet.ac.in',
    description: 'Exploring Innovation Beyond the Horizon – Student SpaceTech Initiative at TCET Mumbai',
    publisher: {
      '@type': 'Organization',
      name: 'Vyom Voyage',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vyomvoyage.tcet.ac.in/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vyomvoyage.tcet.ac.in/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const educationalOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Vyom Voyage',
    description: 'A student-led space technology club focused on CubeSat development, space research, and fostering innovation in aerospace engineering.',
    url: 'https://vyomvoyage.tcet.ac.in',
    sameAs: [
      'https://www.instagram.com/vyomvoyage',
      'https://www.linkedin.com/company/vyom-voyage',
    ],
    parentOrganization: {
      '@type': 'CollegeOrUniversity',
      name: 'Thakur College of Engineering and Technology',
      url: 'https://www.tcet.ac.in',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vyomvoyage.tcet.ac.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://vyomvoyage.tcet.ac.in/#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: 'https://vyomvoyage.tcet.ac.in/#projects',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Team',
        item: 'https://vyomvoyage.tcet.ac.in/#team',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://vyomvoyage.tcet.ac.in/#contact',
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

