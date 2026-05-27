'use client';

import Image from 'next/image';
import projectsContent from '../content/projects.json';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <section className="yz-section first" style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="yz-eyebrow">{t('Selected work · 2023 — present', '精选作品 · 2023 — 至今')}</div>
            <h1 className="yz-h1" style={{ marginTop: 14 }}>{t('Projects', '项目')}</h1>
            <p className="yz-lead" style={{ marginTop: 14 }}>
              {t(
                'End-to-end builds across data visualization, low-code platforms, and internal tools. Each entry has a deeper case study with role, stack, and impact.',
                '涵盖数据可视化、低代码平台和内部工具的端到端构建。每个项目均附有详细案例研究，包含职责、技术栈和影响。'
              )}
            </p>
          </div>
        </div>

        <div className="yz-proj-list">
          {projectsContent.projects.map((p) => {
            const stats = (lang === 'zh' ? p.statsZh : p.stats) as [string, string][];
            return (
              <article key={p.n} className="yz-proj-item">
                <div className="yz-proj-num">{p.n} / {String(projectsContent.projects.length).padStart(2, '0')}</div>

                <div className="yz-proj-info">
                  <div className="yz-proj-assoc">{p.association} · {p.year}</div>
                  <h2 className="yz-proj-title">{p.title}</h2>
                  <p className="yz-proj-desc">{t(p.description, p.descriptionZh)}</p>
                  <div className="yz-proj-tags">
                    {p.technologies.map((tech) => (
                      <span key={tech} className="yz-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="yz-proj-stats">
                    {stats.map(([num, label]) => (
                      <div key={label} className="yz-proj-stat">
                        <div className="num">{num}</div>
                        <div className="lbl">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="yz-proj-actions">
                    <a href={p.detailsPageUrl} className="yz-proj-action primary">{t('Read case study →', '查看案例 →')}</a>
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
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div className="yz-proj-media-placeholder">{p.title}</div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
