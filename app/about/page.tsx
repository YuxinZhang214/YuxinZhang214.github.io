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
            {t("Hi, I'm ", '你好，我是')}<span className="accent">{lang === 'zh' ? '张钰欣。' : 'Yuxin.'}</span>
          </h1>
          <p className="yz-lead" style={{ marginTop: 24 }}>
            {lang === 'zh'
              ? <>我是<strong style={{ color: 'var(--fg)' }}>{hero.intro.nameZh}</strong>，{hero.intro.textZh}</>
              : <>I&apos;m <strong style={{ color: 'var(--fg)' }}>{hero.intro.name}</strong>, {hero.intro.text}</>
            }
          </p>
          {t(hero.body, hero.bodyZh) && <p className="yz-body" style={{ marginTop: 14, fontSize: 15, maxWidth: '60ch' }}>{t(hero.body, hero.bodyZh)}</p>}
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
            <div key={i} className="yz-tl-item">
              <div>
                <div className="yz-tl-period">
                  {edu.period}
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

    </>
  );
}
