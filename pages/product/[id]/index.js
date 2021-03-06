import React, { useEffect, useState } from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { getProducts, addCartItem } from '../../../lib/api'
import Navbar from './../../../components/Navbar/Navbar'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { useCart } from './../../../lib/context/cart'

const Product = ({ product }) => {

    const { addItem } = useCart()

    return (
        <>
            <Navbar />
            <main>
                <Typography variant="h1">{product.name}</Typography>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Carousel plugins={['arrows']}>
                            {
                                product.images.map(image => (
                                    <img key={image} src={image.src} />
                                ))
                            }
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                        <Button variant="contained" color="primary" onClick={() => { addItem(product.id) }}>Kaufen</Button>
                    </Grid>
                </Grid>
            </main>
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
