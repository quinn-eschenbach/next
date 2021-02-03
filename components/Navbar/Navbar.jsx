import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Drawer, IconButton, Badge } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {getItemCount, getCartItems, getTotals, clearCart as clearCartApi} from './../../lib/api'
import Cart from './../Cart/Cart'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [cart, setCart] = useState([])  
    const [total, setTotal] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    const fetchNewCart = ()=>{
        fetchCart()
        fetchTotal()
        fetchCartCount()
    }
    
    const fetchCart = async () =>{        
        const cartResponse = await getCartItems()
        let cartFormatted = []
        for (const [key, value] of Object.entries(cartResponse)) {
            cartFormatted.push(value)
        }        
        setCart(cartFormatted)
    }
    
    const fetchCartCount = async () =>{
        const count = await getItemCount()
        setCartCount(count)
    }


    const fetchTotal = async () =>{
        const data = await getTotals()
        setTotal(data)
    }

    const clearCart = async () =>{
        clearCartApi().then(()=>{
            fetchNewCart()
        })
        
    }

    const toggle = () => {
        setOpen(!open)
    }

    
    useEffect(()=>{
        fetchNewCart()
    },[])


    return (
        <>
            <div className={styles.wrapper}>
                <ul>
                    <li><h3 className={styles.item}><Link href="/">Home</Link></h3></li>
                    <li><h3 className={styles.item}><Link href="/shop">Shop</Link></h3></li>
                    <li><h3 className={styles.item}><Link href="/about">About</Link></h3></li>
                </ul>
                <IconButton className={styles.cartbutton} onClick={toggle}>
                    <Badge color="secondary" badgeContent={cartCount}/>
                    <ShoppingCart />
                </IconButton>
                
            </div>
            <Drawer variant="persistent" anchor="right"  open={open}> 
                <Cart onClick={toggle} cart={cart} clearCart={clearCart} total={total}/>
            </Drawer>
        </>



    )
}

export default Navbar
