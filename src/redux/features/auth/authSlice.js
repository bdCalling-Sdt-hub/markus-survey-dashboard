import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {token } = action.payload;
            state.token = token;
        },
        logOut: (state) => {
            state.token = null;
        }
    }
})

export const { setUser, logOut} = authSlice.actions;

export default authSlice.reducer;