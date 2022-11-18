import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext, ProductContextType } from '../context/ProductContext'

const Products = () => {

  let currentPage = "Products"
    document.title = `${currentPage} || Fixxo` 

    const {getallProducts, allProducts} = React.useContext(ProductContext) as ProductContextType;

    useEffect(() => {
      getallProducts()
    })

  return (
    <>
      <MainMenuSection button={undefined} link={''} icon={''} quantity={''} hideOnMobile={undefined} />
      <BreadcrumbSection currentPage="Products" parentPage={''} />
      <ProductGridSection title="Product Grid Section" items={allProducts} />
      <FooterSection />
    </>
  )
}

export default Products