import React, { useState, useEffect } from 'react'
import { IconButton, Button, Typography, Divider } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
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
                    <ArrowBack />
                </IconButton>
                <Typography variant="h2">Cart</Typography>

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
                            <div className={styles.buttonWrapper}>
                                <Button variant="contained" color="secondary" onClick={() => removeAllItems()} >Clear</Button>
                                <Link href="/checkout"><Button variant="contained" color="primary" style={{ marginLeft: "10px" }}>Zahlen und verschwinden</Button></Link>
                            </div>
                        </div>
                        <Divider />
                    </>
                )
            }

        </div>
    )
}

export default Cart
