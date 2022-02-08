import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadSubredditInfo } from "../../App/Reddit";
import { getSubRedditPosts, getHotPosts } from "../Posts/PostsSlice";

export const getSubredditInfo = createAsyncThunk(
  'posts/getSubredditInfo',
   async(subreddit) => {
    const data = await loadSubredditInfo(subreddit);
    return data;
  }
)

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddit: '',
    info: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    setSubreddit: (state, action) => {
      state.subreddit = action.payload;
    },
    clearInfo: (state, action) => {
      state.info = [];
    }
  },
  extraReducers: (builder) => {
    builder
    //Subreddit details
      .addCase(getSubredditInfo.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(getSubredditInfo.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = false;
        state.info = action.payload;
      })
      .addCase(getSubredditInfo.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.info = [];
      })
  }
})

export const initializePage = (subreddit) => {
  return (dispatch) => {
    dispatch(subredditSlice.actions.setSubreddit(subreddit))
    dispatch(getSubredditInfo(subreddit))
    dispatch(getSubRedditPosts(subreddit))
  }
}

export const initializeHomePage = (dispatch) => {
  dispatch(subredditSlice.actions.setSubreddit('hot'))
  dispatch(getHotPosts())
  dispatch(subredditSlice.actions.clearInfo());
}



export const selectSubreddit = (state) => state.subreddit.subreddit;
export const selectSubredditInfo = (state) => state.subreddit.info;

export const { setSubreddit, clearInfo } = subredditSlice.actions;

export default subredditSlice.reducer 