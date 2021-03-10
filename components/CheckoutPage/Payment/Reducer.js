import React, { useEffect } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const Reducer = () => {
    const [paymentValid, setPaymentValid] = useEffect(false)

    const reducer = (type, event) => {
        
    }

    return {
        reducer,
        paymentValid
    }
}

export default Reducer
