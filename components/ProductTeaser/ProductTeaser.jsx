import React from 'react'
import styles from './ProductTeaser.module.css'

const ProductTeaser = ({product}) => {


    const link = '/product/' + product.id
    return (
        < >
            <a className={styles.wrapper} href={link}>
                    <h1>{product.name}</h1>
                    <img className={styles.image} src={`${product.images[0].src}`}  />
                    {/* <div dangerouslySetInnerHTML={{__html:product.short_description}}></div> */}
            
            </a>            
        </>
        
    )
}

export default ProductTeaser
