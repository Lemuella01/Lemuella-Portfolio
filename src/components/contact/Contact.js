import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wb200yq', 'template_lxrqk8n', form.current, 'JDt_ZdW0RBnJiqFcY')
   
    e.target.reset()
  };

  return (
    <section id='contact'>
       <h5>Get in touch</h5>
       <h2>Contact Me</h2>

       <div className='container contact__container'> 
       <div className='contact__options'>

        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>danlemmy01@gmail.com</h5>
          <a href='mailto:danlemmy01@gmail.com' target='_blank'>Send a Message</a>
      </article>


      <article className='contact__option'>
          <RiMessengerFill className='contact__option-icon'/>
          <h4>Messenger </h4>
          <h5>Dan Lemuella</h5>
          <a href='https://m.me/okon.lemuella/' target='_blank'>Send a message</a>
      </article>

      <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2347033132684</h5>
          <a href='https://api.whatsapp.com/send?phone=2347033132684' target='_blank'>Send a message</a>
      </article>

       </div>
       {/* {END OF CONTYACT OPTIONS} */}

       <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input  type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message Here' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
       </div>
    </section>
   
  )
}

export default Contact