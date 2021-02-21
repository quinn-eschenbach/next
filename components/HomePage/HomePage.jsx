import React from 'react'
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem/CarouselItem'
import ProductTeaser from './../ProductTeaser/ProductTeaser'
import styles from './HomePage.module.css'

const silderData = [
    {
        title: "Agueta",
        subTitle: "entdecke die natürliche Schönheit Italiens",
        imgSrc: "https://ageuta-cosmetics.com/wp-content/uploads/2021/01/cute-girl-with-beautiful-face_144627-5187.jpg",
        callToAction: false
    },
    {
        title: "Aglaia",
        subTitle: "für junge Hüpfer",
        imgSrc: "https://ageuta-cosmetics.com/wp-content/uploads/2020/12/Image-cosmetics-8.jpg",
        callToAction: "jetzt Aglaia endtecken"
    },
    {
        title: "Equilibrio",
        subTitle: "für alte Schachteln",
        imgSrc: "https://ageuta-cosmetics.com/wp-content/uploads/2020/12/Image-cosmetics-9.jpg",
        callToAction: "Equilibrio draufschmieren"
    },
]

const HomePage = ({ products }) => {
    const productsA = products.slice(1, 3)
    const productsE = products.slice(3, 5)

    return (
        <>
            <div style={{ height: 20 }} />
            <Carousel
                autoPlay={false}
            >
                {
                    silderData.map(data => <CarouselItem key={data.title} title={data.title} subtitle={data.subTitle} imgUrl={data.imgSrc} callToAction={data.callToAction} />)
                }
            </Carousel>

            <Divider />
            <div style={{ height: 20 }} />
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Grid container spacing={3}>
                        {
                            productsA.map(product => <Grid item xs={4}><ProductTeaser product={product} /></Grid>)
                        }
                        <Grid item xs={4} className={styles.griditem}>
                            <div className={styles.aglaia}>
                                <div className={styles.innerborder}>
                                    <Typography variant="h1">Aglaia</Typography>
                                </div>

                            </div>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                    <Grid item xs={4} className={styles.griditem}>
                            <div className={styles.equilibrio}>
                                <div className={styles.innerborder}>
                                    <Typography variant="h1">Equilibrio</Typography>
                                </div>

                            </div>
                        </Grid>
                        {
                            productsE.map(product => <Grid item xs={4}><ProductTeaser product={product} /></Grid>)
                        }
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default HomePage
