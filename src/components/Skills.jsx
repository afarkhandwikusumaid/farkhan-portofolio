import React from 'react'

export default function Skills() {
  return (
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
                <h4 className="education-title">UNIVERSITAS DIAN NUSWANTORO</h4>
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
  )
}
