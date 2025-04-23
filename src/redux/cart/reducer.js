import CartActionTypes from "./action-types"

const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            //verificar se o produto já existe no carrinho
            const productExists = state.cartProducts.some(product => product.id === action.payload.id)

            if(productExists) {
                return { ...state, cartProducts: state.cartProducts.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product)}
            }

            return{...state, cartProducts: [...state.cartProducts, {...action.payload, quantity: 1}]}
        case CartActionTypes.REMOVE_FROM_CART:
            return {...state, cartProducts: state.cartProducts.filter(products => products.id !== action.payload.id)}
        case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
                return {...state, cartProducts: state.cartProducts.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity -1 }
                : product).filter(product => product.quantity > 0)}
            default:
            return state
    }
}

export default cartReducer