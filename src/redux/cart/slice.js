import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productExists = state.products.some(product => product.id === action.payload.id)

            if(productExists) {
                state.products = state.products.map(product => product.id === action.payload.id
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product)
                    
                return
            }
            
            state.products = [...state.products, {...action.payload, quantity: 1}]
            

            
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(products => products.id !== action.payload.id)
        },
        decreaseProductQuantity: (state, action) => {
            state.products = state.products.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity -1 }
                : product).filter(product => product.quantity > 0)
        }
    },
})

export const {addProduct, removeProduct, decreaseProductQuantity} = cartSlice.actions
export default cartSlice.reducer