import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <div className='contact__'>
      <h1>Contact</h1>
      <div className='contact__c'>
        <div className='contact__left'>
          <p>Phone: 12312313</p>
          <p>test@test.com</p>
          <p>Adres: USA 78</p>
        </div>
        <div className='contact__right'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus non, repudiandae ducimus commodi suscipit tempore? Iste necessitatibus excepturi sint? Amet voluptate veniam placeat quasi, corrupti iure adipisci hic obcaecati!</p>
        </div>
      </div>
    </div>
  )
}

export default Contact