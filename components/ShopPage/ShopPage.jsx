import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Grid, Typography, Divider, TextField, FormGroup, FormControlLabel, Checkbox, IconButton, Paper, Button } from '@material-ui/core'
import ProductTeaser from './../ProductTeaser/ProductTeaser'
import styles from './ShopPage.module.css'

const ShopPage = ({ products }) => {
    const [categories, setCategories] = useState([])
    const [activeFilters, setActiveFilters] = useState([]) 
    const [search, setSearch] = useState("")

    const router = useRouter()

    const fetchCategories = () => {
        let cat = []
        products.map(product => {
            product.categories && product.categories.map(it => {
                if (!cat.includes(it.name)) {
                    cat.push(it.name)
                }
            })
        })
        setCategories(cat)
    }

    const isFilterResult = product => {
        if (activeFilters.length > 0) {
            let bool = true
            activeFilters.map(filter => {
                const stringArray = categoriesToStringArray(product.categories)
                if (!stringArray.includes(filter)) {
                    bool = false
                }
            })
            return bool
        } else {
            return true
        }
    }

    const isSearchResult = product => {
        if (search.length > 2) {
            let bool = true
            if (!product.name.toLowerCase().includes(search.toLowerCase())) {
                bool = false
            }
            return bool
        }
        else return true
    }

    const categoriesToStringArray = categories => {
        let array = []
        categories.map(cat => {
            array.push(cat.name)
        })
        return array
    }


    const filterClicked = (event, filter) => {
        if (event.target.checked) {
            const newFilters = activeFilters
            newFilters.push(filter)
            setActiveFilters(newFilters)
        } else {
            const newFilters = activeFilters
            setActiveFilters(newFilters.filter(item => item !== filter))
        }
        router.replace('/shop')
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    return (
        <>
            <div style={{ height: 80 }} />
            <Grid className={styles.wrapper} container>
                <Grid item xs={3}>
                    <Paper className={styles.filterWrapper} variant="outlined" square>
                        <div className={styles.searchWrapper}>
                            <TextField id="search" label="Suche" onChange={e => setSearch(e.target.value)} />
                        </div>
                        <FormGroup >

                            {
                                categories.map(category => (
                                    <Paper key={category} className={styles.checkBox} variant="outlined" square>
                                        <FormControlLabel
                                            label={category}
                                            control={
                                                <Checkbox onClick={e => filterClicked(e, category)} />
                                            }
                                        />
                                    </Paper>
                                ))
                            }

                        </FormGroup>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={styles.teaser} variant="outlined" square style={{ background:"#9D0625"}}>
                        <Grid container>
                            <Grid item xs={6} className={styles.teasercontent}>
                                <Typography variant="h1">Shop</Typography>
                                <Typography variant="body1" gutterBottom>Entdecke Hautverträgliche Pflegeprodukte oder nutze useren einzigartigen Produktefinder:</Typography>
                                <Link href="/productfinder"><Button variant="contained" color="secondary" >jetzt Passendes Produkt finden</Button></Link>
                            </Grid>
                            <Grid item xs={6} >
                                <div className={styles.teaserimage}></div>
                            </Grid>
                        </Grid>

                    </Paper>

                    <div className={styles.wrapperproducts}>

                        <Grid container spacing={3} className={styles.productWrapper}>
                            {products.map(product => {
                                if (isFilterResult(product) && isSearchResult(product)) {
                                    return (
                                        <Grid key={product.id} item xs={4}>
                                            <ProductTeaser product={product} />
                                        </Grid>
                                    )
                                }
                            })}
                        </Grid>
                    </div>

                </Grid>



            </Grid>
        </>
        
    )
}

export default ShopPage
