import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Drawer, IconButton, Badge, Typography, Divider } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import {useCart} from './../../lib/context/cart'
import Cart from './../Cart/Cart'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { itemCount } = useCart()
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.linkWrapper}>
                    <div className={styles.logowrapper}></div>
                    <Link href="/"><Typography variant="h5" className={styles.item}>Home</Typography></Link>
                    <Link href="/shop"><Typography variant="h5" className={styles.item}>Shop</Typography></Link>
                    <Link href="/about"><Typography variant="h5" className={styles.item}>About</Typography></Link>
                    <IconButton id={styles.cartbutton} onClick={toggle}>
                        <Badge color="secondary" badgeContent={itemCount} />
                        <ShoppingCart />
                    </IconButton>
                </div>

            </div>
            <Drawer variant="persistent" anchor="right" open={open}>
                <Cart
                    onClick={toggle}
                />
            </Drawer>

        </>



    )
}

export default Navbar
