import React from 'react'
import { Route, Routes } from 'react-router'

import NavBar from '../Components/NavBar/NavBar'
import HomePage from '../Components/HomePage/HomePage'
import SideMenu from '../Components/SideBar/SideMenu'

import './App.css'


export default function App() {
  return (
    <div className = 'app'>
        <header>
            <nav>
                <NavBar />
            </nav>
        </header>
        <div>
          <SideMenu />
        </div>
        <main>
            <Routes>
                <Route path = '/' element = {<HomePage />}></Route>
            </Routes>
        </main>
    </div>
  )
}
