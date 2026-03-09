import React from 'react'
import Header from './components/Header'
import Services from './components/Services'
import Portfolios from './components/Portfolios'
import AboutMe from './components/AboutMe'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
    <>
      {/* Header */}
      <Header />
      {/* About Me */}
      <AboutMe />
      {/* Services */}
      <Services />
      {/* Portfolios */}
      <Portfolios />
      {/* Certificates */}
      <Certificates />
      {/* Skills & Education  */}
      <Skills />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </>
  )
}

export default App
