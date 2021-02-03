import React from 'react'
import{ Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

const CartItem = ({item}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{item.product_name}</Typography>
                <Typography variant="h5">{ item.line_subtotal }€</Typography>
            </CardContent>
            <CardActions>
                <Button type="button" size="small">-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" >+</Button>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
