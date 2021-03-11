const stripe = require("stripe")(process.env.STRIPE_SECRET)

export default async (req, res) => {
    const { amount, id } = req.body
    console.log(req.body)
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "Agueta " + Date.now(),
            payment_method: id,
            confirm: true
        })
        console.log("Payment Success", payment)
        res.json({
            success: true
        })
    } catch (error) {
        console.log("Payment Error", error)
        res.json({
            success: false
        })
    }
}