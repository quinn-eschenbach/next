import React, { useState, useEffect } from 'react'
import { Paper, Typography, Button, CircularProgress, Divider } from '@material-ui/core'
import {useCart} from './../../../lib/context/cart'
import CartItem from './../../Cart/CartItem/CartItem'
import styles from './Order.module.css'

const Order = () => {
    const {cart, total} = useCart()

    const renderTeasers = () => (
        cart.map(product =>
            <CartItem
                key={product.product_id}
                item={product}
            />)
    )
    return (
        <div className={styles.wrapper}>
            <Typography variant="h3">Ihre Bestellung</Typography>
            {
                cart.length == 0 ? (
                    <CircularProgress />
                ) : (
                        <>
                            {
                                renderTeasers()
                            }
                            <Typography>
                                Total: {total}€
                        </Typography>
                        </>

                    )
            }
        </div>
    )
}

export default Order
