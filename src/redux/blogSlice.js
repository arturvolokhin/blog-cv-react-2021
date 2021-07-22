import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',

  initialState: {
    value: {
        status: '',
        posts: [],
    }
  },

  reducers: {
    changeStatus: ({value}, {payload}) => {
      value.status = payload;
    },

    addPost: ({value}, {payload}) => {
        value.posts.push(payload);
    }
    
  }
})

export const { changeStatus, addPost } = blogSlice.actions

export default blogSlice.reducer