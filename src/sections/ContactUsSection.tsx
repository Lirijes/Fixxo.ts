import React, { useState } from 'react'
import { submitData, validate } from '../assets/scripts/Validation'
import { ContactUsContext, ContactUsContextType } from '../context/ContactUsContext'


const ContactUsSection: React.FC = () => {
    const { setErrors, handleSubmit, handleChange } = React.useContext(ContactUsContext) as ContactUsContextType;

  return (
    <section className="contact-us">
    <div className="container">

        {
          submitted ? (
          <div className="alert alert-success text-center mb-5" role="alert">
            <h3>Thank you for your comment</h3> 
            <p>We will contact you as soon as possible.</p>
            </div>  ) : (<></>)
        }

        <h2>Come in contact with us</h2>
        <form onSubmit={handleSubmit} noValidate>
            <div>
                {/* value används för att skapa ett värde av det som anges i formuläret, för att användaren ska kunna skriva något används onChange som sedan läggs in i objektet contactForm */}
                <input id="name" type="text" className={(errors.name ? 'error': '')} placeholder="Your Name" value={name} onChange={handleChange} required />
                <div className="errorMessage">{errors.name}</div>
            </div>
            <div>
                <input id="email" type="email" className={(errors.email ? 'error': '')} placeholder="Your Mail" value={email} onChange={handleChange} />
                <div className="errorMessage">{errors.email}</div>
            </div>
            <div className="textarea">
                <textarea id="comments" className={(errors.comments ? 'error': '')} placeholder="Comments" value={comments} onChange={handleChange} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )}></textarea>
                <div className="errorMessage">{errors.comments}</div>
            </div>
            <button className="btn-red" type="submit">POST COMMENT</button>
        </form>
    </div>
    </section>
  )
}


export default ContactUsSection