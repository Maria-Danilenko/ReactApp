import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        login: (state) => {
            console.log("Previous state:", state.isLoggedIn);
            state.isLoggedIn = true;
            console.log("Next state:", state.isLoggedIn);
        },
        logout: (state) => {
            console.log("Previous state:", state.isLoggedIn);
            state.isLoggedIn = false;
            console.log("Next state:", state.isLoggedIn);
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
