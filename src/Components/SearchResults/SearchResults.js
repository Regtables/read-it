import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectSearchResults, selectSearchTerm } from '../../Features/Search/SearchSlice'
import { selectSubredditInfo } from '../../Features/Subreddit/SubredditSlice'

function SearchResults() {
  const results = useSelector(selectSearchResults)
  const searchTerm = useSelector(selectSearchTerm)
  console.log(results)


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
            
        </div>
      </div> 
    </div>
  )
}

export default SearchResults
