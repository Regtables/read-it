import React from 'react'
import { Avatar } from 'antd'

import './TileSubReddit.css'

function TileSubReddit({subreddit}) {
  return (
    <div className = 'subreddit-tile-container'>
      <h3>{subreddit}</h3>
      {/* <Avatar src = {subreddit.img}/> */}
    </div>
  )
}

export default TileSubReddit
