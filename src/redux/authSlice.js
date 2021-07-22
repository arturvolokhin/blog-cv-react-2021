import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",

    initialState: {
        authorizedUser: [],
        registeredUsers: [],
    },

    reducers: {
        getAuthorized: (state, { payload }) => {
            state.authorizedUser = payload;
        },

        getRegisteredUser: (state, { payload }) => {
            state.registeredUsers.push(payload);
        },

        logout : (state) => {
            state.authorizedUser = [];
        }
    },
});

export const { getAuthorized, getRegisteredUser, logout } = authSlice.actions;

export default authSlice.reducer;