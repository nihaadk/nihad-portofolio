import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development, UI/UX & product design, software architecture & integrations, and AI agents & automation by Nihad Kerić, Software Engineer in Zurich.',
  alternates: { canonical: '/services' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
