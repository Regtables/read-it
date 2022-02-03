import React from 'react'
import { useSelector } from 'react-redux'
import { selectSubreddit, selectSubredditInfo } from '../../Features/Subreddit/SubredditSlice'
import './Tile.css'
import { Row, Col, Avatar} from 'antd'
import { CommentOutlined, UserOutlined, RiseOutlined, LinkOutlined} from '@ant-design/icons'
import  moment from 'moment'
import { Link } from 'react-router-dom'

function Tile({title, 
               media, 
               subreddit, 
               width, 
               height, 
               selftext, 
               isVideo, 
               url, 
               image,
               postHint,
               mediaEmbed,
               author,
               comments,
               score,
               created
            }){
  const subredditInfo = useSelector(selectSubredditInfo)
  
  function dateCreated(){
    var d = new Date(0);
    d.setUTCSeconds(created)
    return d
  }

  let video = false;     
  let embed = false;     
  
  function isLink(){
      if(!(url.includes('.jpg') || url.includes('.png') || url.includes('.gif') || video || embed)){
        // console.log(url)
        return <Row className = 'link-container'>  
                    <a href = {url} target = '_blank'><LinkOutlined />{url}</a>
                </Row>    
      } else {
          return
      }
  }

  function isVideo(){
    if(isVideo && media){
        if(media.reddit_video) {
            video = true;
            return <Row className = 'video-container'>
                        <video controls preload = 'true'>
                            <source src = {media.reddit_video.fallback_url}></source>
                        </video>
                    </Row>
        }
    } else{
        return
    }
  }

  function isEmbed(){
    if(mediaEmbed.media_domain_url){
        embed = true;
        return <Row className = 'embed-container'>
                    <embed src = {mediaEmbed.media_domain_url} style = {{width: mediaEmbed.width, height: mediaEmbed.height}}/>
                </Row>
    } else {
        return
    }
  }

  function isImage(){
    if(url.includes('.jpg') || url.includes('.png') || url.includes('.gif')){
        return <Row className = 'img-container'>
                    <img src = {url} />
                </Row>
    } else {
        return
    }
  }

  return (
      <div className = 'tile-container'>
          <div className = 'subreddit-container'>
               <Link to = {`/${subreddit}`}><p>r/{subreddit}</p></Link>
          </div>
          <div className = 'title-container'>
                <h3>{title}</h3>
          </div>
          <hr />
          <div className = 'tile-body-container' >
                {isVideo()}
                {isEmbed()}
                {isImage()}
                <p>{selftext}</p>
                {isLink()}
          </div>
          <hr />
          <Row className = 'tile-footer-container'>
                <Col className = 'author-container'>
                    <p>Posted by <span><UserOutlined />{author}</span></p>
                </Col>
                <Col className = 'number-of-comments-container'>
                    <p>{comments} <CommentOutlined/> <span>comments</span></p>
                </Col>
                <Col className = 'score-container'>
                    <p>{score}<RiseOutlined /> score</p>
                </Col>
                <Col className = 'created-container'>
                    <p className = 'fromLeft'>created <span>{moment(dateCreated()).startOf('ss').fromNow()}</span></p>
                </Col>
          </Row>
      </div>
  )
}

export default Tile
