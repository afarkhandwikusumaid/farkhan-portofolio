import React from 'react'

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div
        className="main-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          padding: 'var(--sectionPadding)',
        }}
      >
        {/* Photo with decorative elements */}
        <div className="about-photo-wrapper">

          {/* Glow ring behind photo */}
          <div className="about-photo-glow" aria-hidden="true" />
          <div className="about-photo-ring" aria-hidden="true" />

          <img
            src="/image/farkhan.png"
            alt="Portrait of A. Farkhan Dwi Kusuma"
            width={360}
            height={360}
            style={{
              width: '100%',
              maxWidth: 360,
              height: 360,
              objectFit: 'cover',
              borderRadius: 24,
              boxShadow: 'var(--shadowMd)',
              position: 'relative',
              zIndex: 1,
            }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Text content */}
        <div>
          <h3 className="pre-title">About Me</h3>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            A. Farkhan Dwi Kusuma
          </h2>
          <p style={{ marginTop: '1rem' }}>
            First-year Computer Engineering student at Dian Nuswantoro University,
            passionate about technology, and programming. Eager to learn and grow
            in the field of software development.
          </p>
          <div className="btn-box" style={{ marginTop: '1.25rem' }}>
            <a
              href="https://drive.google.com/file/d/1Vy1b1FgAihLdkTWqzTithh_b--mh4Ycz/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              About Me (CV)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
