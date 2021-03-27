import React, { useState, useEffect } from 'react'
import { IconButton, Button, Typography, Divider } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'
import Link from 'next/link'
import { useCart } from './../../lib/context/cart'

const Cart = ({ onClick }) => {

    const { cart, total, removeAllItems } = useCart()

    return (
        <div className={styles.wrapper} >
            <div className={styles.cartHeader}>
                <IconButton onClick={onClick}>
                    <Close />
                </IconButton>
                <Typography variant="h5">CART</Typography>

            </div>
            <Divider />
            <div className={styles.itemWrapper}>
                {
                    cart.length > 0 ?
                        cart.map(item => (
                            <CartItem
                                key={item.product_id}
                                item={item}
                            />
                        )) : <div>
                            <Typography variant="h5"> Cart is leer, kauf ma was</Typography>
                        </div>

                }
            </div>
            {
                cart.length > 0 && (
                    <>
                        <div className={styles.cartFooter}>
                            <Typography variant="h5">Total: {total}€</Typography>
                            <Link href="/checkout" style={{ outerWidth: "100%" }}><Button variant="contained" color="primary" >Checkout</Button></Link>
                        </div>
                        <Divider />
                    </>
                )
            }

        </div>
    )
}

export default Cart
