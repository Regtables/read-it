import React, { useEffect } from 'react'
import { Row, Col, Space} from 'antd'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setSubreddit, getSubredditInfo, selectSubreddit, selectSubredditInfo, initializePage, clearInfo } from '../../Features/Subreddit/SubredditSlice'
import { clearPosts, getSubRedditPosts, selectPosts,  } from '../../Features/Posts/PostsSlice'

import PostList from '../PostList/PostList'
import SideMenu from '../SideMenu/SideMenu'
import Banner from '../Banner/Banner'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
import Filters from '../Filters/Filters'

import './Page.css'
import banner from '../../images/homepage.jpeg'

function Page() {
  const { subreddit } = useParams();
  const currentSubreddit = useSelector(selectSubreddit)
  const posts = useSelector(selectPosts)
  const subredditInfo = useSelector(selectSubredditInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializePage(subreddit))

    return () => {
      dispatch(clearInfo())
      dispatch(clearPosts())
    }
  }, [subreddit])

  return (
    <div className = 'page-container'>
          <Col className = 'side-menu'>
                <SideMenu />
          </Col>
          <Col className ='main-content'>
              <div className = 'banner'>
                  <Banner />
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
                  <PostList postList = {posts}/>
              </Row>
           </Col>
    </div>
  )
}

export default Page
