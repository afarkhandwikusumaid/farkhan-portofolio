import React from 'react'

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="main-container">
        <h3 className="pre-title">Showcase</h3>
        <h1 className="section-title">Certificates</h1>

        <div className="grid-3">
          {/* Card 1 */}
          <article className="portfolio">
            <div className="portfolio-cover" style={{display:'flex', alignItems:'center', justifyContent:'center', background: 'var(--thirdBackgroundColor)'}}>
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="var(--primaryIconColor)" strokeWidth="1.5"/>
                <path d="M7 9H17M7 12H14M7 15H12" stroke="var(--primaryIconColor)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>Web Development Fundamentals</h4>
                <span className="portfolio-link" aria-hidden="true"></span>
              </div>
              <div className="portfolio-tags">
                <div>Dicoding</div>
                <div>2024</div>
              </div>
              <p>Dasar-dasar HTML, CSS, dan JavaScript serta praktik membangun layout responsif.</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="portfolio">
            <div className="portfolio-cover" style={{display:'flex', alignItems:'center', justifyContent:'center', background: 'var(--thirdBackgroundColor)'}}>
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="var(--primaryIconColor)" strokeWidth="1.5"/>
                <path d="M7 9H17M7 12H14M7 15H12" stroke="var(--primaryIconColor)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>UI/UX Design Essentials</h4>
                <span className="portfolio-link" aria-hidden="true"></span>
              </div>
              <div className="portfolio-tags">
                <div>Coursera</div>
                <div>2024</div>
              </div>
              <p>Pengenalan prinsip desain antarmuka, tipografi, warna, dan prototyping cepat.</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="portfolio">
            <div className="portfolio-cover" style={{display:'flex', alignItems:'center', justifyContent:'center', background: 'var(--thirdBackgroundColor)'}}>
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="var(--primaryIconColor)" strokeWidth="1.5"/>
                <path d="M7 9H17M7 12H14M7 15H12" stroke="var(--primaryIconColor)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>JavaScript Programming</h4>
                <span className="portfolio-link" aria-hidden="true"></span>
              </div>
              <div className="portfolio-tags">
                <div>FreeCodeCamp</div>
                <div>2025</div>
              </div>
              <p>Pemrograman JavaScript modern, DOM manipulation, dan best practices.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
