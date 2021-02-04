import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import CoCart from '@cocart/cocart-rest-api'
import cookieCutter from 'cookie-cutter'
import { v4 as uuidv4 } from 'uuid'




//################################# WOO API ##########################################
let products = []

const fetchProcuts = async () => {
    //console.log(serverRuntimeConfig.WOO_KEY_PUBLIC)
    const api = new WooCommerceRestApi({
      url: "https://ageuta-cosmetics.com/",
      consumerKey: process.env.WOO_KEY_PUBLIC,
      consumerSecret: process.env.WOO_KEY_SECRET,
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

//################################# CART API ##########################################
const cartApi = new CoCart({
  url: 'https://ageuta-cosmetics.com',
})

const getCartKeyFromCookie = ()=>{
  const cookie = cookieCutter.get('agueta_cart_id')
  console.log(cookie)
  if(cookie == undefined){
    const newCartId = uuidv4().toString()
    cookieCutter.set('agueta_cart_id', newCartId)
    return newCartId
  }
  return cookie
}

export async function getCartItems(){
    const request = await cartApi.get(`get-cart?cart_key=${getCartKeyFromCookie()}`)
    return request.data
}

export async function addCartItem( item ){
  const response = await cartApi.post(`add-item?cart_key=${getCartKeyFromCookie()}`, item)
  console.log(response)
}

export async function clearCart(){
  const response = await cartApi.post(`clear?cart_key=${getCartKeyFromCookie()}`)
  console.log(response)
}

export async function getTotals(){
  const request = await cartApi.get(`totals?cart_key=${getCartKeyFromCookie()}`)
  console.log(request.data)
  return request.data
}

export async function getItemCount(){
  const request = await cartApi.get(`count-items?cart_key=${getCartKeyFromCookie()}`)
  console.log(request)
  return request.data
}

export async function deleteCartItem(item_key){
  const request = await cartApi.delete(`item?cart_item_key=${item_key}&cart_key=${getCartKeyFromCookie()}`)
  console.log(request)
}