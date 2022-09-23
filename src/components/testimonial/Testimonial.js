import React from 'react'



import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Testimonials.css'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/isaac-sangodare-744765148/',
      name: 'Isaac Sangodare',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think lemuella is a great collaborative partner to have. I met lemuella while tutoring her  some basic javascript & react projects and since then she has drastically progressed in her understanding of the development process. She always has a professional environment and has good audio and video quality which makes it easier to communicate with her.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/faremi-ezekiel-2a38b1239/',
      name: 'Ezekiel Faremi',
      role: 'Full-stack developer | ',
      test: "It was a pleasure collaborating with lemuella on different projects. One of the things that I think is special about her is that she never settles, even after completing the projects she finds other resources and strengthens her knowledge. Collaborating with her is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    
    {
      id: 4,
      link: 'https://www.linkedin.com/in/david-shuaib/',
      name: 'David Shuaib',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Lemuella some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/',
      name: 'Lorem 20',
      role: 'Software Developer',
      test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];


  return (
    <section id="testmonials">
    <h5>Feedback from my peers</h5>
    <h2>Testimonials</h2>
    <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
  </section>
  )
}

export default Testimonial