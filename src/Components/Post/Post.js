import React from 'react'
import './Post.css'

function Post({title, thumbnail, subreddit}) {
  return (
      <div className = 'post-container'>
          <div className = 'title-container'>
                <h3>{title}</h3>
          </div>
          <hr />
          <div className = 'thumbnail-container'>

          </div>
      </div>
  )
}

export default Post
