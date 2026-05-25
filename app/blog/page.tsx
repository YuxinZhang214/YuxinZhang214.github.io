'use client';

import { useState } from 'react';
import blogContent from '../content/blog.json';
import { useLanguage } from '../context/LanguageContext';

const ALL_TAGS = ['All', 'Data-viz', 'Frontend', 'Low-code', 'Career', 'Notes'];
const ALL_TAGS_ZH = ['全部', '数据可视化', '前端', '低代码', '职场', '笔记'];

export default function BlogPage() {
  const { t, lang } = useLanguage();
  const [activeTag, setActiveTag] = useState('All');

  const featuredPost = blogContent.posts.find((p) => p.featured) ?? blogContent.posts[0];
  const listPosts = blogContent.posts.filter((p) => !p.featured);

  const filteredPosts = activeTag === 'All'
    ? listPosts
    : listPosts.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <section className="yz-section first" style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}>
        <div className="yz-eyebrow">{t('Writing', '写作')} · {blogContent.posts.length} {t('posts', '篇')}</div>
        <h1 className="yz-h1" style={{ marginTop: 14, marginBottom: 14 }}>{t('Blog', '博客')}</h1>
        <p className="yz-lead" style={{ marginBottom: 36 }}>
          {t(
            'Notes on data visualization, frontend craft, and the weird middle ground of low-code platforms. Updated occasionally.',
            '关于数据可视化、前端工程与低代码平台的随笔，不定期更新。'
          )}
        </p>

        {/* Filter chips */}
        <div className="yz-blog-filters">
          {ALL_TAGS.map((tag, i) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`yz-tag${activeTag === tag ? ' is-active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {lang === 'zh' ? ALL_TAGS_ZH[i] : tag}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {activeTag === 'All' && featuredPost && (
          <div className="yz-blog-featured">
            <div className="yz-blog-featured-media">
              <div className="yz-blog-featured-placeholder" />
            </div>
            <div className="yz-blog-featured-info">
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="yz-tag is-accent">{t('Featured', '精选')}</span>
                <span className="yz-mono">{featuredPost.date} · {featuredPost.readingTime} {t('read', '分钟')}</span>
              </div>
              <h2 className="yz-h2">{t(featuredPost.title, featuredPost.titleZh)}</h2>
              <p className="yz-body">{t(featuredPost.excerpt, featuredPost.excerptZh)}</p>
              <div className="yz-proj-tags">
                {featuredPost.tags.map((tag) => (
                  <span key={tag} className="yz-tag">{tag}</span>
                ))}
              </div>
              <a href={`/blog/${featuredPost.slug}`} className="yz-proj-action primary" style={{ alignSelf: 'flex-start' }}>
                {t('Read post →', '阅读全文 →')}
              </a>
            </div>
          </div>
        )}

        {/* Post list */}
        <div className="yz-blog-list">
          {filteredPosts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="yz-blog-row">
              <span className="date">{post.date}</span>
              <div>
                <div className="title">{t(post.title, post.titleZh)}</div>
                <div className="excerpt">{t(post.excerpt, post.excerptZh)}</div>
              </div>
              <div className="tag-cell">
                {post.tags.map((tag) => (
                  <span key={tag} className="yz-tag">{tag}</span>
                ))}
              </div>
              <span className="read">{post.readingTime}</span>
            </a>
          ))}
          {filteredPosts.length === 0 && (
            <div style={{ padding: '32px 8px', color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              {t(`No posts tagged "${activeTag}" yet.`, `暂无标签为"${activeTag}"的文章。`)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
