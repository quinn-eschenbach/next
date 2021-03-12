import React from 'react'
import Stripe from "stripe"
import cookieCutter from 'cookie-cutter'
import Navbar from './../components/Navbar/Navbar'
import CheckoutPage from './../components/CheckoutPage/CheckoutPage'

const checkout = () => {
    return (
        <>
            <Navbar />
            <main>
                <CheckoutPage />
            </main>
        </>
    )
}

export default checkout