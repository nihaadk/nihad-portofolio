import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Nihad Kerić: HMI Dashboard for Hapa, Drittmeldung.ch, Fine Calculator and this portfolio, built with Angular and Next.js.',
  alternates: { canonical: '/work' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
