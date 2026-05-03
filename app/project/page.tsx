import Image from 'next/image';
import projectsContent from '../content/projects.json';

export default function ProjectsPage() {
  return (
    <>
      <section className="yz-section first" style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="yz-eyebrow">Selected work · 2023 — present</div>
            <h1 className="yz-h1" style={{ marginTop: 14 }}>Projects</h1>
            <p className="yz-lead" style={{ marginTop: 14 }}>
              End-to-end builds across data visualization, low-code platforms, and internal tools. Each entry has a deeper case study with role, stack, and impact.
            </p>
          </div>
        </div>

        <div className="yz-proj-list">
          {projectsContent.projects.map((p) => (
            <article key={p.n} className="yz-proj-item">
              <div className="yz-proj-num">{p.n} / {String(projectsContent.projects.length).padStart(2, '0')}</div>

              <div className="yz-proj-info">
                <div className="yz-proj-assoc">{p.association} · {p.year}</div>
                <h2 className="yz-proj-title">{p.title}</h2>
                <p className="yz-proj-desc">{p.description}</p>
                <div className="yz-proj-tags">
                  {p.technologies.map((t) => (
                    <span key={t} className="yz-tag">{t}</span>
                  ))}
                </div>
                <div className="yz-proj-stats">
                  {p.stats.map(([num, label]) => (
                    <div key={label} className="yz-proj-stat">
                      <div className="num">{num}</div>
                      <div className="lbl">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="yz-proj-actions">
                  <a href={p.detailsPageUrl} className="yz-proj-action primary">Read case study →</a>
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="yz-proj-action">Live demo ↗</a>}
                  {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="yz-proj-action">GitHub ↗</a>}
                </div>
              </div>

              <div className="yz-proj-media">
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius)' }}
                  />
                ) : (
                  <div className="yz-proj-media-placeholder">{p.title}</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
