import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { Layout, Row, Col } from 'antd'
import { useDispatch } from 'react-redux'

import NavBar from '../Components/NavBar/NavBar'
import HomePage from '../Components/HomePage/HomePage'
import SideMenu from '../Components/SideMenu/SideMenu'
import Page from '../Components/Page/Page'
import { getToken } from './Reddit'
import { getHotPosts } from '../Features/Posts/PostsSlice'

import './App.css'
import Search from 'antd/lib/input/Search'


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getHotPosts())
    },[dispatch],)

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
              <Route path = '/:pagename' element = {<Page/>}></Route>
              <Route path = '/:postId' ></Route>
          </Routes>
      </div>
    </div>
  )
}
