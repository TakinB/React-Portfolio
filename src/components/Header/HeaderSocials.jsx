import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div HeaderSocials className="header__socials">
        <a href="https://www.linkedin.com/in/bahareh-saboktakin/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TakinB" target="_blank"> <FaGithub/></a>
    </div>
  )
}

export default HeaderSocials