import React from 'react'
import { Row, Col, Space} from 'antd'

import PostList from '../PostList/PostList'
import SideMenu from '../SideMenu/SideMenu'
import Banner from '../Banner/Banner'

import './HomePage.css'
import SearchBar from '../SearchBar/SearchBar'

function HomePage() {
  return (
    <div className = 'home-page-container'>
          <Col className = 'side-menu'>
                <SideMenu />
          </Col>
          <Col className ='main-content'>
              <Row className = 'banner'>
                  <Banner 
                      title = 'Home Page' 
                      description = 'Todays Posts'/>
              </Row>
              <Row className = 'search-bar'>
                <SearchBar />
              </Row>
              <Row className = 'posts'>
                  <PostList />
              </Row>
           </Col>
    </div>
  )
}

export default HomePage
