import React from 'react'
import {Grid, Typography, Divider} from '@material-ui/core'
import ProductTeaser from './../ProductTeaser/ProductTeaser'
import styles from './ShopPage.module.css'

const ShopPage = ({products}) => {
    return (
        <div className={styles.wrapper}>
            <Typography variant="h1">SHOP</Typography >
            <Divider />
            <div style={{height: '10px'}} />
            <Grid container spacing={3}>
                
                {products.map(product => (
                    <Grid key={product.id} item xs={4}>
                        <ProductTeaser product={product} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default ShopPage
