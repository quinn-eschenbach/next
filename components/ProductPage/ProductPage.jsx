import React, { useEffect, useState } from 'react'
import { Button, Typography, Grid, Snackbar, Paper } from '@material-ui/core'
import { Check } from "@material-ui/icons";
import Carousel from '@brainhubeu/react-carousel'
import { useCart } from './../../lib/context/cart'
import styles from './ProductPage.module.css'

const ProductPage = ({ product }) => {
    const [isSnack, setIsSnack] = useState(false)
    const { addItem } = useCart()

    const toggleSnack = () => {
        setIsSnack(!isSnack)
    }

    return (
        <>
        <div style={{ height: 80 }} />
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={isSnack}
                autoHideDuration={4000}
                onClose={toggleSnack}
            >
                <Paper className={styles.snackbar} variant="outlined" square>
                    <Check/>
                    <Typography variant="body1">
                        {`${product.name} hinzugefügt`}
                    </Typography>                    
                </Paper>
            </Snackbar>
            <main>
                <Typography variant="h1">{product.name}</Typography>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Carousel plugins={['arrows']}>
                            {
                                product.images.map(image => (
                                    <img key={image} src={image.src} />
                                ))
                            }
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/*<div dangerouslySetInnerHTML={{ __html: product.description }} />*/}
                        <Button variant="contained" color="primary" onClick={() => { toggleSnack(); addItem(product.id) }}>Kaufen</Button>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}

export default ProductPage
