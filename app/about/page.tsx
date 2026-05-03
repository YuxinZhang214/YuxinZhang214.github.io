import Image from 'next/image';
import nowContent from '../content/now.json';
import educationContent from '../content/education.json';
import experienceContent from '../content/experience.json';
import servicesContent from '../content/services.json';
import skillsContent from '../content/skills.json';
import siteContent from '../content/site.json';
import homeContent from '../content/home.json';

export default function AboutMe() {
  const { hero } = homeContent;

  return (
    <>
      {/* Hero */}
      <section className="yz-about-hero">
        <div>
          <div className="yz-eyebrow">About</div>
          <h1 className="yz-display" style={{ fontSize: 'clamp(44px, 7vw, 96px)', marginTop: 16 }}>
            Hi, I&apos;m <span className="accent">Yuxin.</span>
          </h1>
          <p className="yz-lead" style={{ marginTop: 24 }}>
            I&apos;m {hero.intro.name}, {hero.intro.text}
          </p>
          <p className="yz-body" style={{ marginTop: 14, fontSize: 15, maxWidth: '60ch' }}>
            {hero.body}
          </p>
          <div className="yz-cta-actions" style={{ marginTop: 28, justifyContent: 'flex-start' }}>
            <a href={`mailto:${siteContent.email}`} className="yz-btn primary">Get in touch →</a>
          </div>
        </div>

        <div className="yz-portrait">
          {/* Replace with real portrait at public/images/portrait.jpg */}
          <div style={{ width: '100%', height: '100%', background: 'var(--bg-2)' }} />
        </div>
      </section>

      {/* Now */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">Now · {nowContent.updatedAt}</div>
            <h2 className="yz-section-title">Currently</h2>
          </div>
        </div>
        <div className="yz-now-grid">
          {nowContent.aboutCards.map((card) => (
            <div key={card.label} className="yz-now-card">
              <div className="label">{card.label}</div>
              <div className="body">
                {card.value}
                <span className="sub">{card.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">Education</div>
            <h2 className="yz-section-title">
              Where I&apos;ve studied
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
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>● Current</span>
                  )}
                </div>
                <div className="yz-tl-company">{edu.school}</div>
                <div className="yz-tl-role">{edu.degree}</div>
                <div className="yz-tl-recognition">{edu.recognition}</div>
              </div>
              <div>
                <p className="yz-tl-desc">{edu.desc}</p>
                <div className="yz-tl-tech">
                  {edu.tech.map((t) => (
                    <span key={t} className="yz-tag">{t}</span>
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
            <div className="yz-eyebrow">Experience</div>
            <h2 className="yz-section-title">
              Where I&apos;ve worked
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
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>● Most recent</span>
                  )}
                </div>
                <div className="yz-tl-company">{exp.company}</div>
                <div className="yz-tl-role">{exp.role}</div>
                <div className="yz-tl-recognition">{exp.recognition}</div>
              </div>
              <div>
                <p className="yz-tl-desc">{exp.desc}</p>
                <div className="yz-tl-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="yz-tag">{t}</span>
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
            <div className="yz-eyebrow">What I do</div>
            <h2 className="yz-section-title">
              Services
              <span className="yz-section-count">{String(servicesContent.services.length).padStart(2, '0')}</span>
            </h2>
          </div>
        </div>
        <div className="yz-services">
          {servicesContent.services.map((s) => (
            <div key={s.n} className="yz-service">
              <div className="num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">Toolbox</div>
            <h2 className="yz-section-title">Skills</h2>
          </div>
        </div>
        <div className="yz-skills-grid">
          {Object.entries(skillsContent.groups).map(([group, list]) => (
            <div key={group} className="yz-skill-group">
              <h4>
                {group} <span className="count">{list.length}</span>
              </h4>
              <div className="yz-skill-list">
                {list.map(([name, level]) => (
                  <div key={name} className="yz-skill-row">
                    <span>{name}</span>
                    <span className="level">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="yz-cta-strip">
        <div className="yz-eyebrow">Get in touch</div>
        <h2 className="yz-cta-title">
          Looking for a <span className="accent">Frontend Engineer?</span>
        </h2>
        <p className="yz-body" style={{ maxWidth: '44ch' }}>
          I&apos;m currently exploring full-time and contract opportunities in data-viz and platform engineering.
        </p>
        <div className="yz-cta-actions">
          <a href={`mailto:${siteContent.email}`} className="yz-btn primary">Get in touch →</a>
        </div>
      </section>
    </>
  );
}
