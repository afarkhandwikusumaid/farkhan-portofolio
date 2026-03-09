import React from 'react'

export default function Portfolios() {
  return (
    <section id="portfolios">
      <div className="portfolios main-container">
        <h3 className="pre-title">My Works</h3>
        <h1 className="section-title">Featured Portfolio</h1>

        <div className="grid-3">
          {/* Portfolio 1 */}
          <div className="portfolio">
            <div className="portfolio-cover">
              <img
                src="/image/udinuss.jpeg"
                alt="Dinus Student Website preview"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>Dinus Student Website</h4>
                <a href="https://dinus-student-blog-r5gx.vercel.app/" target="_blank" rel="noreferrer" className="portfolio-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                  </svg>
                </a>
              </div>
              <div className="portfolio-tags">
                <div>HTML</div>
                <div>CSS</div>
              </div>
              <p>
                Dinus Student Blog is a website designed for students of Dian Nuswantoro University. It serves as a platform for sharing information, experiences, and inspiration related to campus life, academic activities, and personal development.
              </p>
            </div>
          </div>

          {/* Portfolio 2 */}
          <div className="portfolio">
            <div className="portfolio-cover">
              <img
                src="/image/balin.jpg"
                alt="Marketing BalinCreative preview"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>Marketing BalinCreative</h4>
                <a href="https://partnerofficial.id/" target="_blank" rel="noreferrer" className="portfolio-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                  </svg>
                </a>
              </div>
              <div className="portfolio-tags">
                <div>Tim Marketing</div>
              </div>
              <p>
                Ballincreative is a creative vendor specializing in school yearbooks. We capture memories through photography, design, and storytelling to create timeless yearbooks that celebrate every school's journey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
