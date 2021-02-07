import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Grid, Typography, Divider, TextField, FormGroup, FormControlLabel, Checkbox, IconButton, Paper, Button } from '@material-ui/core'
import ProductTeaser from './../ProductTeaser/ProductTeaser'
import styles from './ShopPage.module.css'

const ShopPage = ({ products }) => {
    const [categories, setCategories] = useState([])
    const [activeFilters, setActiveFilters] = useState([]) //[ "category1", "category2"]
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
        if(search.length > 2){
            let bool = true
            if(!product.name.toLowerCase().includes(search.toLowerCase())){
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
        <div className={styles.wrapper}>
            <Typography variant="h1">SHOP</Typography >
            <div className={styles.filterWrapper}>
                <div className={styles.searchWrapper}>
                    <TextField className={styles.searchBar} id="search" label="Suche" variant="outlined" onChange={e => setSearch(e.target.value)}/>
                </div>
                <FormGroup row className={styles.checkBoxWrapper}>
                    <Link href="/productfinder"><Button variant="contained" color="secondary" style={{ marginRight: 10 }}>Passendes Produkt finden</Button></Link>
                    {
                        categories.map(category => (
                            <Paper className={styles.checkBox}>
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
            </div>
            <Divider />
            <div style={{ height: '10px' }} />
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
    )
}

export default ShopPage
