'use client';

import Image from 'next/image';
import homeContent from './content/home.json';
import nowContent from './content/now.json';
import projectsContent from './content/projects.json';
import blogContent from './content/blog.json';
import siteContent from './content/site.json';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();
  const { hero } = homeContent;
  const featuredPost = blogContent.posts.find((p) => p.featured) ?? blogContent.posts[0];
  const recentPosts = blogContent.posts.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="yz-hero">
        <div className="yz-hero-availability">
          <span className="dot" />
          <span>{t('Available for new opportunities · Q3 2026', '接受新机会 · 2026年Q3')}</span>
        </div>

        <div className="yz-hero-row">
          <h1 className="yz-display">
            Software<br />
            <span className="accent">Engineer</span>
            <span style={{
              color: 'var(--fg-3)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.18em',
              verticalAlign: 'super',
              fontWeight: 400,
              marginLeft: 16,
              letterSpacing: '0.05em',
            }}>/ AI · ML</span>
          </h1>

          <div className="yz-hero-bio">
            <p className="yz-lead">
              {lang === 'zh'
                ? <>我是<strong style={{ color: 'var(--fg)' }}>{hero.intro.nameZh}</strong>，{hero.intro.textZh}</>
                : <>I&apos;m <strong style={{ color: 'var(--fg)' }}>{hero.intro.name}</strong>, {hero.intro.text}</>
              }
            </p>
            <p className="yz-body" style={{ fontSize: 15 }}>{t(hero.body, hero.bodyZh)}</p>
          </div>
        </div>

        <div className="yz-hero-meta">
          <div className="yz-hero-meta-item">
            <div className="label">{t('Based in', '所在地')}</div>
            <div className="value">{t('Shanghai, CN', '上海，中国')}</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">{t('Focus', '专注方向')}</div>
            <div className="value">{t('AI/ML · Data-viz · Full-stack', 'AI/ML · 数据可视化 · 全栈')}</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">{t('Currently', '目前就职')}</div>
            <div className="value">{t('Saint-Gobain Research', '圣戈班研究中心')}</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">{t('Status', '状态')}</div>
            <div className="value" style={{ color: 'oklch(50% 0.15 145)' }}>● {t('Open to roles', '开放机会')}</div>
          </div>
        </div>
      </section>

      {/* Now strip */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">{t('Now', '近况')}</div>
            <h2 className="yz-section-title">{t("What I'm working on", '正在做的事')}</h2>
          </div>
          <a href="/about" className="yz-section-action">{t('More on About →', '关于我 →')}</a>
        </div>
        <div className="yz-now">
          {nowContent.homeItems.map((item) => (
            <div key={item.label} className="yz-now-item">
              <div className="yz-now-label">{t(item.label, item.labelZh)}</div>
              <div className="yz-now-value">
                {t(item.value, item.valueZh)}
                {item.sub && <span className="sub">{t(item.sub, item.subZh)}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digest: projects + posts */}
      <section className="yz-section">
        <div className="yz-digest">
          {/* Projects column */}
          <div className="yz-digest-col">
            <div className="yz-section-head">
              <div className="yz-section-head-left">
                <div className="yz-eyebrow">{t('Selected work', '精选作品')}</div>
                <h2 className="yz-section-title">
                  {t('Projects', '项目')}
                  <span className="yz-section-count">{String(projectsContent.projects.length).padStart(2, '0')}</span>
                </h2>
              </div>
              <a href="/project" className="yz-section-action">{t('See all →', '查看全部 →')}</a>
            </div>

            {projectsContent.projects.map((project) => (
              <a key={project.title} href={project.detailsPageUrl} className="yz-feature-card">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="yz-feature-img"
                  />
                ) : (
                  <div className="yz-feature-img-placeholder" />
                )}
                <div className="yz-feature-meta">
                  <span className="yz-mono">{project.association}</span>
                  <span className="yz-mono">·</span>
                  <span className="yz-mono">{project.year}</span>
                </div>
                <div className="yz-feature-title">{project.title}</div>
                <p className="yz-body" style={{ fontSize: 14.5, margin: 0 }}>
                  {t(project.description, project.descriptionZh)}
                </p>
                <div className="yz-proj-tags">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="yz-tag">{tech}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Posts column */}
          <div className="yz-digest-col">
            <div className="yz-section-head">
              <div className="yz-section-head-left">
                <div className="yz-eyebrow">{t('Writing', '写作')}</div>
                <h2 className="yz-section-title">{t('Recent posts', '最新文章')}</h2>
              </div>
              <a href="/blog" className="yz-section-action">{t('See all →', '查看全部 →')}</a>
            </div>

            {recentPosts.map((post, i) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="yz-post-row">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="title">{t(post.title, post.titleZh)}</span>
                <span className="meta">{post.date.split(',')[0]} · {post.readingTime}</span>
              </a>
            ))}
          </div>
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
          <a href="/about" className="yz-btn">{t('Download CV', '下载简历')}</a>
        </div>
      </section>
    </>
  );
}
