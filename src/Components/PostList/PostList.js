import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tile from '../Tile/Tile'
import { selectPosts, loadHotPosts, isLoading, formatData} from '../../Features/Posts/PostsSlice'
import { getToken, getPosts, getSubReddit } from '../../App/Reddit'
import { Row } from 'antd';

import './PostList.css'


function PostList({topic}) {
  const postList = useSelector(selectPosts)
  const isLoadingPosts = useSelector(isLoading)
  const [subReddit, setSubReddit] = useState()

  // useEffect(() => {
  //   dispatch(loadHotPosts())
  // },[dispatch],)

  if(isLoadingPosts) return 'Loading..'

  console.log(postList)

  return (
    <div className = 'posts-container'>
        {
        postList.map((post, index) => (
          <Row className = 'row' key = {index }>
          {postList && (<Tile   
              title = {post.title}
              url = {post.url}
              image = {post.url}
              media = {post.media}
              subreddit = {post.subreddit}
              selftext = {post.selftext}
              isVideo = {post.is_video}
              postHint = {post.post_hint}
              mediaEmbed = {post.secure_media_embed}
              author = {post.author}
              comments = {post.num_comments}
              score = {post.score}
              created = {post.created}

          />  )}
        </Row>
        ))
        }
    </div>
  )
}

export default PostList
