import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import postsReducer  from '../Features/Posts/PostsSlice'
import subredditReducer from '../Features/Subreddit/SubredditSlice'
import postReducer from '../Features/Post/PostSlice'
import searchReducer from '../Features/Search/SearchSlice'
import { postsApi } from '../Features/Posts/PostsSlice'

export default configureStore({
  reducer: {
    post: postReducer,
    posts: postsReducer,
    subreddit: subredditReducer,
    searchResults: searchReducer,
  }
})