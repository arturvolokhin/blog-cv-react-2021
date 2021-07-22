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
    
  }
})

export const { changeStatus } = blogSlice.actions

export default blogSlice.reducer