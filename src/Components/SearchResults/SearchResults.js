import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { selectSearchResults, selectSearchTerm, clearSearchResults, initializeSearch } from '../../Features/Search/SearchSlice'
import { selectSubredditInfo } from '../../Features/Subreddit/SubredditSlice'
import PostList from '../../Components/PostList/PostList'

import './SearchResults.css'

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
  }, [searchTerm])

  function filteredSubreddits(){
    const filteredSubreddits = results.filter((result) => result.data.subreddit.toUpperCase().includes(searchTerm.toUpperCase()) || result.data.subreddit.toUpperCase() === searchTerm.toUpperCase())
    const uniqueSubreddits = [];
    
    for(let i = 0; i < filteredSubreddits.length; i++){
      if(!(uniqueSubreddits.includes(filteredSubreddits[i].data.subreddit))){
        uniqueSubreddits.push(filteredSubreddits[i].data.subreddit)
      }
    }
    return uniqueSubreddits
  }

  return (
    <div className = 'search-results-container'>
      <h2 className = 'results-header'><span>Results for :</span> {searchTerm}</h2>
      <div className = 'subreddit-search-results-container'>
        <div className = 'subreddit-search-results-header'>
          <h3>Subreddits you might be interested in:</h3>
        </div>
        <div className = 'subreddit-search-resutls'>
          {
            filteredSubreddits().map((subreddit, index) => (
             <div className = 'subreddit-result-container'>
               <Link to = {`/${subreddit}`}><h2>r/{subreddit}</h2></Link>
             </div>
            ))
          }
        </div>
        <hr />
        <div className = 'subreddit-search-results'>

        </div>
      </div>
      <div className = 'posts-search-results-container'>
        <div className = 'posts-search-results-header'>
          <h3>Posts you might be interested in:</h3>
        </div>
       
        <div className = 'post-search-results'>
            <PostList postList = {results} />
        </div>
      </div> 
    </div>
  )
}

export default SearchResults
