import React, { useState, useEffect } from 'react'
import { Typography, LinearProgress, Paper, Divider, Card, CardContent, CardMedia, Grid } from '@material-ui/core'
import styles from './ProductFinderPage.module.css'

const fragen = [
    {
        frage: "Wo brennts denn?",
        antworten: [
            {
                titel: "Schwabbelbauch",
                imgurl: "https://placeimg.com/300/300/tech",
                value: "Du bist derart fett, unförmig und haarig das selbst Chewbacca vor dir wegläuft"
            },
            {
                titel: "Stinkefüße",
                imgurl: "https://placeimg.com/300/300/arch",
                value: "Du hast einen käsig-kotzig duftenden Strinkefuß der perversesten Sorte"
            },
            {
                titel: "Langweiler",
                imgurl: "https://placeimg.com/300/300/animals",
                value: "Du bist der langweiligste Bastard der jemals Fuß auf diese Erde gesetzt hat"
            }
        ]
    },
    {
        frage: "Wer ist schuld?",
        antworten: [
            {
                titel: "Merkel",
                imgurl: "https://placeimg.com/300/300/animals",
                value: "ist natürlich der CEO der Deutschland GmbH, Angelo Merkel!"
            },
            {
                titel: "Die Reptoloiden",
                imgurl: "https://placeimg.com/300/300/nature",
                value: "sind die Reptoloiden geführt von Bill Gates!"
            },
            {
                titel: "Deine Mutter",
                imgurl: "https://placeimg.com/300/300/people",
                value: "ist deine Mutter, wer denn auch sonst? "
            }
        ]
    },
    {
        frage: "Was machen wir jetzt?",
        antworten: [
            {
                titel: "Die Luft ganz lange anhalten",
                imgurl: "https://placeimg.com/300/300/nature",
                value: "die Luft anhalten, bis der Kopf platzt! Hat ja damals mit 4 Jahren immer gut geklappt!"
            },
            {
                titel: "Den Kopf in den Sand stecken",
                imgurl: "https://placeimg.com/300/300/arch",
                value: "den Kopf im Sand verstecken und hoffen das keiner in der Arschritze landet (unangenehm)"
            },
            {
                titel: "Dicke Bretter ballern",
                imgurl: "https://placeimg.com/300/300/animals",
                value: "ballern bis die Nase blutet und dann im K-Hole abtauchen, Ahoi!"
            }
        ]
    }
]

const ProductFinderPage = () => {
    const [progress, setProgess] = useState(0)
    const [current, setCurrent] = useState({
        frage: "Loading",
        antworten: []
    })
    const [counter, setCounter] = useState(0)
    const [answers, setAnswers] = useState([])

    const setCurrentQuestion = () => {
        if (counter < fragen.length) {
            setCurrent(fragen[counter])

        } else {
            setCurrent({
                frage: "Auswertung:",
                antworten: []
            })
        }

    }
    const calcProgress = () => {
        let progr = ((counter) / fragen.length) * 100
        console.log(progr)
        setProgess(progr)
    }
    const onClick = value => {
        let newAnswers = answers
        newAnswers.push(value)
        setAnswers(newAnswers)
        if (counter < fragen.length) {
            setCounter(counter + 1)

        }
    }

    useEffect(() => {
        setCurrentQuestion()
        calcProgress()
    }, [counter])

    return (
        <div className={styles.wrapper}>
            <Typography variant="h1">PRODUKTFINDER</Typography>
            <Paper className={styles.paper}>
                    <Typography variant="h3">{current.frage}</Typography>
                    <LinearProgress variant="determinate" value={progress} />
                    <Divider />
                    <div style={{height: "20px"}}/>
                    <Grid container spacing="5">
                        {
                            current.antworten.map(answer => (
                                <Grid item xs={4}>
                                    <Card className={styles.card} onClick={() => onClick(answer.value)}>
                                        <CardContent>
                                            <CardMedia
                                                image={answer.imgurl}
                                                style={{
                                                    height: "300px"
                                                }}
                                            />
                                            <Typography variant="h5">{answer.titel}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                    {
                        answers.length == fragen.length && (
                            <div className={styles.evaluation}>
                                <Typography variant="h5">{`${answers[0]} und schuld ${answers[1]} Darum werden wir ${answers[2]}`}</Typography>
                            </div>
                        )
                    }
            </Paper>

        </div>
    )
}

export default ProductFinderPage
