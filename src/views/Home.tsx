import React, { useContext } from 'react'
import Showcase from '../sections/ShowcaseSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ConsciousSection from '../sections/ConsciousSection'
import FlashSaleLeft from '../sections/FlashSaleLeft'
import FlashSaleRight from '../sections/FlashSaleRight'
import BottomMenuSection from '../sections/BottomMenuSection'
import { FeaturedProductContext, SaleProductContext } from '../context/Context'

const Home = () => {
  window.top.document.title = 'Fixxo.' //detta gör att namnet på fliken ändras

  const featuredProducts = useContext(FeaturedProductContext) /* här vill vi använda oss av contexten ProductContext */
  const saleProducts = useContext(SaleProductContext)

  return (
    <>
      <header style={{ backgroundColor : "#F5F5F5" , height : "90px" }}> {/* ljusgrå bakgrundsfärg på home */}
        <MainMenuSection />
      </header>
      <Showcase />
      <ProductGridSection titel="Product Grid Section" items={featuredProducts} /> {/* här hämtas produkterna i listan in och läggs in i den sectionen */}
      <ConsciousSection />
      <FlashSaleLeft title="Flash Sale Left" items={saleProducts} />
      <FlashSaleRight title="Flash Sale Right" items={saleProducts} />
      <BottomMenuSection />
      <FooterSection />
    </>
  )
}

export default Home