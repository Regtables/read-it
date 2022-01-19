import React from 'react'
import { Row, Col, Space} from 'antd'

import PostList from '../PostList/PostList'
import SideMenu from '../SideMenu/SideMenu'
import Banner from '../Banner/Banner'
import SearchBar from '../SearchBar/SearchBar'

import './HomePage.css'
import banner from '../../images/homepage.jpeg'




function HomePage() {

  banner && console.log('banner is here')

  return (
    <div className = 'home-page-container'>
          <Col className = 'side-menu'>
                <SideMenu />
          </Col>
          <Col className ='main-content'>
              <div className = 'banner'>
                  <Banner 
                      title = 'Home Page' 
                      description = 'Todays Posts'
                      img = {banner}/>
              </div>
              <Row className = 'search-bar'>
                <SearchBar placeholder = 'Search this Page' />
              </Row>
              <Row className = 'posts'>
                  <PostList />
              </Row>
           </Col>
    </div>
  )
}

export default HomePage
