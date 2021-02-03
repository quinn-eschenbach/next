import React from 'react'
import ProductTeaser from './../ProductTeaser/ProductTeaser'
import styles from './ShopPage.module.css'
import {Grid} from '@material-ui/core'

const ShopPage = ({products}) => {
    return (
        <div className={styles.wrapper}>
            <h1>Shop</h1>
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
