'use client';

import { useState } from 'react';
import blogContent from '../content/blog.json';

const ALL_TAGS = ['All', 'Data-viz', 'Frontend', 'Low-code', 'Career', 'Notes'];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('All');

  const featuredPost = blogContent.posts.find((p) => p.featured) ?? blogContent.posts[0];
  const listPosts = blogContent.posts.filter((p) => !p.featured);

  const filteredPosts = activeTag === 'All'
    ? listPosts
    : listPosts.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <section className="yz-section first" style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}>
        <div className="yz-eyebrow">Writing · {blogContent.posts.length} posts</div>
        <h1 className="yz-h1" style={{ marginTop: 14, marginBottom: 14 }}>Blog</h1>
        <p className="yz-lead" style={{ marginBottom: 36 }}>
          Notes on data visualization, frontend craft, and the weird middle ground of low-code platforms. Updated occasionally.
        </p>

        {/* Filter chips */}
        <div className="yz-blog-filters">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`yz-tag${activeTag === tag ? ' is-active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {tag}
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
                <span className="yz-tag is-accent">Featured</span>
                <span className="yz-mono">{featuredPost.date} · {featuredPost.readingTime} read</span>
              </div>
              <h2 className="yz-h2">{featuredPost.title}</h2>
              <p className="yz-body">{featuredPost.excerpt}</p>
              <div className="yz-proj-tags">
                {featuredPost.tags.map((t) => (
                  <span key={t} className="yz-tag">{t}</span>
                ))}
              </div>
              <a href={`/blog/${featuredPost.slug}`} className="yz-proj-action primary" style={{ alignSelf: 'flex-start' }}>
                Read post →
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
                <div className="title">{post.title}</div>
                <div className="excerpt">{post.excerpt}</div>
              </div>
              <div className="tag-cell">
                {post.tags.map((t) => (
                  <span key={t} className="yz-tag">{t}</span>
                ))}
              </div>
              <span className="read">{post.readingTime}</span>
            </a>
          ))}
          {filteredPosts.length === 0 && (
            <div style={{ padding: '32px 8px', color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              No posts tagged &ldquo;{activeTag}&rdquo; yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
