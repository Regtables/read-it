import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Space} from 'antd'
import { initializeHomePage, setSubreddit, clearInfo } from '../../Features/Subreddit/SubredditSlice'
import { getHotPosts, selectPosts, clearPosts } from '../../Features/Posts/PostsSlice'
import { selectLocalSearchTerm } from '../../Features/Search/SearchSlice'

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
  const posts = useSelector(selectPosts)
  const localSearchTerm = useSelector(selectLocalSearchTerm)
  const dispatch = useDispatch();

  useEffect(() => {
    initializeHomePage(dispatch);

    return () => {
      dispatch(clearPosts())
    }
  },[dispatch])

  useEffect(() => {
    filteredPosts()
  }, [localSearchTerm])

  const banners = [banner, banner2, banner3, banner4];
  
  function filteredPosts(){

    var filteredPosts = posts;

    filteredPosts = posts.filter((post) => post.title.toUpperCase().includes(localSearchTerm.toUpperCase()) || post.subreddit.toUpperCase().includes(localSearchTerm.toUpperCase()))
  
    return filteredPosts
  }

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
              <Row className = 'local-search-bar'>
                <Col>
                  <SearchBar 
                      placeholder = 'Search this Page'
                  /> 
                </Col>
                <Col className = 'filters'>
                  <Filters terms = {['hot', 'top', 'new']}/>
                </Col>
              </Row>
              <Row className = 'posts'>
                  <PostList postList = {filteredPosts()}/>
              </Row>
           </Col>
    </div>
  )
}

export default HomePage
