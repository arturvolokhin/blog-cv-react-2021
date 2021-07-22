import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: "auth",

    initialState: {
        isLoginModal: false,
        isRegistrationModal: false,
    },

    reducers: {
        toggleLoginModal: (state) => {
            state.isLoginModal = !state.isLoginModal;
        },

        toggleRegistrationModal: (state) => {
            state.isRegistrationModal = !state.isRegistrationModal;
        }
    },
});

export const { toggleLoginModal, toggleRegistrationModal } = headerSlice.actions;

export default headerSlice.reducer;