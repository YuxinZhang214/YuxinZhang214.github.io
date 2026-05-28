'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import site from '../content/site.json';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeId = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const navLabels: Record<string, string> = {
    '/':        lang === 'zh' ? '主页'   : 'Home',
    '/project': lang === 'zh' ? '项目'   : 'Project',
    '/blog':    lang === 'zh' ? '博客'   : 'Blog',
    '/about':   lang === 'zh' ? '关于我' : 'About me',
  };

  return (
    <header className="yz-header">
      <div className="yz-header-inner">
        <a href="/" className="yz-logo">
          <span>{site.name}</span>
          <span className="yz-logo-dot" />
        </a>

        <nav className={`yz-nav${menuOpen ? ' is-open' : ''}`}>
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`yz-nav-link${activeId(item.href) ? ' is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {navLabels[item.href] ?? item.text}
            </a>
          ))}
        </nav>

        <div className="yz-header-actions">
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="yz-lang-toggle"
            aria-label="Toggle language"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {lang === 'en' ? '中文' : 'EN'}
          </button>

          <a href={`mailto:${site.email}`} className="yz-contact">
            <span>{lang === 'zh' ? '联系我' : 'Contact'}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button
            className="yz-menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="yz-header-rule" />
    </header>
  );
}
