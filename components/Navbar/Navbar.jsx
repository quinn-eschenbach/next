import React, { useState } from 'react'
import Link from 'next/link'
import { Drawer, IconButton } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import Cart from './../Cart/Cart'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className={styles.wrapper}>
                <ul>
                    <li><h3 className={styles.item}><Link href="/">Home</Link></h3></li>
                    <li><h3 className={styles.item}><Link href="/shop">Shop</Link></h3></li>
                    <li><h3 className={styles.item}><Link href="/about">About</Link></h3></li>
                </ul>
                <IconButton className={styles.cartbutton} onClick={toggle}>
                    <ShoppingCart />
                </IconButton>
                
            </div>
            <Drawer variant="persistent" anchor="right"  open={open}> 
                <Cart onClick={toggle}/>
            </Drawer>
        </>



    )
}

export default Navbar
