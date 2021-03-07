import React, { useEffect, useState } from 'react'
import { getProducts } from '../../../lib/api'
import Navbar from './../../../components/Navbar/Navbar'
import ProductPage from './../../../components/ProductPage/ProductPage'



const Product = ({ product }) => {
    
    return (
        <>
            <Navbar />
            <ProductPage product={product} />
        </>
    )
}

export const getStaticPaths = async () => {
    const products = await getProducts()
    const ids = products.map(product => product.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const products = await getProducts()
    const product = products.filter(product => product.id == context.params.id)[0]
    return {
        props: {
            product
        }
    }
}


export default Product
