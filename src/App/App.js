import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { Layout, Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../Components/NavBar/NavBar'
import HomePage from '../Components/HomePage/HomePage'
import SideMenu from '../Components/SideMenu/SideMenu'
import Page from '../Components/Page/Page'
import { getToken } from './Reddit'
import { getHotPosts, getSubRedditPosts } from '../Features/Posts/PostsSlice'
import { getSubredditInfo, selectSubreddit, selectSubredditInfo, setSubreddit } from '../Features/Subreddit/SubredditSlice'

import './App.css'
import Search from 'antd/lib/input/Search'


export default function App() {
  const dispatch = useDispatch();
  const subreddit = useSelector(selectSubreddit)
  const subredditInfo = useSelector(selectSubredditInfo)

  // useEffect(() => {
  //     dispatch(getHotPosts())
  //   },[dispatch],)

  return (
    <div className = 'app'>
      <Row>
        <header>
            <nav>
                <NavBar />
            </nav>
        </header>
      </Row>
      <div className = 'routes'>
          <Routes>
              <Route path = '/' element = {<HomePage />}></Route>
              <Route path = '/trending'></Route>
              <Route path = '/hot' ></Route>
              <Route path = '/:subreddit' element = {<Page />}></Route>
              <Route path = '/:subreddit/comments/post' ></Route>
          </Routes>
      </div>
    </div>
  )
}
