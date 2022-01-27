import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadHotPosts, loadSubreddit } from '../../App/Reddit';

const baseUrl = 'https://www.reddit.com'

export const getHotPosts = createAsyncThunk(
  'posts/getHotPosts',
   async() => {

    const response = await fetch(`${baseUrl}/hot.json`);
    const json = await response.json();
    const data =  json.data.children.map((post) => post.data);

    return data;
  }
)

export const getSubreddit = createAsyncThunk(
  'posts/getSubreddit',
  async(subreddit) => {
    const response = await fetch(`${baseUrl}/r/${subreddit}/about.json`);
    const json = await response.json();
    const data = Object.values(json).map((info) => info);

    return data[1];
    
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    subreddit:[],
    isLoadingPosts: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    //Hot Post (home page)
      .addCase(getHotPosts.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(getHotPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(getHotPosts.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.posts = [];
      })
    //Subreddit details
      .addCase(getSubreddit.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(getSubreddit.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = false;
        state.subreddit = action.payload;
      })
      .addCase(getSubreddit.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.subreddit = {};
      })
  }
})

export const selectPosts = (state) => state.posts.posts;
export const selectSubreddit = (state) => state.posts.subreddit;

export const isLoading = (state) => state.posts.isLoadingPosts;

export default postsSlice.reducer;

