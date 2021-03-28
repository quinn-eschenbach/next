import React, { useState, useEffect } from 'react'
import { Paper, Grid, Typography, Divider, Button } from "@material-ui/core"
import { AddShoppingCart } from '@material-ui/icons'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem/CarouselItem'
import ProductTeaser from './../ProductTeaser/ProductTeaser'
import styles from './HomePage.module.css'



const HomePage = ({ products }) => {
    const productsA = products.slice(1, 5)

    return (
        <>
            <Grid container className={styles.header}>
                <div style={{ margin: "18px" }}>
                    <Typography variant="h2" color="textPrimary">Skincare Made For People</Typography>
                    <Typography variant="body1" color="textPrimary" gutterBottom>Discover the new Age of beauty</Typography>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<AddShoppingCart />}>
                            Shop Now
                        </Button>
                    </div>
                </div>

            </Grid>
            <div style={{ marginLeft: "calc(100% /12)", marginRight: "calc(100% /12)" }}>
                <div style={{ height: "12vh" }} />
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant="h4" gutterBottom>OUR FAVORITES</Typography>
                </div>
                <Grid container spacing={3}>
                    {
                        productsA.map(product => <Grid key={product.id + "1"} item xs={3}><ProductTeaser key={product.id} product={product} /></Grid>)
                    }
                </Grid>
                <div style={{ height: "calc(12vh + 80px)" }} />

            </div>
            <div className={styles.newapproach}>
                <div className={styles.approachbackground} />
                <Typography variant="h1" color="textPrimary">Beauty inspired by real life.</Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>Ageuta is a new approach to beauty. It’s about fun and freedom and being OK with yourself today. We make intuitive, uncomplicated products designed to live with you.</Typography>
            </div>
            <div style={{ height: "12vh" }} />
            <div style={{
                display: "flex",
                justifyContent: "center",
                textTransform: "uppercase"
            }}>

                <Typography variant="h4" gutterBottom>Two approaches to healthy skin</Typography>
            </div>

            <div style={{ marginLeft: "calc(100% /12)", marginRight: "calc(100% /12)" }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={styles.aglaiateaser}>
                            <Typography variant="h5">FOR DRY AND DISGUSTING SKIN</Typography>
                            <Typography variant="h1" gutterBottom>Aglaia</Typography>
                            
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={styles.equillibrioteaser}>
                            <Typography variant="h5">FOR LIFELESS SKIN</Typography>
                            <Typography variant="h1"gutterBottom>Equillibrio</Typography>

                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}

export default HomePage
