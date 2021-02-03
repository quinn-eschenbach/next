import React from 'react'
import{ Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import Link from 'next/link'
import styles from './ProductTeaser.module.css'

const ProductTeaser = ({product}) => {


    const link = '/product/' + product.id
    return (
        <>
            <Link href={link}>
                <Card className={styles.wrapper}>
                    
                    <CardContent>
                        <CardMedia image={product.images[0].src} id={styles.image}/>
                        <Typography variant="h5">
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}€
                        </Typography>
                        <Typography variant="subtitle2">
                        {
                           product.categories.map(category=>(
                               category.name + " "
                           )) 
                        }
                        </Typography>
                    </CardContent>
                </Card>

                {/* <div className={styles.wrapper}>
                    <h1>{product.name}</h1>
                    <img className={styles.image} src={`${product.images[0].src}`}  />
                    {<div dangerouslySetInnerHTML={{__html:product.short_description}}></div> }
                </div> */}
            
            </Link>            
        </>
        
    )
}

export default ProductTeaser
