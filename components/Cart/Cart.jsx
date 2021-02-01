import React, {useState} from 'react'
import {IconButton} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import styles from './Cart.module.css'

const Cart = ({onClick}) => {  

    return (
        <div className={styles.wrapper} >
            <IconButton onClick={onClick}>
                <ArrowBack/>
            </IconButton>
        <h1>Cart</h1>
        </div>
    )
}

export default Cart
