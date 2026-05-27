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

        <div className="yz-hero-row">
          <h1 className="yz-display">
            Software<br />
            <span style={{ whiteSpace: 'nowrap' }}>
              <span className="accent">Engineer</span>
              <span style={{
                color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.18em',
                verticalAlign: 'super',
                fontWeight: 400,
                marginLeft: 36,
                letterSpacing: '0.05em',
              }}>/ AI · ML</span>
            </span>
          </h1>

          <div className="yz-hero-bio">
            <p className="yz-lead">
              {lang === 'zh'
                ? <>我是<strong style={{ color: 'var(--fg)' }}>{hero.intro.nameZh}</strong>，{hero.intro.textZh}</>
                : <>I&apos;m <strong style={{ color: 'var(--fg)' }}>{hero.intro.name}</strong>, {hero.intro.text}</>
              }
            </p>
            {(t(hero.body, hero.bodyZh)) && <p className="yz-body" style={{ fontSize: 15 }}>{t(hero.body, hero.bodyZh)}</p>}
          </div>
        </div>

        <div style={{ height: 32 }} />

        <div className="yz-hero-meta">
          <div className="yz-hero-meta-item">
            <div className="label">{t('Based in', '所在地')}</div>
            <div className="value">{t('Beijing, CN', '北京，中国')}</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">{t('Focus', '专注方向')}</div>
            <div className="value">{t('AI/ML · Machine Learning', 'AI/ML · 机器学习')}</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">{t('Currently', '目前就职')}</div>
            <div className="value">{t('Tsingroc AI', '清鹏 AI')}</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">{t('Status', '状态')}</div>
            <div className="value" style={{ color: 'var(--fg-3)' }}>● {t('Not available', '暂不开放')}</div>
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
    </>
  );
}
