import React, { useEffect } from 'react'
import { Row, Col, Space} from 'antd'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setSubreddit, getSubredditInfo, selectSubreddit, selectSubredditInfo, initializePage, clearInfo } from '../../Features/Subreddit/SubredditSlice'
import { clearPosts, getSubRedditPosts, selectPosts,  } from '../../Features/Posts/PostsSlice'
import { selectIsSearchingSub, setIsSearchingSub, selectSearchResults, selectLocalSearchTerm, getSearchSubreddit } from '../../Features/Search/SearchSlice'

import PostList from '../PostList/PostList'
import SideMenu from '../SideMenu/SideMenu'
import Banner from '../Banner/Banner'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
import Filters from '../Filters/Filters'

import './Page.css'
import banner from '../../images/homepage.jpeg'

function Page() {
  const { subreddit } = useParams();
  const currentSubreddit = useSelector(selectSubreddit)
  const isSearchingSub = useSelector(selectIsSearchingSub)
  const postList = useSelector(selectPosts)
  const searchResults = useSelector(selectSearchResults)
  const localSearchTerm = useSelector(selectLocalSearchTerm)
  const subredditInfo = useSelector(selectSubredditInfo)
  const dispatch = useDispatch()

  var posts = postList

  isSearchingSub && (posts = searchResults)

  useEffect(() => {
    dispatch(initializePage(subreddit))
   
    // return () => {
    //   dispatch(clearInfo())
    //   dispatch(clearPosts())
    // }
  }, [subreddit])

  useEffect(() => {
    if(!isSearchingSub) {
      filteredPosts()
    } else {
      // dispatch(clearPosts())
      // dispatch(initializeSubredditSearch(localSearchTerm, subreddit, 'hot'))
      dispatch(getSearchSubreddit(localSearchTerm, 'lucydacus'));
      
    }
  }, [localSearchTerm])

  function filteredPosts(){
    var filteredPosts = posts;

    if(isSearchingSub) {
      filteredPosts = posts.filter((post) =>  post?.data?.title.toUpperCase().includes(localSearchTerm.toUpperCase()) || post?.data?.subreddit.toUpperCase().includes(localSearchTerm.toUpperCase()))

    } else {
      filteredPosts = posts.filter((post) => post.title.toUpperCase().includes(localSearchTerm.toUpperCase()) || post.subreddit.toUpperCase().includes(localSearchTerm.toUpperCase()))
    }
    console.log(filteredPosts)
    return filteredPosts
  }

  function toggleSubSearch(){
    dispatch(setIsSearchingSub(!isSearchingSub))
  }

  return (
    <div className = 'page-container'>
          <Col className = 'side-menu'>
                <SideMenu />
          </Col>
          <Col className ='main-content'>
              <div className = 'banner'>
                  <Banner />
              </div>
              <Row className = 'local-search-bar'>
                <Col>
                { isSearchingSub
                ? ( <SearchBar 
                      placeholder = 'Search this Subreddit'
                    />
                  )
                : ( <SearchBar 
                      placeholder = 'Search this Page'
                  /> 
                  )
                } 
                  {/* <label htmlFor = 'search-subreddit'>Search subreddit</label>
                  <input 
                      type = 'checkbox'
                      id = 'search-subreddit'
                      onChange = {toggleSubSearch}
                  /> */}
                </Col>
                <Col className = 'filters'>
                  <Filters terms = {['hot', 'top', 'new']}/>
                </Col>
              </Row>
              <Row className = 'posts'>
                  <PostList postList = {filteredPosts()}/>
              </Row>
           </Col>
    </div>
  )
}

export default Page
