import React from 'react'
import Tile from '../Tile/Tile'

import './PostList.css'

function PostList({topic}) {
  return (
    <div className = 'posts-container'>
        <Tile
            title = 'test'
            thumbnail = 'image'
            subreddit = 'r/test'
        />
        <Tile 
            title = 'test'
            thumbnail = 'image'
            subreddit = 'r/test'
        />
    </div>
  )
}

export default PostList
