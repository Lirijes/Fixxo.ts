import { createContext, useContext, useState } from "react"
import { Product } from "../models/productModel"

export interface ProductContextType {
    product: string
    allProducts: Product[]
    featuredProducts: Product[]
    saleProducts: Product[]

    getProduct: (articleNumber: string) => void
    getallProducts: () => void
    getfeaturedProducts: (take: number) => void
    getsaleProducts: (take: number) => void
}

interface ProductProviderProps {
    children: any
}

export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}: ProductProviderProps) => { //cred till Ninja för koden nedan
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState<string>('')
    const [allProducts, setallProducts] = useState<Product[]>([])
    const [featuredProducts, setfeaturedProducts] = useState<Product[]>([])
    const [saleProducts, setsaleProducts] = useState<Product[]>([])

    const getProduct = async (articleNumber: string) => {
        const result = await fetch(url + `/${articleNumber}`)
        setProduct(await result.json())
    }

    const getallProducts = async () => {
        const result = await fetch(url)
        setallProducts(await result.json())
    }

    const getfeaturedProducts = async (take = 0) => {
        const result = await fetch(url + `?take-${take}`)
        setfeaturedProducts(await result.json())
    }

    const getsaleProducts = async (take = 0) => {
        const result = await fetch(url + `?take-${take}`)
        setsaleProducts(await result.json())

    return (
       <ProductContext.Provider value={{product, getProduct, allProducts, getallProducts, featuredProducts, getfeaturedProducts, saleProducts, getsaleProducts }}>
            {children}
       </ProductContext.Provider>
    )
}
}