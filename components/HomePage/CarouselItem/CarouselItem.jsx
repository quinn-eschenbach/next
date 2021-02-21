import React from 'react'
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import styles from './CarouselItem.module.css'

const CarouselItem = ({ title, subtitle, imgUrl, callToAction }) => {
    return (
        <>
            <Paper className={styles.paper} style={{ backgroundImage: `url(${imgUrl})` }} variant="outlined" square>
                <div className={styles.wrapper}>
                    <Typography variant="h1">{title}</Typography>
                    <Typography variant="h5" gutterBottom>{subtitle}</Typography>
                    {callToAction && <div><Button color="secondary" variant="contained">{callToAction}</Button></div>}
                </div>
            </Paper>
        </>
    )
}

export default CarouselItem
