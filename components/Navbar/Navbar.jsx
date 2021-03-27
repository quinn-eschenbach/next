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

    const [backgroundColor, setBackgroundColor] = useState('transparent')

    const toggle = () => {
        setOpen(!open)
    }    

    const setScrollListener = () => {
        window.onscroll = () => scrollFunction();
    }

    const scrollFunction = () => {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            setBackgroundColor('#fff')
          } else {
            setBackgroundColor('transparent')
          }
    }
    
    useEffect(() => {
        setScrollListener()
    }, [])
    return (
        <>
            <div className={styles.wrapper} style={{backgroundColor: backgroundColor}}>
                <div className={styles.linkWrapper}>
                    <div className={styles.logowrapper}></div>
                    <Link href="/"><Typography variant="h5" className={styles.item}>HOME</Typography></Link>
                    <Link href="/shop"><Typography variant="h5" className={styles.item}>SHOP</Typography></Link>
                    <Link href="/about"><Typography variant="h5" className={styles.item}>ABOUT</Typography></Link>
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
