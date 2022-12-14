import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const NotFound: React.FC = () => {
  return (
    <>
      <MainMenuSection button={undefined} link={''} icon={''} quantity={''} hideOnMobile={undefined} />
      <div className="container d-flex justify-content-center align-items-center" style={{ height : "500px" }}>
        <h1> 404 - Page Not Found </h1>
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  )
}

export default NotFound