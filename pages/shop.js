import {getProducts} from './../lib/api'
import React, { useState, useEffect } from 'react'
import ShopPage from '../components/ShopPage/ShopPage'
import Navbar from './../components/Navbar/Navbar'

export default function Shop({products}){
    return(
        <>
        <Navbar />
          <main>
            <ShopPage products={products}/>
          </main>        
        </>
    )
}

export const getStaticProps = async () => {
    const products = await getProducts()
    return{
      props:{
        products
      }
    }
  }