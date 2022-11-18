import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactUsSection from '../sections/ContactUsSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'


const Contact: React.FC = () => {
  document.title = 'Contact | Fixxo.' /* visar titel på tab */

  return (
    <>
      <MainMenuSection button={undefined} link={''} icon={''} quantity={''} hideOnMobile={undefined} />
      <BreadcrumbSection currentPage="Contact" parentPage={''} />
      <MapSection />
      <ContactUsSection />
      <FooterSection />
    </>
  )
}

export default Contact