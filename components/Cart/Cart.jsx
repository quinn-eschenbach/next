import React, {useState, useEffect} from 'react'
import {IconButton, Button} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'

const Cart = ({onClick, cart, clearCart, total}) => {  

    return (
        <div className={styles.wrapper} >
            <IconButton onClick={onClick}>
                <ArrowBack/>
            </IconButton>
        <h1>Cart</h1>
         {
            cart.map(item =>(
               <CartItem key={item.id} item={item}/>
            ))
         }
         <div>
             <h4>Total: {total.total}</h4>
            <Button variant="contained" color="secondary" onClick={clearCart} >Clear</Button>
            <Button variant="contained" color="primary">Zahlen und verschwinden</Button>
         </div>
        </div>
    )
}

export default Cart
