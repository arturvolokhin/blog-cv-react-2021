import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: "blog",

    initialState: {
        status: "",
        posts: [],
        postEditData: {},
    },

    reducers: {
        changeStatus: (state, { payload }) => {
            state.status = payload;
        },

        addPost: ({ posts }, { payload }) => {
            posts.splice(0, 0, payload);
        },

        deletePosts: ({ posts }) => {
            posts.length = 0;
        },

        PaintEditPost: (state, { payload }) => {
            const post = state.posts.find((post) => post.id === payload);
            state.postEditData = post;
        },

        editPost: ({postEditData, posts}, {payload}) => {
            postEditData.value = payload.text;
            posts.splice(payload.index, 1, postEditData);
        },

        deletePost: ({ posts }, { payload }) => {
            const index = posts.findIndex((post) => post.id === payload);
            posts.splice(index, 1);
        },
    },
});

export const {
    changeStatus,
    addPost,
    deletePosts,
    PaintEditPost,
    editPost,
    deletePost,
} = blogSlice.actions;

export default blogSlice.reducer;
