import React from 'react'
import { Route, Routes } from 'react-router'
import { Layout, Row, Col } from 'antd'

import NavBar from '../Components/NavBar/NavBar'
import HomePage from '../Components/HomePage/HomePage'
import SideMenu from '../Components/SideMenu/SideMenu'

import './App.css'
import Search from 'antd/lib/input/Search'


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
      <Row>
        <main>
          <Row>
            <Col>
              <div className = 'side-menu'>
                  <SideMenu />
              </div>
            </Col>
          </Row>
          <Row>
            <div className = 'routes'>
              <Row className = 'page-filter' style = {{margin: 30}}>
                <h2>HomePage</h2>
                <Search />
              </Row>
                <Routes>
                    <Route path = '/' element = {<HomePage />}></Route>
                </Routes>
            </div>
          </Row>
        </main>
      </Row>
    </div>
  )
}
