import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { Layout, Row, Col } from 'antd'
import NavBar from '../Components/NavBar/NavBar'
import HomePage from '../Components/HomePage/HomePage'
import Page from '../Components/Page/Page'
import Post from '../Components/Post/Post'
import SearchResults from '../Components/SearchResults/SearchResults'

import './App.css'

export default function App() {

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
              <Route path = '/r/:subreddit/comments/:postId/:post' element = {<Post />}></Route>
              <Route path = '/searchResults/:searchTerm' element = {<SearchResults />}></Route>
          </Routes>
      </div>
    </div>
  )
}
