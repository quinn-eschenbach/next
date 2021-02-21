import Head from 'next/head'
import { Typography } from "@material-ui/core";
import {getProducts} from './../lib/api'
import HomePage from './../components/HomePage/HomePage'

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Next.js-Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomePage products={products}/>

      <footer>
      </footer>
    </>
  )
}

export const getStaticProps = async () => {
  const products = await getProducts()
  return{
    props:{
      products
    }
  }
}
