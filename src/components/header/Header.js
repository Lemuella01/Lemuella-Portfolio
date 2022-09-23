import React from 'react'
import './Header.css'
import CTA from './CTA'
import lemy from '../../image/me.png-removebg-preview.png'
import Socials from './Socials'


const Header = () => {
  return (
  <header>
    <div className='container header__container'>
      <h5>hello i'm </h5>
      <h1>Lemuella Okon</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <Socials/>

      <div className="lemy">
        <img src={lemy} alt=''/>
        </div>

        <a href='#contact' className='scroll__down'>Scrool Down</a>

    </div>

  </header>
  )
}

export default Header