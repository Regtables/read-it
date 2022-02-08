import { Col, Row } from 'antd'
import React, { useState } from 'react'
import parse from 'html-react-parser'
import moment from 'moment'
import './Comment.css'
import { CommentOutlined, UserOutlined, RiseOutlined, CaretDownFilled} from '@ant-design/icons'

function Comment({body, author,replies, created, score}) {

  const [hideReply, setHideReply ] = useState('true')

  function dateCreated(){
    var d = new Date(0);
    d.setUTCSeconds(created)
    return d
  }

  function toggleReply() {
    console.log(hideReply)
    setHideReply(!hideReply)
  }

  function hasReplies(commentReplies){
    if(commentReplies?.data){
      console.log(commentReplies.data.children)
      return (
        <>
        <Row className = 'replies' onClick = {toggleReply}>Replies <CaretDownFilled /></Row>
        <Col className = 'replies-container' style ={hideReply && ({display: 'none'})}>
          {
            commentReplies?.data?.children?.map((reply, index) => (
              reply.data.body && (
                <Col className = 'reply-container' key = {index}>
                  <Row className = 'comment-header-container reply-title'>
                      <h4><UserOutlined />{reply.data.author}</h4>
                      <p className = 'created'>({moment(dateCreated()).startOf('ss').fromNow()})</p>
                  </Row>
                  <Row className = 'comment-body-container'>
                      <p>{reply.data.body}</p>
                  </Row>
                  
                  <Row className = 'comment-footer-container'>
                     <p className = 'score'> <RiseOutlined /> {reply.data.score} points</p>
                  </Row>
              </Col>
              )
            ))
          }
        </Col>
        </>
      )
    } else {
        return
    }
  }

  return (
    <>
      <div className = 'comment-container'>
        <Row className = 'comment-header-container'>
            <h4><UserOutlined />{author}</h4>
            <p className = 'created'>({moment(dateCreated()).startOf('ss').fromNow()})</p>
        </Row>
        <Row className = 'comment-body-container'>
            <p>{body}</p>
        </Row>
        
        <Row className = 'comment-footer-container'>
            <p className = 'score'><RiseOutlined /> {score} points</p>
        </Row>
      </div>
      {hasReplies(replies)}
    </>
  )
}

export default Comment
