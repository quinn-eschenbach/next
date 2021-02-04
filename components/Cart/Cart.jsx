import React, { useState, useEffect } from 'react'
import { IconButton, Button, Typography, Divider } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'

const Cart = ({ onClick, cart, clearCart, total, itemPlus, itemMinus, itemDelete }) => {

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
                                key={item.id}
                                item={item}
                                itemPlus={itemPlus}
                                itemMinus={itemMinus}
                                itemDelete={itemDelete} />
                        )) : <div>
                            <Typography variant="h5"> Cart is leer, kauf ma was</Typography>
                        </div>

                }
            </div>
            <Divider />
            <div className={styles.cartFooter}>

                <Typography variant="h5">Total: {total.total}€</Typography>
                <div className={styles.buttonWrapper}>
                    <Button variant="contained" color="secondary" onClick={clearCart} >Clear</Button>
                    <Button variant="contained" color="primary" style={{ marginLeft: "10px" }}>Zahlen und verschwinden</Button>
                </div>
               
            </div>
        </div>
    )
}

export default Cart
