import React, { useState, useContext, createContext, useEffect } from 'react'
import { addCartItem, deleteCartItem, getCartItems, clearCart, getTotals, getItemCount } from '../api'

const cartContext = createContext()

export function ProvideCart({ children }) {
    const cart = useProvideCart()
    return <cartContext.Provider value={cart}>{children}</cartContext.Provider>
}

export const useCart = () => {
    return useContext(cartContext)
}

function useProvideCart() {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [itemCount, setItemCount] = useState(0)

    const addItem = async (product_id) => {
        setIsLoading(true)
        let _cart = cart
        const item = {
            product_id: `${product_id}`,
            quantity: 1
        }
        const response = await addCartItem(item)
        _cart = _cart.filter(_item => _item.product_id != product_id)
        _cart.push(response.data)
        fetchCart()
    }

    const removeItem = async ( product_id ) => {
        setIsLoading(true)
        let _cart = cart
        if (getItemByProductId(product_id).quantity > 1) {
            const item = {
                product_id: `${product_id}`,
                quantity: getItemByProductId(product_id).quantity - 1
            }
            await deleteCartItem(getItemByProductId(product_id).key)
            _cart = _cart.filter(item => item.product_id != product_id)
            await addCartItem(item)
            _cart.push(item)
            fetchCart()
            return
        }
        await deleteCartItem(getItemByProductId(product_id).key)
        _cart = _cart.filter(item => item.product_id != product_id)
        fetchCart()
    }

    const getItemByProductId = (product_id) => {
        const item = cart.filter(_item => _item.product_id === product_id)
        console.log(item)
        return item[0]
    }

    const deleteItem = async (product_id) => {
        setIsLoading(true)
        let _cart = cart
        await deleteCartItem(getItemByProductId(product_id).key)
        _cart = _cart.filter(item => item.product_id != product_id)
        fetchCart()
    }

    const removeAllItems = async () => {
        await clearCart()
        fetchCart()
    }

    const fetchCart = async () => {
        const response = await getCartItems()
        fetchTotal()
        getCount()
        let _cart = []
        for (const [key, value] of Object.entries(response)) {
            _cart.push(value)
        }
        setCart(_cart)
        
        setIsLoading(false)
    }

    const fetchTotal = async () => {
        const _total = await getTotals()
        setTotal(_total.subtotal)
    }

    const getCount = async () => {
        const count = await getItemCount()
        setItemCount(count)
    }

    useEffect(()=> {
        fetchCart()
    },[])

    return {
        addItem,
        removeItem,
        deleteItem,
        removeAllItems,
        itemCount,
        cart,
        total,
        isLoading
    }
}
