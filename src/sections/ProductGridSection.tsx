import React from 'react'
import ProductCard from '../components/ProductCard'
import { Product } from '../models/productModel'

interface ProductCardProps {
  items: Product
  title: string
}

const ProductGridSection: React.FC<ProductCardProps> = ({title, items = []}) => {

  return (
    <section>
        <div className="product-grid">
            <div className="container">
                <h1>{title}</h1>
                <div className="featured-product-header">Featured Product</div>
                <div className="grid">
                    {
                      items.map((product: Product) => <ProductCard key={product.articleNumber} item={product} />) // här lägger vi in våra produkter, på vår home vy lägger vi in product cont för att de ska synas
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection