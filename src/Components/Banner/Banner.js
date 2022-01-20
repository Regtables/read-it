import React from 'react'
import Button from '../Button/Button';
import { Row, Col, Typography } from 'antd'


import './Banner.css'

const { Title } = Typography;

function Banner({title, img, description}) {



  return (
    <div className = 'banner-container'>
            <div className = 'banner-img' style = {{backgroundImage: `url(${img})`}}></div>
            <div className = 'subreddit-details'>
              <Row className = 'subreddit-title-container'>
                <Col>
                  <h1 className = 'subreddit-title' >{title}</h1>
                </Col>
                <Col style = {{width: 130, margin: 20}}>
                  <Button text = 'favorite' favorite/>
                </Col>
              </Row>
              <p className = 'subreddit-description'>{description}</p>
            </div>
   </div>
  )
}

export default Banner
