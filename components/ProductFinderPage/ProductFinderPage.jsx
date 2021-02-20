import React, { useState, useEffect } from 'react'
import { Typography, LinearProgress, Paper, Divider, Card, CardContent, CardMedia, Grid } from '@material-ui/core'
import styles from './ProductFinderPage.module.css'
import { produkte } from './../../lib/produkteMock.json'
import { types } from './../../lib/finderDataMock.json'


const ProductFinderPage = ({ productsProps }) => {
    const [products, setProducts] = useState(produkte)
    const [currentQuestion, setCurrentQuestion] = useState("Loading")
    const [currentAnswers, setCurrentAnswers] = useState(["Loading"])
    const [asked, setAsked] = useState(["problem"])

    const getQuestion = () => {
        if (products.length > 1) {
            let type = getType()

            if (products.length < 4) {
                type = "problem"
            }

            types.map(item => {
                if (item.name == type) {
                    setCurrentQuestion(item.question)
                    findAnswers(type)
                    pushAsked(type)
                }
            })
        } else {
            alert(`Das Perfekte Produkt für Sie: ${products[0].name}`)
            location.reload()
        }

    }

    const getType = () => {
        let type
        products[0].categories.slice(0).reverse().map(cat => {
            if (!asked.includes(cat.type)) {
                type = cat.type
                return
            }
        })
        return type
    }

    const pushAsked = type => {
        const cache = asked
        cache.push(type)
        setAsked(cache)
    }

    const filterProducts = filter => {
        const filteredProducts = []
        products.map(product => {
            product.categories.map(cat => {
                if (cat.values.includes(filter)) {
                    filteredProducts.push(product)
                }
            })
        })
        setProducts(filteredProducts)
    }

    const findAnswers = type => {
        const answerArray = []
        products.map(product => {
            product.categories.map(cat => {
                if (cat.type == type && answerArray.length < 3) {
                    cat.values.map(val => {
                        if (!answerArray.includes(val)) {
                            answerArray.push(val)
                        }
                    })
                }
            })
        })
        setCurrentAnswers(answerArray)
    }

    const getImage = () => "https://picsum.photos/300"

    useEffect(() => {
        getQuestion()
    }, [products])

    return (
        <div className={styles.wrapper}>
            <Typography variant="h1">PRODUKTFINDER</Typography>
            <Paper className={styles.paper}>
                <Typography variant="h3">{currentQuestion}</Typography>
                <LinearProgress variant="determinate" value={10} />
                <Divider />
                <div style={{ height: "20px" }} />
                <Grid container spacing={5}>
                    {
                        currentAnswers.map(answer => (
                            <Grid item xs={4}>
                                <Card className={styles.card} onClick={() => filterProducts(answer)}>
                                    <CardContent>
                                        <CardMedia
                                            image={getImage()}
                                            style={{
                                                height: "300px"
                                            }}
                                        />
                                        <Typography variant="h5">{answer}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>

            </Paper>
            <table style={{width:"100%"}}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Hauttyp</th>
                        <th>Bereich</th>
                        <th>Alter</th>
                        <th>Produktart</th>
                        <th>Problem</th>
                    </tr>
                    {
                        products.map(product => (
                            <tr>
                                <td>{product.name}</td>
                                {
                                    product.categories.map(cat => <td> {cat.values.join(',')}</td>)
                                }

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductFinderPage
