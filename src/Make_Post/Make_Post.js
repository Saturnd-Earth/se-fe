import React, { Component, useState, useEffect } from 'react'
import MakePostInput from './Make_Post_Input.js';
import '../Scss/base.scss';

import videoIcon from '../images/add-vid-white.png'
import imageIcon from '../images/add-img-white.png'
import commentIcon from '../images/add-comment-white.png'

const Make_Post = () => {
  const [commentInput, setCommentInput] = useState(3);

  useEffect(() => {
      //if one is set to true then remove a hidden class to the file 
      //set the other two to false and add a hidden class to the text area 
      //can I use part of the of the return and not all of it?  
  }); 

  return (
    <section className='make-post-section'>
      <h4 className='make-post-text'>Start Your Ring By Making A Post Here</h4>
      <div className="tab">
        <button className="tab-links" onClick={() => {
          console.log("hi")
          setCommentInput(1)}
        }>
          <img src={commentIcon} className='icons make-post-comment' label="Add comment"/>
          Add Comment
        </button>
        <button className="tab-links" onClick={() => setCommentInput(2)}>
          <img src={imageIcon} className='icons' label="link image"/>
          Link Image
        </button>
        <button className="tab-links" onClick={() => setCommentInput(3)}>
          <img src={videoIcon} className='icons make-post-video' label="link video"/>
          Link Video
        </button>
      </div>
      <MakePostInput commentInput={commentInput}/>
      <button className='make-post-button'>
        Post
      </button>
    </section>
  )
}

export default Make_Post
