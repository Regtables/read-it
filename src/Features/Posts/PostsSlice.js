import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadHotPosts = createAsyncThunk(
  'posts/loadPosts',
   async(subreddit = '') => {

    const response = await fetch(`https://www.reddit.com/hot.json`);
    const json = await response.json();
    const data =  json.data.children.map((post) => post.data);

    return data;
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoadingPosts: false,
    hasError: false
  },
  reducers: {
    formatData: (state, action) => {
        console.log(action.payload)
        action.payload.map((data) => {
          return {
            
          }
        })
    
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadHotPosts.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(loadHotPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(loadHotPosts.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.posts = [];
      })
  }
})

export const selectPosts = (state) => state.posts.posts;

export const isLoading = (state) => state.posts.isLoadingPosts;
export const { formatData } = postsSlice.actions;

export default postsSlice.reducer;

