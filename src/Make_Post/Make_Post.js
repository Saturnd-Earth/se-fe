import React, { Component, useState, useEffect } from 'react'
import '../Scss/base.scss';

import videoIcon from '../images/add-vid-white.png'
import imageIcon from '../images/add-img-white.png'
import commentIcon from '../images/add-comment-white.png'

const Make_Post = () => {
  const [imageLink, setImageLink] = useState(false);
  const [comment, setComment] = useState(false);
  const [videoLink, setVideoLink] = useState(false);

  useEffect(() => {
      //if one is set to true then remove a hidden class to the file 
      //set the other two to false and add a hidden class to the text area 
      //can I use part of the of the return and not all of it?  
  }); 

  return (
    <section className='make-post-section'>
      <h4 className='make-post-text'>Start Your Ring By Making A Post Here</h4>
      <div className="tab">
        <button class="tab-links" onclick={() => setComment(comment = true)}>
          <img src={commentIcon} className='icons make-post-comment' label="Add comment"/>
          Add Comment
        </button>
        <button class="tab-links" onclick={() => setImageLink(imageLink = true)}>
          <img src={imageIcon} className='icons' label="link image"/>
          Link Image
        </button>
        <button class="tab-links" onclick={() => setVideoLink(videoLink = true)}>
          <img src={videoIcon} className='icons make-post-video' label="link video"/>
          Link Video
        </button>
      </div>
      <textarea 
        rows="1" cols="50"
        className='input-image-link-title tab-content'
        placeholder='Title'
      />
      <textarea 
        rows="3" cols="50"
        className='input-image-link tab-content'
        placeholder='input your image link!'
      />
      <textarea 
        rows="3" cols="50"
        className='input-video-link tab-content'
        placeholder='input your video link!'
      />
      <textarea 
        rows="10" cols="50"
        className='make-post-input tab-content'
        placeholder='Type your post here!'
      />
      <button className='make-post-button'>
        Post
      </button>
    </section>
  )
}

export default Make_Post
