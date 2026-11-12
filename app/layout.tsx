import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_PROFILES } from '@/lib/site';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  keywords: [
    'Nihad Kerić',
    'Frontend Engineer Zurich',
    'Senior Frontend Developer Switzerland',
    'Angular',
    'NgRx',
    'TypeScript',
    'React',
    'Next.js',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_CH',
    firstName: 'Nihad',
    lastName: 'Kerić',
  },
  twitter: { card: 'summary_large_image', title: SITE_TITLE, description: SITE_DESCRIPTION },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: SITE_URL,
      mainEntity: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      givenName: 'Nihad',
      familyName: 'Kerić',
      url: SITE_URL,
      image: `${SITE_URL}/assets/me.webp`,
      email: 'mailto:nihadkeric@gmail.com',
      jobTitle: 'Senior Frontend Software Engineer',
      description: SITE_DESCRIPTION,
      nationality: { '@type': 'Country', name: 'Slovenia' },
      homeLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: 'Zurich', addressCountry: 'CH' },
      },
      worksFor: { '@type': 'Organization', name: 'Zurich Insurance' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Ljubljana' },
      knowsLanguage: ['Bosnian', 'Slovenian', 'English', 'German'],
      knowsAbout: [
        'Frontend Development',
        'Angular',
        'NgRx',
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Ionic',
        'NestJS',
        'Tailwind CSS',
        'UI/UX Design',
        'Software Architecture',
      ],
      sameAs: SOCIAL_PROFILES,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
