import React from 'react'
import './About.css'
import lemis from '../../image/me.png-removebg-preview.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
    <h5>Get to know </h5>
    <h2> About me</h2>

    <div className="container about__container">
     <div className="about__me">
      <div className="about__me-image">
        <img src={lemis}alt="About Image"/>
      </div>
      </div>

      <div className="about__content   ">
        <div className="about__cards">
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>5+ Month Coding </small>

        </article>
        <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>clients</h5>
          <small> "Lorem ipsum dolor sit amet,
             </small>

        </article>
        <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Project</h5>
          <small>5+ completed</small>
        </article>   
        </div>
       

        <p> "My name is Okon lemuella inyang  I'm a Front End Engineer based in Lagos, Nigeria. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.

      Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. 

 .</p>

        <a href="#contact" className='btn btn-primary'>Lets chat</a>
      </div>
    </div>
   </section>
  )
}

export default About