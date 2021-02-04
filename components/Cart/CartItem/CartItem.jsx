import React, {useState, useEffect} from 'react'
import{ Typography, Button, Card, CardActions, CardContent, CardMedia, CircularProgress } from '@material-ui/core'

import styles from './CartItem.module.css'

const CartItem = ({item, itemPlus, itemMinus, itemDelete}) => {
    const [isLoading, setIsLoading] = useState(false)

    const clickMinus = ()=> {
        itemMinus({product_id : `${item.product_id}`,quantity: item.quantity,key:  item.key })
        setIsLoading(true)
    }

    const clickPlus = () => {
        itemPlus(item.product_id)
        setIsLoading(true)
    }

    const clickRemove = () => {
        itemDelete(item.key)
        setIsLoading(true)
    }

    useEffect(() => {
        setIsLoading(false)
    }, [item])

    return (
        <Card className={styles.item}>
            <CardContent>
                <Typography variant="h5">{item.product_name}</Typography>
                <Typography variant="h5">{ item.line_subtotal }€</Typography>
            </CardContent>
            
            <CardActions>
                <CircularProgress style={{display: isLoading? 'block' : 'none '}}/>
                <Button type="button" size="small" onClick={clickMinus} disabled={isLoading} >-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick={clickPlus } disabled={isLoading} >+</Button>
                <Button variant="contained" type="button" color="secondary" onClick={clickRemove} disabled={isLoading} >Remove</Button>
                
            </CardActions>
        </Card>
    )
}

export default CartItem
