import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadPost } from "../../App/Reddit";

export const getPost = createAsyncThunk(
  'post/getPost',
   async(permalink) => {
     const post = loadPost(permalink)
     return post
   }
)

const postSlice = createSlice({
  name: 'post/getPost',
  initialState: {
    postInfo: [],
    comments: [],
    isLoadingPost: false,
    hasError: false
  },
  reducers: {
    clearPost: (state, action) => {
      state.postInfo = [];
      state.comments = [];
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPost.pending, (state) => {
      state.isLoadingPost = true;
      state.hasError = false;
    })
    .addCase(getPost.fulfilled, (state, action) => {
      const { postInfo, comments } = action.payload
      state.isLoadingPost = false;
      state.hasError = false;
      state.postInfo = postInfo;
      state.comments = comments;
    })
    .addCase(getPost.rejected, (state, action) => {
      state.isLoadingPost = false;
      state.hasError = true;
      state.postInfo = [];
      state.comments = [];
    })
  }
})

export const initializePost = (permalink) => {
  postSlice.actions.clearPost();
  return (dispach) => {
    dispach(getPost(permalink));
  }
}

export const { clearPost } = postSlice.actions;

export const selectPost = (state) => state.postInfo;
export const selectPostComments = (state) => state.comments;

export default postSlice.reducer