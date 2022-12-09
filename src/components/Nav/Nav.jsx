import React from 'react'
import './Nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {IoIosContacts} from 'react-icons/io'
import {SiSnapcraft} from 'react-icons/si'
import {MdWorkspaces} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
        <a href="#About" onClick={()=> setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiFillInfoCircle/></a>
        <a href="#Contact" onClick={()=> setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><IoIosContacts/></a>
        <a href="#Skills" onClick={()=> setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><SiSnapcraft/></a>
        {/* <a href="#Projects" onClick={()=> setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><MdWorkspaces/></a> */}
    </nav>
  )
}



export default Nav