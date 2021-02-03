import React from 'react'
import Link from 'next/link'
import styles from './ProductTeaser.module.css'

const ProductTeaser = ({product}) => {


    const link = '/product/' + product.id
    return (
        <>
            <Link href={link}>
                <div className={styles.wrapper}>
                    <h1>{product.name}</h1>
                    <img className={styles.image} src={`${product.images[0].src}`}  />
                    {/* <div dangerouslySetInnerHTML={{__html:product.short_description}}></div> */}
                </div>
            
            </Link>            
        </>
        
    )
}

export default ProductTeaser
