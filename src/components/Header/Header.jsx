import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'

function Header() {
  return (
   <header>
    <div className="container header__container">
        <h1> Bahareh Saboktakin</h1>
        <h5 className="text-light"> Innovation | Design | Engineering </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="animations"></div>
        <div className="me">
          <img src={ME} alt="my photo" />
        </div>
        <a href="#Contact" className="scroll__down"  > scroll down </a>
    </div>
   </header>
  )
}

export default Header