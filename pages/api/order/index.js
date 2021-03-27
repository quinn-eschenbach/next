import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export default async (req, res) => {
    const data = req.body
    const api = new WooCommerceRestApi({
        url: "https://ageuta-cosmetics.com/",
        consumerKey: process.env.WOO_KEY_PUBLIC,
        consumerSecret: process.env.WOO_KEY_SECRET,
        wpAPI: true,
        version: 'wc/v1'
    })    
    await api.post("orders", data)
    res.json({
        success: true
    })
}