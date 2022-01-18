import React from 'react'
import { Input, Avatar } from 'antd'
import { SearchOutlined, FireTwoTone } from '@ant-design/icons'

import './NavBar.css'
import icon from '../../images/reading.png'

const { Search } = Input;

function NavBar() {
  return (
    <div className = 'nav-bar-container'>
        <div className = 'logo-container'>
            <Avatar 
                src = {icon} 
                size = 'large' 
                style = {{height: 60, width: 60}} 
                alt = 'logo' 
            />
            <h1 style = {{marginRight: 50}}>Read-It</h1>
        </div>
        <div className = 'search-bar-container'>
            <Search
                placeholder = 'Search Read-It'
                  style = {{width: 400}}
                  size = 'large'
                  id = 'main-q'
            />
        </div>
        <div className = 'filter-icons-container'>
            <FireTwoTone 
                  style = {{fontSize: 28}}
                  twoToneColor = 'orange'
                  />
                    
        </div>
    </div>
  )
}

export default NavBar
