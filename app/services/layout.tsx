import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development, UI/UX design, software architecture and graphic design services by Nihad Kerić, Frontend Engineer in Zurich.',
  alternates: { canonical: '/services' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
