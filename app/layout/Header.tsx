'use client';

import { usePathname } from 'next/navigation';
import site from '../content/site.json';

export default function Header() {
  const pathname = usePathname();

  const activeId = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="yz-header">
      <div className="yz-header-inner">
        <a href="/" className="yz-logo">
          <span>{site.name}</span>
          <span className="yz-logo-dot" />
        </a>

        <nav className="yz-nav">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`yz-nav-link${activeId(item.href) ? ' is-active' : ''}`}
            >
              {item.text}
            </a>
          ))}
        </nav>

        <a href={`mailto:${site.email}`} className="yz-contact">
          <span>Contact</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="yz-header-rule" />
    </header>
  );
}
