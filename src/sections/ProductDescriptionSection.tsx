import React from 'react'
import { Product } from '../models/productModel'


const ProductDescriptionSection: React.FC<Product> = (Product) => {

  return (
    <>
        <div className="product-description container">
            <div className="product-info-left">
                <div className="product-images">
                    <img className="big-img" src={Product.imageName} alt="" />
                </div>
            </div>

            <div className="product-info-right">
                <div className="product-text">
                    <h1>{Product.name}</h1>
                    <p className="product-id">ARTNR: {Product.articleNumber} BRAND: Fixxo.</p>
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="item-price">$ {Product.price}</p>
                    <p className="item-info">
                        Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more)
                    </p>
                </div>
                <div className="shop-now">
                    <div className="chose-size">Size: 
                        <button className="sizes">S</button>
                        <button className="sizes">M</button>
                        <button className="sizes">L</button>
                        <button className="sizes">XL</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDescriptionSection