import React, { useState, useEffect } from 'react'
import { Typography, Button, Paper, IconButton, CircularProgress } from '@material-ui/core'
import { Clear, Add, Remove } from "@material-ui/icons"
import { useCart } from './../../../lib/context/cart'
import styles from './CartItem.module.css'

const CartItem = ({ item }) => {
    const { addItem, removeItem, deleteItem, isLoading } = useCart()

    return (
        <Paper variant="outlined" className={styles.item} square >
            <Typography variant="h5">{item.product_name}:&nbsp;</Typography>
            <Typography variant="h5">{item.line_subtotal}€ </Typography>
            <div className={styles.buttonwrapper}>
                <IconButton onClick={() => removeItem(item.product_id)} disabled={isLoading}>
                    <Remove />
                </IconButton>
                <Typography variant="h5">{item.quantity}</Typography>
                <IconButton onClick={() => addItem(item.product_id)} disabled={isLoading}>
                    <Add />
                </IconButton>
                <IconButton onClick={() => deleteItem(item.product_id)} disabled={isLoading}>
                    <Clear />
                </IconButton>
            </div>
        </Paper>
    )
}

export default CartItem
