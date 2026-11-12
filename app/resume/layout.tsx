import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Experience, education and skills of Nihad Kerić: Senior Frontend Engineer at Zurich Insurance, previously Emineo AG and Hapa AG. Angular, NgRx, TypeScript, React, Next.js.',
  alternates: { canonical: '/resume' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
