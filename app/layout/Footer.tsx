import site from '../content/site.json';

export default function Footer() {
  return (
    <footer className="yz-footer">
      <div className="yz-footer-rule" style={{ marginLeft: 'var(--pad-x)', marginRight: 'var(--pad-x)' }} />
      <div className="yz-footer-inner">
        <div className="yz-footer-col">
          <div className="yz-footer-name">{site.name} Zhang</div>
          <div className="yz-footer-meta">Software Engineer · AI/ML · Based in China</div>
        </div>

        <div className="yz-footer-col">
          <div className="yz-footer-label">Site</div>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="yz-footer-link">
              {item.text}
            </a>
          ))}
        </div>

        <div className="yz-footer-col">
          <div className="yz-footer-label">Elsewhere</div>
          {site.social.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="yz-footer-link"
            >
              {s.platform === 'github' ? 'GitHub' : 'LinkedIn'} ↗
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="yz-footer-link">Email ↗</a>
        </div>
      </div>

      <div className="yz-footer-bottom">
        <span>{site.copyright}</span>
        <span>Built with Next.js · Hosted on GitHub Pages</span>
      </div>
    </footer>
  );
}
