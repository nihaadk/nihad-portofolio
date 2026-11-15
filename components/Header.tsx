import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { CONTACT_EMAIL } from '@/lib/site';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 test-white ">
      <div className="container max-auto flex justify-between items-center">
        <Link href="/" aria-label="Home page">
          <span className="block text-4xl font-semibold">
            Nihad <span className="text-accent">#</span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Button asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>Hire me</a>
          </Button>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
