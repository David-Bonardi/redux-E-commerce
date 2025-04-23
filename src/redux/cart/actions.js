import CartActionTypes from "./action-types"

export const addProductToCart = (product) => ({
        type: CartActionTypes.ADD_TO_CART,
        payload: product 
})

export const removeProductFromCart = (product) => ({
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: product
})

export const decreaseProductQuantity = (product) => ({
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: product
})