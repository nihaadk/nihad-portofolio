'use client';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }): ReactElement => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
