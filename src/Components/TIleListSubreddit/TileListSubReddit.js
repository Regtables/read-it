import React from 'react'
import TileSubReddit from '../TileSubReddit/TileSubReddit'
import { Row } from 'antd';
import { Link } from 'react-router-dom'

import './TileListSubReddit.css'

function TileListSubReddit({subreddits}) {

  return (
    <div className = 'list-container'> 
        {subreddits.map((subreddit, index) =>(
          <Link to = {`/${subreddit}`} key = {index}>
            <Row >
              <TileSubReddit subreddit = {subreddit}/>
            </Row>
          </Link>  
        ))}
    </div>
  )
}

export default TileListSubReddit
