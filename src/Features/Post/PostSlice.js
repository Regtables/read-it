import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadPost } from "../../App/Reddit";

export const getPost = createAsyncThunk(
  'post/getPost',
   async(permalink) => {
     const post = await loadPost(permalink)

     return post
   }
)

const postSlice = createSlice({
  name: 'post',
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
  return (dispatch) => {
    dispatch(postSlice.actions.clearPost())
    dispatch(getPost(permalink))
  }
}

export const { clearPost } = postSlice.actions;

export const selectPost = (state) => state.post.postInfo;
export const selectPostComments = (state) => state.post.comments;
export const isLoadingPost = (state) => state.post.isLoadingPost;

export default postSlice.reducer