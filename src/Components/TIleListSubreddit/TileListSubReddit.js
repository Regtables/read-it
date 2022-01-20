import React from 'react'
import TileSubReddit from '../TileSubReddit/TileSubReddit'
import { Row } from 'antd';

import './TileListSubReddit.css'

function TileListSubReddit({subreddits}) {
  return (
    <div className = 'list-container'> 
        {subreddits.map((subreddit, index) =>(
          <Row key = {index}>
            <TileSubReddit subreddit = {subreddit} key = {index}/>
          </Row>
        ))}
    </div>
  )
}

export default TileListSubReddit
