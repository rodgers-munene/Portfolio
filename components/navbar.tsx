import React from 'react'
import { links } from '@/lib/data'
import Header from './header'
import HamburgerMenu from './hamburger'


const Navbar = () => {
  return (
    <nav>
        < HamburgerMenu  links={links}/>
        < Header links={links}/>
    </nav>
  )
}

export default Navbar