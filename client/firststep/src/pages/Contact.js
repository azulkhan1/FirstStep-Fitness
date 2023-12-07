import React from 'react';
import "../styles/Contact.css";
import gym1 from "../images/gym1.png";
const Contact = () => {
    return (
        <div className='contact'>
          <div className='left'
            style={{backgroundImage: `url(${gym1})`}}
          >
    
          </div>
    
          <div className='right'>
            <h1> Contact Us </h1>
            <form action="https://formsubmit.co/rashbd0909@gmail.com" id="contact-form" method="POST">
              <label htmlFor = "name">Your Name</label>
              <input name="name" placeholder="Enter full name" type ="text"/>
              <label htmlFor = "email">Email </label>
              <input name="email" placeholder="Enter email" type ="email"/>
              <label htmlFor='message'>Message</label>
              <textarea
                rows="6"
                placeholder='Enter message here...'
                name='message'
                required></textarea>
              <button type='submit'>Send Message </button>
            </form>
          </div>
          
        </div>
      )
    }
    
    export default Contact