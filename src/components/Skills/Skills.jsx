import React from 'react'
import './Skills.css'
import {TbDiamond} from 'react-icons/tb'

function Skills() {
  return (
    <section id='Skills'>
      <h2>My Skillset</h2>
      <div className="container experience__container">
        <div className="experience__software">
          <h3>Software</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>Python</h4>
            </article>
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>C#</h4>
            </article>
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>

        <div className="experience__hardware">
         <h3>Hardware</h3>
         <div className="experience__content">
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>Electronics</h4>
            </article>
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>Mechatronics</h4>
            </article>
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>Raspberry Pi, Arduino, Microcontrollers</h4>
            </article>
            <article className='experience__details'>
              <TbDiamond className='experience__details-icon'/>
              <h4>Sensors</h4>
            </article>
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default Skills