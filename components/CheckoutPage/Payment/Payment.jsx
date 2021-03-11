import React, { useEffect } from 'react'
import Router from 'next/router'
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button, Typography } from "@material-ui/core"
import { ExpandMore } from '@material-ui/icons'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useCart } from "./../../../lib/context/cart"
import { useAdress } from "./../../../lib/context/adress"
import styles from './Payment.module.css'

const Payment = ({ setValid }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { total, cart, removeAllItems} = useCart()
    const {fname, lname, adress_line_1, adress_line_2, city, state_, postcode, country, validation} = useAdress()

    useEffect(()=>{
        setValid(false)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        console.log(paymentMethod)
        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post(`api/payment`, {
                    amount: total.replace('.',''),
                    id
                })
                if (response.data.success) {
                    const data = {
                        payment_method: "stripe",
                        payment_method_title: "Stripe Credit Card",
                        set_paid: true,
                        billing: {
                            first_name: fname,
                            last_name: lname,
                            address_1: adress_line_1,
                            address_2: adress_line_2,
                            city: city,
                            state: state_,
                            postcode: postcode,
                            country: "DE",
                        },
                        shipping: {
                            first_name: fname,
                            last_name: lname,
                            address_1: adress_line_1,
                            address_2: adress_line_2,
                            city: city,
                            state: state_,
                            postcode: postcode,
                            country: "DE",
                        },
                        line_items: cart,
                        shipping_lines: [
                            {
                                method_id: "flat_rate",
                                method_title: "Flat Rate",
                                total: "0"
                            }
                        ]
                    }
                    axios.post("api/order", data)
                    removeAllItems()
                    Router.push("/thankyou")
                }
                else {
                    alert("PAyment errrrrorororo")
                }
            }
            catch (error) { 
                console.log(error)
            }
        }
    }

    return (
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
                        <Button variant="contained" color="secondary" onClick={e => handleSubmit(e)}>Bezahlen</Button>
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
    )
}

export default Payment
