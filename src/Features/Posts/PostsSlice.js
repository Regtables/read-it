import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { loadHotPosts, loadSubredditPosts, loadSearchSubreddit } from '../../App/Reddit';
import { selectSubreddit } from '../Subreddit/SubredditSlice';

const baseUrl = 'https://www.reddit.com'

export const getHotPosts = createAsyncThunk(
  'posts/getHotPosts',
   async() => {
    const data = await loadHotPosts();

    return data;
  }
)

export const getSubRedditPosts = createAsyncThunk(
  'posts/getSubredditPosts',
   async(subreddit) => {
    const data = await loadSubredditPosts(subreddit)

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
    clearPosts: (state, action) => {
      state.posts = []
    }
  },
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
      .addCase(getSubRedditPosts.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(getSubRedditPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(getSubRedditPosts.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.posts = [];
      })
    }
})

export const selectPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.isLoadingPosts;

export const { clearPosts } = postsSlice.actions

export default postsSlice.reducer;

