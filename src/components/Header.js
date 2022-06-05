import React, { useState } from 'react'
import { MdComputer, MdOutlineHome, MdAlternateEmail } from 'react-icons/md'
import { SiHashnode } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

function Header() {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState('home')

  return (
    <div className="header">
        <div className="nav-container">
          <h1 id='hamburger' onClick={() => setNavbarOpen(pre => !pre)}>
            <GiHamburgerMenu /> &nbsp; {navbarOpen ? <AiOutlineDown /> : <AiOutlineUp />}
          </h1>
        </div>
        <div className="divider-container"><div className="divider-line"></div></div>
        <ul className={`menuNav${navbarOpen ? ' showMenu' : ''}`}>
          <li><MdOutlineHome />&nbsp; Hagay Haut</li>
          <li><MdComputer />&nbsp; Projects</li>
          <li><SiHashnode />&nbsp; Blog</li>
          <li><MdAlternateEmail />&nbsp; Connect</li>

        </ul>
    </div>
  )
}

export default Header