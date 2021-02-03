import React, {useState, useEffect} from 'react'
import {getCartItems, getTotals, clearCart} from './../../lib/api'
import {IconButton, Button} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import styles from './Cart.module.css'

const Cart = ({onClick, cartInput}) => {  
    const [cart, setCart] = useState([])  
    const [total, setTotal] = useState(0)
    
    const fetchCart = async () =>{        
        const cartResponse = await getCartItems()

        let cartFormatted = []

        for (const [key, value] of Object.entries(cartResponse)) {
            cartFormatted.push(value)
        }
        setCart(cartFormatted)
    }

    const fetchTotal = async () =>{
        const data = await getTotals()
        console.log(data)
        setTotal(data)
    }

    useEffect(()=>{
        if(cartInput == undefined){
            fetchCart()
        }else{
            setCart(cartInput)
        }
        fetchTotal()
    },[])    

    return (
        <div className={styles.wrapper} >
            <IconButton onClick={onClick}>
                <ArrowBack/>
            </IconButton>
        <h1>Cart</h1>
         {
            cart.map(item =>(
                <p>{item.product_name} x{item.quantity}</p>
            ))
         }
         <div>
             <h4>Total: {total.total}</h4>
            <Button onClick={()=> clearCart()}>Clear</Button>
         </div>
        </div>
    )
}

export default Cart
