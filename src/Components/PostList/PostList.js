import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tile from '../Tile/Tile'
import { selectPosts, loadHotPosts, isLoading, formatData} from '../../Features/Posts/PostsSlice'
import { getToken, getPosts, getSubReddit } from '../../App/Reddit'
import { Row } from 'antd';

import './PostList.css'


function PostList({postList}) {
  // const postList = useSelector(selectPosts)
  const isLoadingPosts = useSelector(isLoading)

  if(isLoadingPosts) return 'Loading..'

  return (
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
  )
}

export default PostList
