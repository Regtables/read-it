import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, Space} from 'antd'
import { initializeHomePage, setSubreddit, clearInfo } from '../../Features/Subreddit/SubredditSlice'
import { getHotPosts } from '../../Features/Posts/PostsSlice'

import PostList from '../PostList/PostList'
import SideMenu from '../SideMenu/SideMenu'
import Banner from '../Banner/Banner'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
import Filters from '../Filters/Filters'

import './HomePage.css'
import icon from '../../images/home-icon.jpeg'

import banner from '../../images/banner-4.jpeg'
import banner2 from '../../images/banner-3.jpeg'
import banner3 from '../../images/banner-7.png'
import banner4 from '../../images/banner-6.jpeg'


function HomePage() {

  const dispatch = useDispatch();

  useEffect(() => {
    initializeHomePage(dispatch);
  },[dispatch])

  const banners = [banner, banner2, banner3, banner4];

  function renderBanner(){
    return banners[Math.floor(Math.random()*banners.length)]
  }


  return (
    <div className = 'home-page-container'>
          <Col className = 'side-menu'>
                <SideMenu />
          </Col>
          <Col className ='main-content'>
              <div className = 'banner'>
                  <Banner 
                      title = 'Home Page'
                      subreddit = 'Your page' 
                      description = 'Todays Reads'
                      icon = {icon}
                      img = {renderBanner()}/>
              </div>
              <Row className = 'search-bar'>
                <Col>
                  <SearchBar placeholder = 'Search this Page' />
                </Col>
                <Col className = 'filters'>
                  <Filters terms = {['funny', 'interesting', 'pretty', 'wowowowowowowow']}/>
                </Col>
              </Row>
              <Row className = 'posts'>
                  <PostList />
              </Row>
           </Col>
    </div>
  )
}

export default HomePage
