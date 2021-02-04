import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Drawer, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { getItemCount, getCartItems, getTotals, clearCart as clearCartApi, addCartItem, deleteCartItem } from './../../lib/api'
import Cart from './../Cart/Cart'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    const fetchNewCart = () => {
        fetchCart()
        fetchTotal()
        fetchCartCount()
    }

    const fetchCart = async () => {
        const cartResponse = await getCartItems()
        let cartFormatted = []
        for (const [key, value] of Object.entries(cartResponse)) {
            cartFormatted.push(value)
        }
        setCart(cartFormatted)
    }

    const fetchCartCount = async () => {
        const count = await getItemCount()
        setCartCount(count)
    }


    const fetchTotal = async () => {
        const data = await getTotals()
        setTotal(data)
    }

    const clearCart = async () => {
        clearCartApi().then(() => {
            fetchNewCart()
        })

    }

    const itemPlus = async (id) => {
        const item = {
            product_id: `${id}`,
            quantity: 1
        }
        console.log(item)
        await addCartItem(item)
        fetchNewCart()
    }

    const itemMinus = async ({ product_id, quantity, key }) => {
        if (quantity > 1) {
            const itemAdd = {
                product_id: `${product_id}`,
                quantity: quantity - 1
            }
            await deleteCartItem(key)
            await addCartItem(itemAdd)
            fetchNewCart()
        }
        else {
            await deleteCartItem(key)
            fetchNewCart()
        }


    }

    const itemDelete = async ( key ) => {
        await deleteCartItem(key)
        fetchNewCart()
    }


    const toggle = () => {
        setOpen(!open)
    }


    useEffect(() => {
        fetchNewCart()
    }, [])


    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.linkWrapper}>
                    <Link href="/"><Typography variant="h5" className={styles.item}>Home</Typography></Link>
                    <Link href="/shop"><Typography variant="h5" className={styles.item}>Shop</Typography></Link>
                    <Link href="/about"><Typography variant="h5" className={styles.item}>About</Typography></Link>
                </div>
                <IconButton className={styles.cartbutton} onClick={toggle}>
                    <Badge color="secondary" badgeContent={cartCount} />
                    <ShoppingCart />
                </IconButton>

            </div>
            <Drawer variant="persistent" anchor="right" open={open}>
                <Cart
                    onClick={toggle}
                    cart={cart}
                    clearCart={clearCart}
                    total={total}
                    itemPlus={itemPlus}
                    itemMinus={itemMinus}
                    itemDelete={itemDelete} />
            </Drawer>
        </>



    )
}

export default Navbar
