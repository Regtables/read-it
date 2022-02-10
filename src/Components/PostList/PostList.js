import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tile from '../Tile/Tile'
import SearchBar from '../SearchBar/SearchBar'
import Filters from '../Filters/Filters'
import { selectSubreddit } from '../../Features/Subreddit/SubredditSlice'
import { selectPosts, loadHotPosts, isLoading, formatData, clearPosts} from '../../Features/Posts/PostsSlice'
import { selectLocalSearchTerm, setSearchTerm, initializeSubredditSearch, selectIsSearchingSub, selectSearchResults, setIsSearchingSub, getSearchSubreddit } from '../../Features/Search/SearchSlice'
import { Row, Col } from 'antd';
import { testAPI } from '../../App/Reddit'

import './PostList.css'


function PostList({postList, searchResult}) {
  const dispatch = useDispatch()
  const isSearchingSub = useSelector(selectIsSearchingSub)
  const isLoadingPosts = useSelector(isLoading)
  const localSearchTerm = useSelector(selectLocalSearchTerm)
  const searchResults = useSelector(selectSearchResults)
  const subreddit = useSelector(selectSubreddit)

  const [ searchSub, setSearchSub ] = useState(false)

  // console.log(subreddit)

  // useEffect(() => {
  //   if(!isSearchingSub) {
  //     // filteredPosts()
  //   } else {
  //     // dispatch(clearPosts())
  //     // dispatch(initializeSubredditSearch(localSearchTerm, subreddit, 'hot'))
  //     dispatch(getSearchSubreddit(localSearchTerm, 'lucydacus'));
  //     // testAPI(localSearchTerm, subreddit)
  //   }
  // }, [localSearchTerm])

  // isSearchingSub && (postList = searchResults)

  if(isLoadingPosts) return 'Loading..'

  // function filteredPosts(){
  //   var filteredPosts = []

  //   if(searchResult || isSearchingSub) {
  //     filteredPosts = postList.filter((post) =>  post?.data?.title.toUpperCase().includes(localSearchTerm.toUpperCase()) || post?.data?.subreddit.toUpperCase().includes(localSearchTerm.toUpperCase()))

  //   } else {
  //     filteredPosts = postList.filter((post) => post.title.toUpperCase().includes(localSearchTerm.toUpperCase()) || post.subreddit.toUpperCase().includes(localSearchTerm.toUpperCase()))
  //   }

  //   return filteredPosts
  // }

  // function toggleSubSearch(){
  //   dispatch(setIsSearchingSub(!isSearchingSub))
  // }

  // console.log(filteredPosts())

  return (
    <>
    {/* <Row className = 'search-bar'>
                <Col>
                { searchSub 
                ? ( <SearchBar 
                      placeholder = 'Search this Subreddit'
                    />
                  )
                : ( <SearchBar 
                      placeholder = 'Search this Page'
                  /> 
                  )
                } 
                  <label htmlFor = 'search-subreddit'>Search subreddit</label>
                  <input 
                      type = 'checkbox'
                      id = 'search-subreddit'
                      onChange = {toggleSubSearch}
                  />
                </Col>
                {/* <Col className = 'filters'>
                  <Filters terms = {['funny', 'interesting', 'pretty', 'wowowowowowowow']}/>
                </Col> */}
    
    <div className = 'posts-container'>
        {
        postList.map((post, index) => (
          <Row className = 'row' key = {index }>
          {postList && (<Tile   
              title = {post?.title || post?.data?.title} 
              url = {post?.url || post?.data?.url}
              image = {post?.url || post?.data?.url}
              media = {post?.media || post?.data?.media}
              subreddit = {post.subreddit || post?.data?.subreddit}
              selftext = {post?.selftext || post?.data?.selftext}
              isVideo = {post?.is_video || post?.data?.is_video}
              postHint = {post?.post_hint || post?.data?.post_hint}
              mediaEmbed = {post?.secure_media_embed || post?.data?.secure_media_embed}
              author = {post?.author || post?.data?.author}
              comments = {post?.num_comments || post?.data?.num_comments}
              score = {post?.score || post?.data?.score}
              created = {post?.created || post?.data?.created}
              permalink = {post?.permalink || post?.data?.permalink}

              // title = {post?.title} 
              // url = {post?.url}
              // image = {post?.url}
              // media = {post?.media}
              // subreddit = {post.subreddit}
              // selftext = {post?.selftext}
              // isVideo = {post?.is_video}
              // postHint = {post?.post_hint}
              // mediaEmbed = {post?.secure_media_embed}
              // author = {post?.author}
              // comments = {post?.num_comments}
              // score = {post?.score}
              // created = {post?.created}
              // permalink = {post?.permalink}

          />  )}
        </Row>
        ))
        }
    </div>
    </>
  )
 
}

export default PostList
