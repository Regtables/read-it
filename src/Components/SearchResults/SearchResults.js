import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectSearchResults, selectSearchTerm, clearSearchResults, initializeSearch } from '../../Features/Search/SearchSlice'
import { selectSubredditInfo } from '../../Features/Subreddit/SubredditSlice'
import PostList from '../../Components/PostList/PostList'

function SearchResults() {
  const results = useSelector(selectSearchResults)
  // const searchTerm = useSelector(selectSearchTerm)
  const dispatch = useDispatch()
  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(initializeSearch(searchTerm))
    return () => {
      dispatch(clearSearchResults())
    }
  }, [])


  return (
    <div className = 'search-results-container'>
      <h2>Results for {searchTerm}</h2>
      <div className = 'subreddit-search-results-container'>
        <div className = 'subreddit-search-results-header'>
          <h3>Subreddits you might be interested in:</h3>
        </div>
        <hr />
        <div className = 'subreddit-search-results'>

        </div>
      </div>
      <div className = 'posts-search-results-container'>
        <div className = 'posts-search-result-header'>
          <h3>Posts you might be interested in:</h3>
        </div>
        <hr />
        <div className = 'post-search-results'>
            <PostList postList = {results} />
        </div>
      </div> 
    </div>
  )
}

export default SearchResults
