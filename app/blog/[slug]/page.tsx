'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';
import blogContent from '../../content/blog.json';
import { useLanguage } from '../../context/LanguageContext';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage();
  const [currentSection, setCurrentSection] = useState(0);

  const post = blogContent.posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <div className="yz-post-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <a href="/blog" className="yz-back-link">← {t('Blog', '博客')}</a>
          <span className="yz-mono" style={{ color: 'var(--fg-3)' }}>/</span>
          <span className="yz-mono" style={{ color: 'var(--fg-2)' }}>{post.tags[0]}</span>
        </div>
        <div className="yz-eyebrow">{post.tags.join(' · ')}</div>
        <h1>{t(post.title, post.titleZh)}</h1>
        <div className="yz-post-meta">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime} {t('read', '分钟')}</span>
          <span>·</span>
          <span>{t('Yuxin Zhang', '张钰欣')}</span>
        </div>
      </div>

      {/* 3-column body */}
      <div className="yz-post-body-wrap">
        {/* TOC */}
        <aside className="yz-toc">
          <div className="yz-toc-label">{t('On this page', '本页目录')}</div>
          <ol>
            {post.sections.map((section, i) => (
              <li
                key={section.heading}
                className={currentSection === i ? 'is-current' : ''}
                onClick={() => setCurrentSection(i)}
              >
                {t(section.heading, section.headingZh)}
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 28 }}>
            <div className="yz-toc-label">{t('Share', '分享')}</div>
            <div className="yz-share">
              <a className="yz-share-btn" href="#" aria-label="Copy link">↗</a>
              <a className="yz-share-btn" href="#" aria-label="Share on X">𝕏</a>
              <a className="yz-share-btn" href="#" aria-label="Share on LinkedIn">in</a>
            </div>
          </div>
        </aside>

        {/* Article */}
        <article className="yz-prose">
          {post.sections.map((section) => (
            <div key={section.heading} id={section.heading.toLowerCase().replace(/\s+/g, '-')}>
              <h2>{t(section.heading, section.headingZh)}</h2>
              <p>{t(section.body, section.bodyZh)}</p>
            </div>
          ))}
        </article>

        {/* Right aside */}
        <aside className="yz-aside yz-post-aside-right">
          <div className="yz-aside-block">
            <div className="yz-detail-side-label">{t('Tags', '标签')}</div>
            <div className="yz-proj-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="yz-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="yz-aside-block">
            <div className="yz-detail-side-label">{t('Related', '相关文章')}</div>
            <div style={{ display: 'grid', gap: 12 }}>
              {blogContent.posts
                .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
                .slice(0, 2)
                .map((related) => (
                  <a
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: 14.5,
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      color: 'var(--fg)',
                    }}
                  >
                    {t(related.title, related.titleZh)}
                  </a>
                ))}
            </div>
          </div>
        </aside>
      </div>

{/* Nav */}
      <div className="yz-detail-nav">
        <a href="/blog">
          <span className="nav-label">← {t('All posts', '所有文章')}</span>
          <span className="nav-title">{t('Blog', '博客')}</span>
        </a>
        <div />
      </div>
    </>
  );
}
