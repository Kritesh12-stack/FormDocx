import { createSlice } from "@reduxjs/toolkit";

const initialUsername = JSON.parse(localStorage.getItem("user"))?.username || ""
const initialEmail = JSON.parse(localStorage.getItem("user"))?.email || ""

const initialState = {
    user : {
        username : initialUsername,
        email : initialEmail
    },
    accessToken : "",
    refreshToken : ""
}

const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setAuth : (state,action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken

            localStorage.setItem("user",action.payload.user);
            localStorage.setItem("accessToken",action.payload.accessToken);
            localStorage.setItem("refreshToken",action.payload.refreshToken);
        },
        clearAuth : (state) => {
            localStorage.clear();
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
        }
    }
})

export const { setAuth , clearAuth } = AuthSlice.actions;
export default AuthSlice.reducer