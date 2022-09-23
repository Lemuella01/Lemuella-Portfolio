import React from 'react'
import IMG1 from '../../image/vasitipng.PNG'
import IMG2 from '../../image/easybank-png.PNG'
import IMG3 from '../../image/todo-pic.PNG'

import './Portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'vasiti',
      img: IMG1,
      description:
      'Fully responsive interactive e-commerce story website built based on Figma design',
      technologies: 'React | states | css',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: 'https://github.com/Lemuella01/vasiti/',
    },
    {
      id: 2,
      title: 'Easy-banking landing page',
      img: IMG2,
      description:
        ' easy banking landing page website, built based on front-end mentor design',
      technologies: 'html| css',
      link: 'https://lemuella01.github.io/Easy-bank-landing-page/',
      github: 'https://github.com/Lemuella01/Easy-bank-landing-page',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG3,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'html | css | webpack |',
      link: 'https://lemuella01.github.io/todo-app/',
      github: 'https://github.com/Lemuella01/todo-app/settings/pages',
    }
  
  ];




  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {soloProjects.map((pro) => (
        <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <div className="portfolio__item-content">
            <h3>{pro.title}</h3>
            <p>{pro.description}</p>
            <p>{pro.technologies}</p>
          </div>
          <div className="portfolio__item-cta">
            <a
              href={pro.github}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={pro.link}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
  )
}

export default Portfolio