import React from 'react'
import { Input, Avatar, Typography} from 'antd'
import { SearchOutlined, FireTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'
import icon from '../../images/reading.png'

const { Search } = Input;
const { Title } = Typography

function NavBar() {
  return (
    <div className = 'nav-bar-container'>
        <div className = 'logo-container'>
            <Link to = '/'>
                <Avatar
                    className = 'logo'
                    src = {icon} 
                    size = 'large' 
                    style = {{height: 60, width: 60}} 
                    alt = 'logo' 
                />
             </Link>
             <Link to = '/'>
                <h1 className ='title' style = {{marginRight: 50}}>Read-It</h1>
            </Link>
        </div>
        <div className = 'search-bar-container'>
            <SearchBar 
                global = {true}
                placeholder = 'Search Read-It'/>
        </div>
        <div className = 'filter-icons-container'>
            {/* <FireTwoTone 
                  style = {{fontSize: 28}}
                  twoToneColor = 'red'
            /> */}
                    
        </div>
    </div>
  )
}

export default NavBar
