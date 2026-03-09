import React from 'react'

function App() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
      {/* Header */}
      <header>
        <div className="main-container">
          <div className="nav">
            <div className="logo">
              <a href="/">{/* logo text optional */}</a>
            </div>

            <nav>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolios">Portofolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#certificates">Certificates</a></li>
              </ul>
            </nav>

            <div className="burger">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
          </div>

          <section id="hero">
            <div className="hero-left">
              <h3 className="pre-title">My name is</h3>
              <h1 className="hero-name">A. Farkhan <span>Dwi Kusuma</span></h1>
              <p>
                First-year Computer Engineering student at Dian Nuswantoro University, passionate about technology, and programming. Eager to learn and grow in the field of software development.
              </p>
              <div className="btn-box">
                <a
                  href="https://drive.google.com/file/d/1Vy1b1FgAihLdkTWqzTithh_b--mh4Ycz/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Me
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src="/image/farkhan.png" alt="Person Standing" />
            </div>
          </section>
        </div>
      </header>
      {/* End Header */}

      {/* Services */}
      <section id="services">
        <div className="services main-container">
          <h3 className="pre-title">Services</h3>
          <h1 className="section-title services-title">Specialized In</h1>

          <div className="grid-3">
            <div className="service">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z" />
                </svg>
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Turn what you have in mind of a digital product into reality. For
                any platform you consider.
              </p>
            </div>

            <div className="service">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 2c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm0-16c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm-1.577-1.721l-6.423-5.028v-3.352c-.323.066-.658.101-1 .101s-.677-.035-1-.101v3.352l-6.424 5.028c.695.233 1.323.602 1.844 1.093l5.58-4.372 5.579 4.373c.522-.492 1.15-.861 1.844-1.094z" />
                </svg>
              </div>
              <h4>Marketing</h4>
              <p>
                A marketing team focused on creative strategies and market analysis to build brand awareness and drive sales
              </p>
            </div>

            <div className="service">
              <div className="service-icon">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708" />
                </svg>
              </div>
              <h4>Web Development</h4>
              <p>
                Create and maintain your websites and also take care of its
                performance and traffic capacity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Services */}

      {/* Portfolios */}
      <section id="portfolios">
        <div className="portfolios main-container">
          <h3 className="pre-title">My Works</h3>
          <h1 className="section-title">Featured Portofolio</h1>

          <div className="grid-3">
            {/* Portfolio 1 */}
            <div className="portfolio">
              <div className="portfolio-cover">
                <img
                  src="/image/udinuss.jpeg"
                  alt="Portfolio 1"
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
                  alt="Portfolio 2"
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
      {/* End Portfolios */}

      {/* Certificates */}
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
      {/* End Certificates */}

      {/* Skills & Education */}
      <section id="skills">
        <div className="skills main-container">
          <h3 className="pre-title">Learning Path</h3>
          <h1 className="section-title">Skills & Education</h1>

          <div className="skills-grid">
            <div className="skills-left">
              <div className="education">
                <div className="line">
                  <div></div>
                </div>
                <div className="education-info">
                  <h4 className="education-title">SMP N 3 BATANG</h4>
                  <p>Matematika</p>
                  <h4 className="education-years">2019 - 2022</h4>
                </div>
              </div>
              <div className="education">
                <div className="line">
                  <div></div>
                </div>
                <div className="education-info">
                  <h4 className="education-title">SMA N 1 BATANG</h4>
                  <p>IPA</p>
                  <h4 className="education-years">2022 - 2025</h4>
                </div>
              </div>
              <div className="education">
                <div className="line">
                  <div></div>
                </div>
                <div className="education-info">
                  <h4 className="education-title">UNIVERSITAS DIAN NUSWATORO</h4>
                  <p>Sarjana - Teknik Informatika</p>
                  <h4 className="education-years">2025 - 2028</h4>
                </div>
              </div>
            </div>

            <div className="skills-right">
              <p>
                I’m an Informatics Engineering student at Udinus who’s passionate about technology and web development. I love learning new things, exploring front-end development, and continuously improving my skills through real projects and experiments.
              </p>

              <div className="skills-list">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>C++</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skills & Education  */}

      {/* Contact */}
      <section id="contact">
        <div className="contact main-container">
          <div className="contact-left">
            <form
              action="https://formspree.io/f/meopaneo"
              method="POST"
              className="contact-form"
            >
              <div>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button className="btn-submit">Send Message</button>
              </div>
            </form>
          </div>

          <div className="contact-right">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 14h-24l4-8h3.135c.385.641.798 1.309 1.232 2h-3.131l-2 4h17.527l-2-4h-3.131c.435-.691.848-1.359 1.232-2h3.136l4 8z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Address</h4>
                <p>Batang, Jawa Tengah, Indonesia</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Phone</h4>
                <p>(+62)859 4462 9716</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Email</h4>
                <p>farkhandwikusuma.id@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer>
        <div className="footer-icons">
          <a href="https://www.instagram.com/a.farkhannn/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/afarkhandwikusuma/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
        <p>&#169; 2025. A. Farkhan Dwi Kusuma</p>
      </footer>
      {/* End Footer */}
    </>
  )
}

export default App
