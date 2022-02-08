import { Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostComments } from '../../Features/Post/PostSlice'
import Comment from '../Comment/Comment'

import './CommentList.css'


function CommentList() {
  const comments = useSelector(selectPostComments)
  
  return (
    <div className = 'comment-list-container'>
      <div className = 'comments-header-container'>
          <h2>Comments ({comments.length})</h2>
      </div>
      <div className = 'comments-container'>
          {
            comments.map((comment, index) => (
              <Row key = {index}>
                <Comment
                    body = {comment.data.body}
                    author = {comment.data.author} 
                    replies = {comment.data.replies}
                    created = {comment.data.created}
                    score = {comment.data.score}
                />
              </Row>
            ))
          }
      </div>
      
    </div>
  )
}

export default CommentList
