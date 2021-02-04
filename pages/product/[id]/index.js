import React, {useEffect, useState} from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { getProducts, addCartItem } from '../../../lib/api'
import Navbar from './../../../components/Navbar/Navbar'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Product = ({product}) => {

    const [key, setKey] = useState(1)
    const addToCart = ()=>{
        const item = { 
            product_id: `${product.id}`,
            quantity: 1,
            return_cart: true
        }
        
        addCartItem(item).then(()=>{
            setKey(key + 1)
        })
    }
   
    return (
        <>
            <Navbar key={key} />
            <Typography variant="h1">{product.name}</Typography>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Carousel plugins={['arrows']}>
                        {
                            product.images.map(image=>(
                                <img key={image} src={image.src}/>
                            ))
                        }
                    </Carousel>
                </Grid>
                <Grid item xs={12} md={6}>
                        <div dangerouslySetInnerHTML={{__html:product.description}} />
                        <Button variant="contained" color="primary" onClick={()=>{addToCart()}}>Kaufen</Button>
                </Grid>
            </Grid>
            
            
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
