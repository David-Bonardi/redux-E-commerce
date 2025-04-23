import typeUser from "./action-types"

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeUser.LOGIN:
            return { ...state, currentUser: action.payload }
        case typeUser.LOGOUT:
            return { ...state, currentUser: null}
        default:
            return state
    }
}

export default userReducer