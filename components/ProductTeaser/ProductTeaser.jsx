import React from 'react'
import{ Typography, Button, CardContent, CardMedia } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import Link from 'next/link'
import styles from './ProductTeaser.module.css'

const ProductTeaser = ({product}) => {


    const link = '/product/' + product.id
    return (
        <>
            <Link style={{outerHeight:" 100%"}} href={link}>
                <div className={styles.wrapper}>
                    <img src={product.images[0].src} className={styles.image}/>
                    <Typography 
                        style={{
                            textTransform: "uppercase"
                        }} 
                        variant="h5"
                    >
                        {product.name}
                    </Typography>

                    <Typography 
                        style={{
                            textTransform: "capitalize"
                        }} 
                        variant="body1" 
                        gutterBottom
                    >
                        Flutschig, Weich und Warm
                    </Typography>
                    
                    <Typography variant="subtitle2">
                        {product.price},00€
                    </Typography>
                    <div style={{marginTop: "auto"}}>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={
                                <AddShoppingCart />
                            }
                        >
                            add to shoppingcart
                        </Button>
                    </div>
                </div>            
            </Link>            
        </>
        
    )
}

export default ProductTeaser
