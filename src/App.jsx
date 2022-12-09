import React from 'react'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'
import Animations from './components/Animations/Animations.jsx'
import Nav from './components/Nav/Nav.jsx'

function App() {
  return (
    <div>
      <Header />
      {/* <Animations/> */}
      <Nav/>
      <About/>
      {/* <Projects/> */}
      <Skills/>
      <Contact/>

    </div>
  )
}

export default App
