import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Row } from 'antd'
import './SearchBar.css'
import { initializeSearch, setLocalSearchTerm } from '../../Features/Search/SearchSlice';


function SearchBar({term, placeholder, global }) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if(!global){
      dispatch(setLocalSearchTerm(searchTerm))
    }
  }, [searchTerm])

  function handleSubmit() {
    const newSearchTerm = searchTerm.replaceAll(' ', '');
    dispatch(initializeSearch(newSearchTerm))
    setSearchTerm('')
  }

  return (
    <Row className = 'search-bar-container'>
      {global 
      ? (
        <>
          <input 
              type = 'search'
              placeholder = {placeholder}
              onChange = {(e) => setSearchTerm(e.target.value)}
              value = {searchTerm}
          />
          <Link to = {`/searchResults/${searchTerm.replaceAll(' ','')}`}>
          <input
              type = 'submit'
              onClick = {handleSubmit}
          />
          </Link>
        </>
      )
      : (
        <>
        <input 
              type = 'search'
              placeholder = {placeholder}
              onChange = {(e) => setSearchTerm(e.target.value)}
              value = {searchTerm}
              style = {{width: 300, paddingLeft: 20}}
          />
        </>
      )}
    </Row>
  )
}

export default SearchBar
