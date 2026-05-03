import Image from 'next/image';
import homeContent from './content/home.json';
import nowContent from './content/now.json';
import projectsContent from './content/projects.json';
import blogContent from './content/blog.json';
import siteContent from './content/site.json';

export default function Home() {
  const { hero } = homeContent;
  const featuredPost = blogContent.posts.find((p) => p.featured) ?? blogContent.posts[0];
  const recentPosts = blogContent.posts.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="yz-hero">
        <div className="yz-hero-availability">
          <span className="dot" />
          <span>Available for new opportunities · Q3 2026</span>
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
              I&apos;m <strong style={{ color: 'var(--fg)' }}>{hero.intro.name}</strong>, {hero.intro.text}
            </p>
            <p className="yz-body" style={{ fontSize: 15 }}>{hero.body}</p>
          </div>
        </div>

        <div className="yz-hero-meta">
          <div className="yz-hero-meta-item">
            <div className="label">Based in</div>
            <div className="value">Shanghai, CN</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">Focus</div>
            <div className="value">AI/ML · Data-viz · Full-stack</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">Currently</div>
            <div className="value">Saint-Gobain Research</div>
          </div>
          <div className="yz-hero-meta-item">
            <div className="label">Status</div>
            <div className="value" style={{ color: 'oklch(50% 0.15 145)' }}>● Open to roles</div>
          </div>
        </div>
      </section>

      {/* Now strip */}
      <section className="yz-section">
        <div className="yz-section-head">
          <div className="yz-section-head-left">
            <div className="yz-eyebrow">Now</div>
            <h2 className="yz-section-title">What I&apos;m working on</h2>
          </div>
          <a href="/about" className="yz-section-action">More on About →</a>
        </div>
        <div className="yz-now">
          {nowContent.homeItems.map((item) => (
            <div key={item.label} className="yz-now-item">
              <div className="yz-now-label">{item.label}</div>
              <div className="yz-now-value">
                {item.value}
                {item.sub && <span className="sub">{item.sub}</span>}
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
                <div className="yz-eyebrow">Selected work</div>
                <h2 className="yz-section-title">
                  Projects
                  <span className="yz-section-count">{String(projectsContent.projects.length).padStart(2, '0')}</span>
                </h2>
              </div>
              <a href="/project" className="yz-section-action">See all →</a>
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
                <p className="yz-body" style={{ fontSize: 14.5, margin: 0 }}>{project.description}</p>
                <div className="yz-proj-tags">
                  {project.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="yz-tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Posts column */}
          <div className="yz-digest-col">
            <div className="yz-section-head">
              <div className="yz-section-head-left">
                <div className="yz-eyebrow">Writing</div>
                <h2 className="yz-section-title">Recent posts</h2>
              </div>
              <a href="/blog" className="yz-section-action">See all →</a>
            </div>

            {recentPosts.map((post, i) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="yz-post-row">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="title">{post.title}</span>
                <span className="meta">{post.date.split(',')[0]} · {post.readingTime}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="yz-cta-strip">
        <div className="yz-eyebrow">Get in touch</div>
        <h2 className="yz-cta-title">
          Looking for a <span className="accent">Software Engineer?</span>
        </h2>
        <p className="yz-body" style={{ maxWidth: '44ch' }}>
          I&apos;m currently exploring full-time and contract opportunities across AI/ML, data-viz, and platform engineering.
        </p>
        <div className="yz-cta-actions">
          <a href={`mailto:${siteContent.email}`} className="yz-btn primary">Get in touch →</a>
          <a href="/about" className="yz-btn">About me</a>
        </div>
      </section>
    </>
  );
}
