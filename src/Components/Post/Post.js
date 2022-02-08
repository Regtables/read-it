import React, { useEffect } from 'react';
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { initializePost, getPost, clearPost,  selectPost, selectPostComments, isLoadingPost } from '../../Features/Post/PostSlice' 
import { initializePage, selectSubredditInfo } from '../../Features/Subreddit/SubredditSlice'
import Tile from '../Tile/Tile';
import CommentList from '../CommentList/CommentList';
import { Row, Avatar } from 'antd'
import { LinkOutlined, RiseOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './Post.css'

function Post() {
  const { subreddit, postId, postTitle } = useParams();

  const comments = useSelector(selectPostComments);
  const post = useSelector(selectPost);
  const currentSubreddit = useSelector(selectSubredditInfo)
  const loading = useSelector(isLoadingPost)

  const dispatch = useDispatch();

  const permalink = `/r/${subreddit}/comments/${postId}/${postTitle}/`
  
  console.log(post)

  useEffect(() => {
    dispatch(initializePost(permalink))
    dispatch(initializePage(subreddit))
  },[permalink, dispatch])

  let video = false;
  let embed = false;

  function dateCreated(){
    var d = new Date(0);
    d.setUTCSeconds(post.created)
    return d
  }


  function isLink(url){
    if(url){  
        if(!(url.includes('.jpg') || url.includes('.png') || url.includes('.gif') || video || embed)){
            // console.log(url)
            return <Row className = 'link-container'>  
                        <a href = {url} target = '_blank'><LinkOutlined />{url}</a>
                    </Row>
        }            
      } else {
          return
      }
  }

  function isVideo(isVideo, media){
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

  function isEmbed(mediaEmbed){
    if(mediaEmbed){
        if(mediaEmbed.media_domain_url){
            embed = true;
            return <Row className = 'embed-container'>
                        <embed src = {mediaEmbed.media_domain_url} style = {{width: mediaEmbed.width, height: mediaEmbed.height}}/>
                    </Row>
            }
    } else {
        return
    }
  }

  function isImage(url){
    if(url){  
        if(url.includes('.jpg') || url.includes('.png') || url.includes('.gif')){
            return <Row className = 'img-container'>
                        <img src = {url} />
                    </Row>
        }            
    } else {
        return
    }
  }

  return (
    <div className = 'post-container'>
        <div className = 'post-header-container'>
          <div className = 'post-subreddit-container'>
              <Link to = {`/${post.subreddit}`}><p><Avatar src = {currentSubreddit.icon_img || currentSubreddit.header_img} size = 'large'/>r/{post.subreddit}</p></Link>
          </div>
          <div className = 'post-title-container'>
              <h3>{post.title}</h3>
          </div>
          <div className = 'post-link-container'>
            <a href = {`https://reddit.com/${post.permalink}`} target = '_blank'><span style = {{color: 'grey'}}>View on Reddit: </span>{`https://reddit.com/${post.permalink}`}</a>
          </div>
        </div> 
        <hr />
        <div className = 'post-body-container' >
            {isVideo(post.is_video, post.media)}
            {isEmbed(post.secure_media_embed)}
            {isImage(post.url)}
            <p>{post.selftext}</p>
            {isLink(post.url)}
        </div>
        <div className = 'post-footer'>
            <p className = 'post-created'> created {<span className ='post-date'>{moment(dateCreated()).startOf('ss').fromNow()}</span>} by {<span className = 'post-author'>{post.author}</span>}</p>
            <h2 className = 'post-score'>Score: {post.score} <RiseOutlined /></h2>

        </div>
        <div className = 'post-comments-container'>
            <CommentList />
        </div>
    </div>
  )
}

export default Post
