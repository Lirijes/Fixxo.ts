import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactUsSection from '../sections/ContactUsSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'


const Contact = () => {
  window.top.document.title = 'Contact | Fixxo.' /* visar titel på tab */

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Contact" />
      <MapSection />
      <ContactUsSection />
      <FooterSection />
    </>
  )
}

export default Contact