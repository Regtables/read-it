import React from 'react'
import { Typography } from 'antd'

import './Banner.css'

const { Title } = Typography;

function Banner({title, img, description}) {



  return (
    <>
        <div className = 'banner-container' style = {{backgroundImage: `url(${img})`}}></div>
            <div className = 'subreddit-details'>
              <h1 className = 'subreddit-title' >{title}</h1>
              <p className = 'subreddit-description'>{description}</p>
            </div>
    
   </>
  )
}

export default Banner
