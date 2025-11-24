'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          Rental<span>Car</span>
        </Link>

        <nav className="nav">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
