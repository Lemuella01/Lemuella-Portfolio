import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './Services.css'


const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2> Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Information architecture.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Design technology consulting.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>User stories.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Brand and design system development..</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Wireframes.</p>
              </li>
                  {/* END OF UI/ UX DESIGN*/}
            </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Cross-Browser development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Full Stack Web Development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>HTML5/CSS Development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Custom Web App Development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Data Migration, Support and Maintenance.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>CMS Design and Development.</p>
              </li>
                  {/* END OF WEB DEV*/}
            </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Landing Page Copy .</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Blog Writing Services.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Copywriting Services .</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Video Content.</p>
              </li>
              
                  {/* END OF Content creation*/}
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services