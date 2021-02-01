import React, {useEffect, useState} from 'react'
import { getProducts } from '../../../lib/api'
import Navbar from './../../../components/Navbar/Navbar'

const Product = ({product}) => {
   
    return (
        <>
            <Navbar />
            <h1>{product.name}</h1>
            <div dangerouslySetInnerHTML={{__html:product.description}}></div>
            <div style={{backgroundImage: `url(${product.images[0].src})`, width: '500px', height: '500px'}}></div>
        </>
    )
}

export const getStaticPaths = async () => {
    const products = await getProducts()

    const ids = products.map(product=> product.id)

    const paths = ids.map(id=>({params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const products = await getProducts()

    const product = products.filter(product=>product.id == context.params.id)[0]
    return{
        props:{
          product
        }
      }
  }
  

export default Product
