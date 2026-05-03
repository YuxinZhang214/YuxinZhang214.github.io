import Image from 'next/image';

interface KPI { 0: string; 1: string; }
interface Link { label: string; href: string; }
interface Section { heading: string; body: string; }
interface NavItem { title: string; href: string; }

interface ProjectCaseStudyProps {
  title: string;
  eyebrow: string;
  lead: string;
  imageUrl: string;
  technologies: string[];
  meta: { role: string; timeline: string; stack: string; links: Link[] };
  kpis: KPI[];
  sections: Section[];
  screens: string[];
  prev: NavItem | null;
  next: NavItem | null;
}

export default function ProjectCaseStudy({
  title, eyebrow, lead, imageUrl, technologies,
  meta, kpis, sections, screens, prev, next,
}: ProjectCaseStudyProps) {
  return (
    <>
      <section className="yz-detail-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/project" className="yz-mono" style={{ color: 'var(--fg-3)' }}>← Projects</a>
          <span className="yz-mono" style={{ color: 'var(--fg-3)' }}>/</span>
          <span className="yz-mono" style={{ color: 'var(--fg-2)' }}>{title}</span>
        </div>
        <div className="yz-eyebrow" style={{ marginTop: 16 }}>{eyebrow}</div>
        <h1 className="yz-h1" style={{ maxWidth: '18ch', marginTop: 12 }}>{title}</h1>
        <p className="yz-lead">{lead}</p>

        <div className="yz-detail-meta">
          <div className="yz-detail-meta-item">
            <div className="label">Role</div>
            <div className="value">{meta.role}</div>
          </div>
          <div className="yz-detail-meta-item">
            <div className="label">Timeline</div>
            <div className="value">{meta.timeline}</div>
          </div>
          <div className="yz-detail-meta-item">
            <div className="label">Stack</div>
            <div className="value">{meta.stack}</div>
          </div>
          <div className="yz-detail-meta-item">
            <div className="label">Links</div>
            <div className="value" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {meta.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ borderBottom: '1px solid var(--hair-strong)' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="yz-detail-cover">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} width={1280} height={720}
            style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
        ) : (
          <div className="yz-detail-cover-placeholder" />
        )}
      </div>

      <section className="yz-detail-body">
        <aside className="yz-aside">
          <div className="yz-aside-block">
            <div className="yz-detail-side-label">Impact</div>
            <div className="yz-aside-kpi">
              {kpis.map(([num, lbl]) => (
                <div key={lbl}>
                  <div className="yz-kpi-num">{num}</div>
                  <div className="yz-kpi-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="yz-aside-block">
            <div className="yz-detail-side-label">Tech stack</div>
            <div className="yz-proj-tags">
              {technologies.map((t) => (
                <span key={t} className="yz-tag">{t}</span>
              ))}
            </div>
          </div>
        </aside>

        <div>
          {sections.map((s) => (
            <div key={s.heading} className="yz-detail-section">
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}

          {screens.length > 0 && (
            <div className="yz-detail-section">
              <h3>Selected screens</h3>
              <div className="yz-screens-grid">
                {screens.map((src, i) => (
                  <Image key={i} src={src} alt={`Screen ${i + 1}`} width={600} height={450}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="yz-detail-nav">
        {prev ? (
          <a href={prev.href}>
            <span className="nav-label">← Previous</span>
            <span className="nav-title">{prev.title}</span>
          </a>
        ) : <div />}
        {next ? (
          <a href={next.href} style={{ alignItems: 'flex-end' }}>
            <span className="nav-label">Next →</span>
            <span className="nav-title">{next.title}</span>
          </a>
        ) : (
          <a href="/project" style={{ alignItems: 'flex-end' }}>
            <span className="nav-label">All projects →</span>
            <span className="nav-title">Index</span>
          </a>
        )}
      </div>
    </>
  );
}
