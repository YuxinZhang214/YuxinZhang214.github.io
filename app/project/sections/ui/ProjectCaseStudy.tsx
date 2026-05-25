'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

type KPI = [string, string];
interface Link { label: string; href: string; }
interface Section { heading: string; headingZh?: string; body: string; bodyZh?: string; }
interface NavItem { title: string; href: string; }

interface ProjectCaseStudyProps {
  title: string;
  eyebrow: string; eyebrowZh?: string;
  lead: string; leadZh?: string;
  imageUrl: string;
  technologies: string[];
  meta: { role: string; roleZh?: string; timeline: string; timelineZh?: string; stack: string; links: Link[] };
  kpis: KPI[]; kpisZh?: KPI[];
  sections: Section[];
  screens: string[];
  prev: NavItem | null;
  next: NavItem | null;
}

export default function ProjectCaseStudy({
  title, eyebrow, eyebrowZh, lead, leadZh, imageUrl, technologies,
  meta, kpis, kpisZh, sections, screens, prev, next,
}: ProjectCaseStudyProps) {
  const { t, lang } = useLanguage();
  const activeKpis = lang === 'zh' && kpisZh ? kpisZh : kpis;

  return (
    <>
      <section className="yz-detail-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/project" className="yz-mono" style={{ color: 'var(--fg-3)' }}>← {t('Projects', '项目')}</a>
          <span className="yz-mono" style={{ color: 'var(--fg-3)' }}>/</span>
          <span className="yz-mono" style={{ color: 'var(--fg-2)' }}>{title}</span>
        </div>
        <div className="yz-eyebrow" style={{ marginTop: 16 }}>{t(eyebrow, eyebrowZh)}</div>
        <h1 className="yz-h1" style={{ maxWidth: '18ch', marginTop: 12 }}>{title}</h1>
        <p className="yz-lead">{t(lead, leadZh)}</p>

        <div className="yz-detail-meta">
          <div className="yz-detail-meta-item">
            <div className="label">{t('Role', '职责')}</div>
            <div className="value">{t(meta.role, meta.roleZh)}</div>
          </div>
          <div className="yz-detail-meta-item">
            <div className="label">{t('Timeline', '时间线')}</div>
            <div className="value">{t(meta.timeline, meta.timelineZh)}</div>
          </div>
          <div className="yz-detail-meta-item">
            <div className="label">{t('Stack', '技术栈')}</div>
            <div className="value">{meta.stack}</div>
          </div>
          <div className="yz-detail-meta-item">
            <div className="label">{t('Links', '链接')}</div>
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
            <div className="yz-detail-side-label">{t('Impact', '项目影响')}</div>
            <div className="yz-aside-kpi">
              {activeKpis.map(([num, lbl]) => (
                <div key={lbl}>
                  <div className="yz-kpi-num">{num}</div>
                  <div className="yz-kpi-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="yz-aside-block">
            <div className="yz-detail-side-label">{t('Tech stack', '技术栈')}</div>
            <div className="yz-proj-tags">
              {technologies.map((tech) => (
                <span key={tech} className="yz-tag">{tech}</span>
              ))}
            </div>
          </div>
        </aside>

        <div>
          {sections.map((s) => (
            <div key={s.heading} className="yz-detail-section">
              <h3>{t(s.heading, s.headingZh)}</h3>
              <p>{t(s.body, s.bodyZh)}</p>
            </div>
          ))}

          {screens.length > 0 && (
            <div className="yz-detail-section">
              <h3>{t('Selected screens', '部分截图')}</h3>
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
            <span className="nav-label">← {t('Previous', '上一个')}</span>
            <span className="nav-title">{prev.title}</span>
          </a>
        ) : <div />}
        {next ? (
          <a href={next.href} style={{ alignItems: 'flex-end' }}>
            <span className="nav-label">{t('Next', '下一个')} →</span>
            <span className="nav-title">{next.title}</span>
          </a>
        ) : (
          <a href="/project" style={{ alignItems: 'flex-end' }}>
            <span className="nav-label">{t('All projects →', '所有项目 →')}</span>
            <span className="nav-title">{t('Index', '目录')}</span>
          </a>
        )}
      </div>
    </>
  );
}
