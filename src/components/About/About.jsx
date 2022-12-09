import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import {BsXDiamond} from 'react-icons/bs'
import {BiChip} from 'react-icons/bi'
import {AiFillCode} from 'react-icons/ai'

const About = () => {
  return (
    <section id='About' >
    <h5>Hi!</h5>
    <h2>Here's a little more about me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
        <img src={ME} alt="my photo" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <BsXDiamond className='about__icon'/>
            <h5>Design Thinking</h5>
            <small>5+ Years</small>
          </article>

          <article className='about__card'>
            <BiChip className='about__icon'/>
            <h5>Hardware Projects</h5>
            <small>15+ Years</small>
          </article>
          
          <article className='about__card'>
            <AiFillCode className='about__icon'/>
            <h5>Software Projects</h5>
            <small>10+ Years</small>
          </article>
        </div>
        <p>
          I enjoy wearing different hats at the intersection of Design and Technology.
        </p>
        <a href="#contact" className='btn btn-primary'> Let's talk!</a>
      </div>
    </div>
    </section>
  )
}

export default About