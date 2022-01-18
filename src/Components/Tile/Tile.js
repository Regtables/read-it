import React from 'react'
import './Tile.css'

function Tile({title, thumbnail, subreddit}) {
  return (
      <div className = 'tile-container'>
          <div className = 'title-container'>
                <h3>{title}</h3>
          </div>
          <hr />
          <div className = 'thumbnail-container'>

          </div>
      </div>
  )
}

export default Tile
