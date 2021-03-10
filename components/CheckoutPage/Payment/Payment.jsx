import React, {useEffect} from 'react'
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button, Typography } from "@material-ui/core"
import { ExpandMore } from '@material-ui/icons'
import styles from './Payment.module.css'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement } from '@stripe/react-stripe-js'

const stripePromise = loadStripe("pk_test_51IT1gZHKZIrCsD6HfywGCBThiIfrIthJ5Rrc2U3zb1n4WZTmrt2qzWUF3Bb6qNsOgCY8c24nt88thMQUQq9dLb8U001dGMwHoV")

const Payment = ({ setValid }) => {

    useEffect(() => {
        setValid(false)
    }, [])

    return (
        <Elements stripe={stripePromise}>
            <div className={styles.wrapper}>
                <Typography variant="h3">Zahl Geld jetzt du Otto</Typography>
                <div className={styles.accordionwrapper}>
                    <Accordion variant="outlined" square>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>
                                Kreditkarte
                     </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <CardElement className={styles.cardwrapper} />
                        </AccordionDetails>
                        <AccordionActions>
                            <Button variant="contained" color="secondary">Bezahlen</Button>
                        </AccordionActions>
                    </Accordion>
                    <Accordion variant="outlined" square>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>
                                PayPal
                     </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            TODO PAYPAL
                </AccordionDetails>
                        <AccordionActions>
                            <Button variant="contained" color="secondary">Bezahlen</Button>
                        </AccordionActions>
                    </Accordion>
                    <Accordion variant="outlined" square>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>
                                Bankverbindung
                     </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            TODO Bankverbindung
                </AccordionDetails>
                        <AccordionActions>
                            <Button variant="contained" color="secondary">Bezahlen</Button>
                        </AccordionActions>
                    </Accordion>
                </div>
            </div>
        </Elements>
    )
}

export default Payment
