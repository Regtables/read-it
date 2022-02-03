import { configureStore } from '@reduxjs/toolkit'
import postsReducer  from '../Features/Posts/PostsSlice'
import subredditReducer from '../Features/Subreddit/SubredditSlice'
import postReducer from '../Features/Post/PostSlice'
import { postsApi } from '../Features/Posts/PostsSlice'

export default configureStore({
  reducer: {
    post: postReducer,
    posts: postsReducer,
    subreddit: subredditReducer
  }
})