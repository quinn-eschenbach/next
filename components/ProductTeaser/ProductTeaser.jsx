import React from 'react'
import{ Typography, Divider, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import Link from 'next/link'
import styles from './ProductTeaser.module.css'

const ProductTeaser = ({product}) => {


    const link = '/product/' + product.id
    return (
        <>
            <Link href={link}>
                <Card className={styles.wrapper} variant="outlined" square>                    
                    <CardContent>
                        <CardMedia image={product.images[0].src} id={styles.image}/>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        
                        <Typography variant="subtitle2">
                            200ml | {product.price},00€
                        </Typography>
                    </CardContent>
                </Card>            
            </Link>            
        </>
        
    )
}

export default ProductTeaser
