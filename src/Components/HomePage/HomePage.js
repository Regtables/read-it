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
import banner from '../../images/banner-4.jpeg'
import icon from '../../images/home-icon.jpeg'


function HomePage() {

  const dispatch = useDispatch();

  useEffect(() => {
    initializeHomePage(dispatch);
  },[dispatch])


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
                      img = {banner}/>
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
