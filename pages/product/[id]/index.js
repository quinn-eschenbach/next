import React, {useEffect, useState} from 'react'
import { Button } from '@material-ui/core'
import { getProducts, addCartItem } from '../../../lib/api'
import Navbar from './../../../components/Navbar/Navbar'

const Product = ({product}) => {
    
    const addToCart = ()=>{
        const item = { 
            product_id: `${product.id}`,
            quantity: 1,
            return_cart: true
        }
        addCartItem(item)
    }
   
    return (
        <>
            <Navbar />
            <div style={{height: '60px'}} />
            <h1>{product.name}</h1>
            <div dangerouslySetInnerHTML={{__html:product.description}}></div>
            <div style={{backgroundImage: `url(${product.images[0].src})`, width: '500px', height: '500px'}}></div>
            <Button variant="contained" color="primary" onClick={()=>{addToCart()}}>Kaufen</Button>
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
