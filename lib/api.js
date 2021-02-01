import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import { serverRuntimeConfig } from '../next.config'

let products = []

const fetchProcuts = async () => {
    //console.log(serverRuntimeConfig.WOO_KEY_PUBLIC)
    const api = new WooCommerceRestApi({
      url: "https://ageuta-cosmetics.com/",
      consumerKey: serverRuntimeConfig.WOO_KEY_PUBLIC,
      consumerSecret: serverRuntimeConfig.WOO_KEY_SECRET,
      wpAPI: true,
    version: 'wc/v1'
    });
    const res = await api.get('products', {per_page: 100})
    products = res.data
    return res.data
}

export async function getProducts() {
    if(products.length == 0){
      console.log('data fetched from server')
      return fetchProcuts()
    }
    else{
      console.log('data fetched from local')
      return products
    } 
}

