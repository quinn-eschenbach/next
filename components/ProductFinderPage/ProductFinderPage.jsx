import React, {useState} from 'react'
import {Typography, LinearProgress, Paper, Divider } from '@material-ui/core'
import styles from './ProductFinderPage.module.css'

const fragen = [
    {
        frage: "Wo brennts denn?",
        antworten:[
            {
                titel: "Schwabbelbauch",
                imgurl: "https://placeimg.com/300/300/any",
                value: "schwabbelbauch"
            },
            {
                titel: "Stinkefüße",
                imgurl: "https://placeimg.com/300/300/any",
                value: "strinkefuß"
            },
            {
                titel: "Langweiler",
                imgurl: "https://placeimg.com/300/300/any",
                value: "langweiler"
            }
        ]
    },
    {
        frage: "Wer ist schuld?",
        antworten:[
            {
                titel: "Merkel",
                imgurl: "https://placeimg.com/300/300/any",
                value: "merkel"
            },
            {
                titel: "Die Reptoloiden",
                imgurl: "https://placeimg.com/300/300/any",
                value: "reptoloiden"
            },
            {
                titel: "Deine Mutter",
                imgurl: "https://placeimg.com/300/300/any",
                value: "mutter"
            }
        ]
    },
    {
        frage: "Was machen wir jetzt?",
        antworten:[
            {
                titel: "Die Luft ganz lange anhalten",
                imgurl: "https://placeimg.com/300/300/any",
                value: "luft-anhalten"
            },
            {
                titel: "Den Kopf in den Sand stecken",
                imgurl: "https://placeimg.com/300/300/any",
                value: "kopf-sand-stecken"
            },
            {
                titel: "Dicke Bretter ballern",
                imgurl: "https://placeimg.com/300/300/any",
                value: "ballern"
            }
        ]
    }
]

const ProductFinderPage = () => {
    const [progress, setProgess] = useState(0)
    const [current, setCurrent] = useState({})
    const [counter, setCounter] = useState(0)

    const setCurrentQuestion = () =>{
        setCurrent()
    }


    return (
        <div className={styles.wrapper}>
             <Typography variant="h1">PRODUKTFINDER</Typography>
            <Paper className={styles.paper}>                
                <Typography variant="h3">Frage?</Typography>
                <LinearProgress variant="determinate" value={progress} />
                <Divider />

            </Paper>
           
        </div>
    )
}

export default ProductFinderPage
