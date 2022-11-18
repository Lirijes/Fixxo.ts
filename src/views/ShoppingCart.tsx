import React from 'react'
import Counter from '../components/Counter'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ShoppingCart = () => {
  return (
    <>
      <MainMenuSection button={undefined} link={''} icon={''} quantity={''} hideOnMobile={undefined} />
      <Counter init={0} />
      <FooterSection />
    </>
  )
}

export default ShoppingCart