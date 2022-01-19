import React from 'react'
import { Input } from 'antd'
import './SearchBar.css'

const { Search } = Input;

function SearchBar({term, placeholder}) {
  return (
    <div className = 'search-bar-container'>
        <input 
            type = 'search'
            placeholder = {placeholder}
        />
    </div>
  )
}

export default SearchBar
