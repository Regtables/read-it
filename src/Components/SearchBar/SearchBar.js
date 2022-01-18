import React from 'react'
import { Input } from 'antd'
import './SearchBar.css'

const { Search } = Input;

function SearchBar({term}) {
  return (
    <div className = 'search-bar-container'>
        <Search />
    </div>
  )
}

export default SearchBar
