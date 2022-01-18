import React from 'react'

import Post from '../Post/Post'
import './PostList.css'

function PostList() {
  return (
    <div className = 'posts-container'>
        <Post 
            title = 'test'
            thumbnail = 'image'
            subreddit = 'r/test'
        />
        <Post 
            title = 'test'
            thumbnail = 'image'
            subreddit = 'r/test'
        />
    </div>
  )
}

export default PostList
