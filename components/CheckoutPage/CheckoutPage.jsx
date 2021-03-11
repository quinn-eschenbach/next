import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Typography, Paper, Button } from '@material-ui/core'
import { ProvideAdress } from "./../../lib/context/adress"
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import Adress from './Adress/Adress'
import Order from './Order/Order'
import Payment from './Payment/Payment'
import Success from './Success/Success'
import styles from './CheckoutPage.module.css'

const stripePromise = loadStripe("pk_test_51IT1gZHKZIrCsD6HfywGCBThiIfrIthJ5Rrc2U3zb1n4WZTmrt2qzWUF3Bb6qNsOgCY8c24nt88thMQUQq9dLb8U001dGMwHoV")

const CheckoutPage = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [isFormValid, setIsFormValid] = useState(true)

    const onNext = () => {
        const currentStep = activeStep
        if (activeStep < 3) {
            setActiveStep(currentStep + 1)
        }
    }

    const onBack = () => {
        const currentStep = activeStep
        if (activeStep > 0) {
            setActiveStep(currentStep - 1)
        }
    }

    const renderElements = (i) => {
        switch (i) {
            case 0: return <Order />
            case 1: return <Adress setValid={setIsFormValid} />
            case 2: return (
                <Elements stripe={stripePromise}>
                    <Payment setValid={setIsFormValid} />
                </Elements>
            )
            case 3: return <Success setValid={setIsFormValid} />
        }
    }

    return (
        <ProvideAdress>
            <div style={{ height: "20px" }} />
            <Paper variant="outlined" square className={styles.wrapper}>
                <Stepper activeStep={activeStep}>
                    <Step key="1">
                        <StepLabel>
                            Bestellung überprüfen
                        </StepLabel>
                    </Step>
                    <Step key="2">
                        <StepLabel>
                            Adresse eingeben
                        </StepLabel>
                    </Step>
                    <Step key="3">
                        <StepLabel>
                            Bezahlen
                        </StepLabel>
                    </Step>
                </Stepper>
                <div className={styles.formwrapper}>
                    {
                        renderElements(activeStep)
                    }
                </div>
                {
                    !(activeStep === 3) && (
                        <div className={styles.buttonwrapper}>
                            <div className={styles.button}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => onBack()}
                                    disabled={activeStep < 1}
                                >Zurück</Button>
                            </div>
                            <div className={styles.button}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => onNext()}
                                    disabled={!isFormValid}
                                >Weiter</Button>
                            </div>
                        </div>
                    )
                }
            </Paper>
        </ProvideAdress>
    )
}

export default CheckoutPage
