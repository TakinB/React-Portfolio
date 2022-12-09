import React from 'react'
import testImage from '../../assets/__.svg'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={testImage} className='btn btn-primary' download >download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
