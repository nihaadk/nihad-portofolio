'use client';

import { ReactElement } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { LINKS } from '@/utils/nav.util';
import Link from 'next/link';

const MobileNav = (): ReactElement => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>

        <div className="mt-32 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/" aria-label="Home page">
              <h1 className="text-4xl font-semibold">
                Nihad <span className="text-accent">#</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {LINKS.map((link, index) => (
            <SheetClose key={index} asChild>
              <Link
                aria-label={link.name}
                href={link.path}
                className={`${
                  link.path === pathname && 'text-accent border-b-2 border-accent'
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
