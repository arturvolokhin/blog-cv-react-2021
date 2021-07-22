import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        userInfo: {
            Name: '',
            Birthday: '',
            'Live in': '',
        }
    },

    reducers: {
        editUserInfo: (state, {payload}) => {
            state.userInfo = payload;
        }
    },
});

export const { editUserInfo } = userSlice.actions;

export default userSlice.reducer;