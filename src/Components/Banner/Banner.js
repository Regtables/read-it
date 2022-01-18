import React from 'react'
import { Typography } from 'antd'

import './Banner.css'

const { Title } = Typography;

function Banner({title, img, description}) {
  return (
    <div className = 'banner-container' style = {{backgroundImage: img}}>
       <Title className = 'subreddit-title' >{title}</Title>
       <p className = 'subreddit-description'>{description}</p>
    </div>
  )
}

export default Banner
