import { configureStore } from '@reduxjs/toolkit'
import postsReducer  from '../Features/Posts/PostsSlice'
import subredditReducer from '../Features/Subreddit/SubredditSlice'
import { postsApi } from '../Features/Posts/PostsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    subreddit: subredditReducer
  }
})