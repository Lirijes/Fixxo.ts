import React, { useEffect } from 'react'
import Showcase from '../sections/ShowcaseSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ConsciousSection from '../sections/ConsciousSection'
import FlashSaleLeft from '../sections/FlashSaleLeft'
import FlashSaleRight from '../sections/FlashSaleRight'
import BottomMenuSection from '../sections/BottomMenuSection'
import { ProductContext, ProductContextType } from '../context/ProductContext'


const Home: React.FC = () => {
  document.title = 'Fixxo.' //detta gör att namnet på fliken ändras

  const {getfeaturedProducts, getsaleProducts, featuredProducts, saleProducts} = React.useContext(ProductContext) as ProductContextType;

  useEffect(() => {
    getfeaturedProducts(8)
  }, [])

  useEffect(() => {
    getsaleProducts(4)
  }, [])


  return (
    <>
      <header style={{ backgroundColor : "#F5F5F5" , height : "90px" }}> {/* ljusgrå bakgrundsfärg på home */}
        <MainMenuSection button={undefined} link={''} icon={''} quantity={''} hideOnMobile={undefined} />
      </header>
      <Showcase />
      <ProductGridSection title="Product Grid Section" items={featuredProducts} /> {/* här hämtas produkterna i listan in och läggs in i den sectionen */}
      <ConsciousSection />
      <FlashSaleLeft title="Flash Sale Left" items={saleProducts} />
      <FlashSaleRight title="Flash Sale Right" items={saleProducts} />
      <BottomMenuSection />
      <FooterSection />
    </>
  )
}

export default Home