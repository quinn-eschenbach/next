import Head from 'next/head'
import {getProducts} from './../lib/api'
import Navbar from './../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js-Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1>HOMEPAGE ALTERRR</h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
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
