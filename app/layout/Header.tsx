'use client';

import { usePathname } from 'next/navigation';
import site from '../content/site.json';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const activeId = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const navLabels: Record<string, string> = {
    '/':       lang === 'zh' ? '主页'   : 'Home',
    '/project': lang === 'zh' ? '项目'   : 'Project',
    '/blog':   lang === 'zh' ? '博客'   : 'Blog',
    '/about':  lang === 'zh' ? '关于我' : 'About me',
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
              {navLabels[item.href] ?? item.text}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            style={{
              padding: '8px 16px',
              border: '1.5px solid var(--fg)',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              background: 'transparent',
              color: 'var(--fg)',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--fg)'; (e.target as HTMLElement).style.color = 'var(--bg)'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--fg)'; }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>

          <a href={`mailto:${site.email}`} className="yz-contact">
            <span>{lang === 'zh' ? '联系我' : 'Contact'}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div className="yz-header-rule" />
    </header>
  );
}
