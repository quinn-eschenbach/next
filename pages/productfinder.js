import React, {useState} from 'react'
import ProductFinderPage from "./../components/ProductFinderPage/ProductFinderPage";
import Navbar from './../components/Navbar/Navbar'
import {getProducts} from './../lib/api'

const productfinder = ({products}) => {
    
    return (
        <>
        <Navbar />
        <ProductFinderPage productsProps={products}/>
        </>
    )
}


export default productfinder
export const getStaticProps = async () => {
    const products = await getProducts()
    return{
      props:{
        products
      }
    }
  }
