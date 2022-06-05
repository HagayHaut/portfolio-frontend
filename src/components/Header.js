import React, { useState } from 'react'
import { MdComputer, MdOutlineHome, MdAlternateEmail } from 'react-icons/md'
import { SiHashnode } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

function Header({ onPageSelction }) {

  const [navbarOpen, setNavbarOpen] = useState(false);
  

  return (
    <div className="header">
        <div className="nav-container">
          <h1 id='hamburger' onClick={() => setNavbarOpen(open => !open)}>
          {navbarOpen ? <AiOutlineDown /> : <AiOutlineUp />} &nbsp; <GiHamburgerMenu /> 
          </h1>
        </div>
        <div className="divider-container"><div className="divider-line"></div></div>
        <ul className={`menuNav${navbarOpen ? ' showMenu' : ''}`}>
          <li className='nav-link'><MdOutlineHome />&nbsp; Hagay Haut</li>
          <li className='nav-link'><MdComputer />&nbsp; My Projects</li>
          <li className='nav-link'><SiHashnode />&nbsp; Scriptable Blog</li>
          <li className='nav-link'><MdAlternateEmail />&nbsp; Let's Connect</li>

        </ul>
    </div>
  )
}

export default Header