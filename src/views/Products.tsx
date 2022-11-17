import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../context/Context'

const Products = () => {

  let currentPage = "Products"
    window.top.document.title = `${currentPage} || Fixxo` 

  const productContext = useContext(ProductContext);

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection titel="Product Grid Section" items={productContext} />
      <FooterSection />
    </>
  )
}

export default Products