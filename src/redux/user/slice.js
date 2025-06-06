import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.currentUser = action.payload
        },
        logoutUser: (state) => {
            state.currentUser = null
        }
    }
})

export const {loginUser, logoutUser} = userSlice.actions

export default userSlice.reducer