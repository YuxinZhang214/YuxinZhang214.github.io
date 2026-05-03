import { notFound } from 'next/navigation';
import blogContent from '../../content/blog.json';

export function generateStaticParams() {
  return blogContent.posts.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogContent.posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <article style={{ paddingTop: 'clamp(32px, 4vw, 56px)', paddingBottom: 'clamp(48px, 6vw, 96px)' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <a href="/blog" className="yz-mono" style={{ color: 'var(--fg-3)' }}>← Blog</a>
          <span className="yz-mono" style={{ color: 'var(--fg-3)' }}>/</span>
          <span className="yz-mono" style={{ color: 'var(--fg-2)' }}>
            {post.tags[0]}
          </span>
        </div>

        {/* Header */}
        <div className="yz-eyebrow">{post.tags.join(' · ')}</div>
        <h1 className="yz-h1" style={{ maxWidth: '20ch', marginTop: 14, marginBottom: 16 }}>
          {post.title}
        </h1>
        <div className="yz-mono" style={{ marginBottom: 40 }}>
          {post.date} · {post.readingTime} read
        </div>

        {/* Body */}
        <div style={{ maxWidth: '68ch' }}>
          {post.sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: 32 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: '-0.012em',
                margin: '0 0 12px',
                color: 'var(--fg)',
              }}>
                {section.heading}
              </h2>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                lineHeight: 1.7,
                color: 'var(--fg-2)',
                margin: 0,
              }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="yz-proj-tags" style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--hair)' }}>
          {post.tags.map((t) => (
            <span key={t} className="yz-tag">{t}</span>
          ))}
        </div>
      </article>

      {/* Back nav */}
      <div className="yz-detail-nav">
        <a href="/blog">
          <span className="nav-label">← All posts</span>
          <span className="nav-title">Blog</span>
        </a>
        <div />
      </div>
    </>
  );
}
