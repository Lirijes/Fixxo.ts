import React, { useState, useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { useParams } from 'react-router-dom'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDescriptionSection from '../sections/ProductDescriptionSection'
import { Product } from '../models/productModel'
import { ProductContext, ProductContextType } from '../context/ProductContext'


const ProductDetails: React.FC<Product> = (Product) => {

  const {product, getProduct} = React.useContext(ProductContext) as ProductContextType;

  useEffect(() => {
    getProduct(articleNumber)
  }, [])

    return (
      <>
          <MainMenuSection button={undefined} link={''} icon={''} quantity={''} hideOnMobile={undefined} />
          <p className="top-info">Get 25% OFF at the Fixxo Selection - Shop Now!</p>
          <BreadcrumbSection parentPage="Product Description" currentPage={Product.name} />
          <ProductDescriptionSection items={product} />
          <FooterSection />
      </>
  )
}

export default ProductDetails