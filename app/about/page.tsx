'use client';

import Image from 'next/image';
import nowContent from '../content/now.json';
import educationContent from '../content/education.json';
import experienceContent from '../content/experience.json';
import servicesContent from '../content/services.json';
import siteContent from '../content/site.json';
import homeContent from '../content/home.json';
import { useLanguage } from '../context/LanguageContext';

const skillRows: { name: string; img: string | null }[][] = [
  [
    { name: 'React', img: '/skills/react.png' },
    { name: 'JavaScript', img: '/skills/javascript.png' },
    { name: 'CSS', img: '/skills/css.png' },
    { name: 'HTML', img: '/skills/html.png' },
    { name: 'D3.js', img: '/skills/d3.jpeg' },
    { name: 'Tailwind CSS', img: '/skills/tailwindcss.png' },
    { name: 'Next.js', img: null },
  ],
  [
    { name: 'Node.js', img: '/skills/nodejs.png' },
    { name: 'Express.js', img: '/skills/express.svg' },
    { name: 'Python', img: '/skills/python.jpeg' },
    { name: 'Plotly', img: '/skills/plotly.png' },
    { name: 'Django', img: '/skills/django.png' },
    { name: 'Flask', img: '/skills/flask.png' },
    { name: 'FastAPI', img: '/skills/fastapi.png' },
  ],
  [
    { name: 'MS SQL', img: '/skills/MS-SQL.png' },
    { name: 'SQLite', img: '/skills/sqlite.jpeg' },
    { name: 'GitHub', img: '/skills/github.png' },
    { name: 'GitLab', img: '/skills/gitlab.png' },
    { name: 'Linux', img: '/skills/linux.jpeg' },
    { name: 'macOS', img: '/skills/macos.png' },
  ],
];

export default function AboutMe() {
  const { t, lang } = useLanguage();
  const { hero } = homeContent;

  return (
    <>
      {/* Hero */}
      <section className="yz-about-hero">
        <div>
          <div className="yz-eyebrow">{t('About', '关于我')}</div>
          <h1 className="yz-display" style={{ fontSize: 'clamp(44px, 7vw, 96px)', marginTop: 16 }}>
            {t("Hi, I'm ", '你好，我是')}<span className="accent">{lang === 'zh' ? '张宇欣。' : 'Yuxin.'}</span>
          </h1>
          <p className="yz-lead" style={{ marginTop: 24 }}>
            {lang === 'zh'
              ? <>我是<strong style={{ color: 'var(--fg)' }}>{hero.intro.nameZh}</strong>，{hero.intro.textZh}</>
              : <>I&apos;m <strong style={{ color: 'var(--fg)' }}>{hero.intro.name}</strong>, {hero.intro.text}</>
            }
          </p>
          <p className="yz-body" style={{ marginTop: 14, fontSize: 15, maxWidth: '60ch' }}>
            {t(hero.body, hero.bodyZh)}
          </p>
          <div className="yz-cta-actions" style={{ marginTop: 28, justifyContent: 'flex-start' }}>
            <a href={`mailto:${siteContent.email}`} className="yz-btn primary">{t('Get in touch →', '联系我 →')}</a>
            <a href="#" className="yz-btn">{t('Download CV', '下载简历')}</a>
          </div>
        </div>

        <div className="yz-portrait">
          <div style={{ width: '100%', height: '100%', background: 'var(--bg-2)' }} />
        </div>
      </section>

      {/* Now */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">{t('Now', '近况')} · {nowContent.updatedAt}</div>
            <h2 className="yz-section-title">{t('Currently', '目前状态')}</h2>
          </div>
        </div>
        <div className="yz-now-grid">
          {nowContent.aboutCards.map((card) => (
            <div key={card.label} className="yz-now-card">
              <div className="label">{t(card.label, card.labelZh)}</div>
              <div className="body">
                {t(card.value, card.valueZh)}
                <span className="sub">{t(card.sub, card.subZh)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">{t('Education', '教育经历')}</div>
            <h2 className="yz-section-title">
              {t("Where I've studied", '求学经历')}
              <span className="yz-section-count">{String(educationContent.education.length).padStart(2, '0')}</span>
            </h2>
          </div>
        </div>
        <div className="yz-timeline">
          {educationContent.education.map((edu, i) => (
            <div key={i} className={`yz-tl-item${edu.current ? ' current' : ''}`}>
              <div>
                <div className="yz-tl-period">
                  {edu.period}
                  {edu.current && (
                    <span className="yz-tl-current-marker">● {t('Current', '在读')}</span>
                  )}
                </div>
                <div className="yz-tl-company">{edu.school}</div>
                <div className="yz-tl-role">{t(edu.degree, edu.degreeZh)}</div>
                <div className="yz-tl-recognition">{t(edu.recognition, edu.recognitionZh)}</div>
              </div>
              <div>
                <p className="yz-tl-desc">{t(edu.desc, edu.descZh)}</p>
                <div className="yz-tl-tech">
                  {edu.tech.map((tech) => (
                    <span key={tech} className="yz-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">{t('Experience', '工作经历')}</div>
            <h2 className="yz-section-title">
              {t("Where I've worked", '工作经历')}
              <span className="yz-section-count">{String(experienceContent.experiences.length).padStart(2, '0')}</span>
            </h2>
          </div>
        </div>
        <div className="yz-timeline">
          {experienceContent.experiences.map((exp, i) => (
            <div key={i} className={`yz-tl-item${exp.current ? ' current' : ''}`}>
              <div>
                <div className="yz-tl-period">
                  {exp.period}
                  {exp.current && (
                    <span className="yz-tl-current-marker">● {t('Most recent', '最近')}</span>
                  )}
                </div>
                <div className="yz-tl-company">{exp.company}</div>
                <div className="yz-tl-role">{t(exp.role, exp.roleZh)}</div>
                <div className="yz-tl-recognition">{t(exp.recognition, exp.recognitionZh)}</div>
              </div>
              <div>
                <p className="yz-tl-desc">{t(exp.desc, exp.descZh)}</p>
                <div className="yz-tl-tech">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="yz-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">{t('What I do', '我的服务')}</div>
            <h2 className="yz-section-title">
              {t('Services', '服务')}
              <span className="yz-section-count">{String(servicesContent.services.length).padStart(2, '0')}</span>
            </h2>
          </div>
        </div>
        <div className="yz-services">
          {servicesContent.services.map((s) => (
            <div key={s.n} className="yz-service">
              <div className="num">{s.n}</div>
              <h4>{t(s.title, s.titleZh)}</h4>
              <p>{t(s.description, s.descriptionZh)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills logo wall */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">{t('Toolbox', '技术栈')}</div>
            <h2 className="yz-section-title">{t('My Skills', '技能')}</h2>
          </div>
        </div>
        <div className="yz-skills-wall">
          {skillRows.map((row, rowIdx) => (
            <div key={rowIdx} className="yz-skills-row">
              {row.map((skill) => (
                <div key={skill.name} className="yz-skill-icon">
                  <div className="icon">
                    {skill.img ? (
                      <Image
                        src={skill.img}
                        alt={skill.name}
                        width={36}
                        height={36}
                        style={{ objectFit: 'contain' }}
                      />
                    ) : (
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: 'var(--fg)', letterSpacing: '-0.01em' }}>
                        {skill.name.slice(0, 4)}
                      </span>
                    )}
                  </div>
                  <div className="name">{skill.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="yz-cta-strip">
        <div className="yz-cta-socials">
          <a className="yz-cta-social" href={siteContent.social.find(s => s.platform === 'github')?.href ?? '#'} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.74.12 3.03.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/></svg>
          </a>
          <a className="yz-cta-social" href={siteContent.social.find(s => s.platform === 'linkedin')?.href ?? '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z"/></svg>
          </a>
        </div>
        <h2 className="yz-cta-title">
          {t('Looking for a ', '寻找')}<span className="accent">{t('Software Engineer?', '软件工程师？')}</span>
        </h2>
        <p className="yz-body" style={{ maxWidth: '46ch' }}>
          {t(
            "I'm currently exploring full-time and contract opportunities across AI/ML, data-viz, and platform engineering.",
            '我正在寻找 AI/ML、数据可视化和平台工程领域的全职及合同机会。'
          )}
        </p>
        <div className="yz-cta-actions">
          <a href={`mailto:${siteContent.email}`} className="yz-btn primary">{t('Get in Touch', '联系我')}</a>
          <a href="#" className="yz-btn">{t('Download CV', '下载简历')}</a>
        </div>
      </section>
    </>
  );
}
