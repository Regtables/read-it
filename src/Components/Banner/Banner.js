import React from 'react'
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import { selectSubredditInfo } from '../../Features/Subreddit/SubredditSlice';
import { Row, Col } from 'antd'


import './Banner.css';
import Tile from '../Tile/Tile';



function Banner({title, img, description, subreddit, icon}) {
  const subredditInfo = useSelector(selectSubredditInfo)

  if(!(title && img && description && subreddit && icon)){
    title = subredditInfo.title;
    img = bannerSrc();
    description = subredditInfo.public_description;
    subreddit = subredditInfo.display_name_prefixed;
    icon = iconSrc();
  }


  function iconSrc(){
    const iconImg = subredditInfo.icon_img
    const headerImg = subredditInfo.header_img

    if(iconImg){
      return iconImg
    } else if(headerImg){
        return headerImg
    } else{
        return 
    }
  }

  function bannerSrc(){
    const bannerImg = subredditInfo.banner_img
    const mobileBannerImg = subredditInfo.mobile_banner_image

    if(bannerImg){
      return bannerImg
    } else if(mobileBannerImg){
        return mobileBannerImg
    } else{
        return 
    }
  }

  return (
    <div className = 'banner-container'>
          <div className = 'banner-img' style = {{backgroundImage: `url(${img})`}}></div>
          <div className = 'subreddit-details'>
            <Row className = 'subreddit-title-container'>
              <Col className = 'left-side'>
                <div className = 'subreddit-banner-icon-container'>
                  <img className = 'subreddit-banner-icon' src = {icon}/>
                </div>  
                <div>
                  <h1 className = 'subreddit-title' >{title}</h1>
                  <p>{subreddit}</p>
                </div>
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
