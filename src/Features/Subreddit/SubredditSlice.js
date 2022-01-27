import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadSubredditInfo } from "../../App/Reddit";

export const getSubredditInfo = createAsyncThunk(
  'posts/getSubredditInfo',
  async(subreddit) => {
    const data = loadSubredditInfo(subreddit);
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

export const selectSubreddit = (state) => state.subreddit.subreddit;
export const selectSubredditInfo = (state) => state.subreddit.info;

export const { setSubreddit } = subredditSlice.actions;

export default subredditSlice.reducer 