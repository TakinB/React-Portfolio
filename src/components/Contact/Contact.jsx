import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id='Contact'>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <h4>Email</h4>
            <h5>something@something.com</h5>
            <a href="mailto:something@something.com"> Send a message</a>
          </article>
          <article className='contact__option'>
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="mailto:something@something.com"> Send a message</a>
          </article>
          <article className='contact__option'>
            <h4>Instagram</h4>
            <h5>@something</h5>
            <a href="mailto:something@something.com"> Send a message</a>
          </article>
        </div>
        <form action="">
          <h5> Don't be a stranger!</h5>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" placeholder='Your Message' rows="10"></textarea>
          <button type='submit' className='btn btn-primary'> Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

//use EmailJS service to send the email from the form