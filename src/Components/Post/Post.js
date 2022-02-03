import React, { useEffect } from 'react';
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { initializePost, getPost, clearPost } from '../../Features/Post/PostSlice' 

function Post() {
  const { subreddit, postId, post } = useParams();
  const dispatch = useDispatch();

  const permalink = `/r/${subreddit}/comments/${postId}/${post}/`
  console.log(permalink)

  useEffect(() => {
    dispatch(initializePost(permalink))
  })

  return (
    <div>
     <h1>Hey</h1>
    </div>
  )
}

export default Post
