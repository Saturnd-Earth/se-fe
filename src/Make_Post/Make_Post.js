import React, { useState, useEffect } from 'react'
import Video from './Post_Forms/Video.js';
import Comment from './Post_Forms/Comment.js';
import Image from './Post_Forms/Image.js';
import '../Scss/base.scss';

import videoIcon from '../images/add-vid-white.png'
import imageIcon from '../images/add-img-white.png'
import commentIcon from '../images/add-comment-white.png'

const Make_Post = () => {
  const [commentInput, setCommentInput] = useState(Comment);
  const [commentInputNum, setCommentInputNum] = useState(1);

  useEffect(() => {
      //if one is set to true then remove a hidden class to the file
      //set the other two to false and add a hidden class to the text area
      //can I use part of the of the return and not all of it?
  });
  return (
    <section className='make-post-section'>
      <h4 className='make-post-text'>
        Start Your Ring By Making A Post Here
      </h4>
      <div className="tab">
        <button
          className={"tab-links" + (commentInputNum === 1 ? "-selected" : "")}
          onClick={() => {
            setCommentInput(Comment)
            setCommentInputNum(1)
          }}
        >
          <img src={commentIcon}
            alt='Leave a comment'
            className='icons make-post-comment'
            label="Add comment"
          />
          Add Comment
        </button>
        <button
          className={"tab-links" + (commentInputNum === 2 ? "-selected" : "")}
          onClick={() => {
            setCommentInput(Image)
            setCommentInputNum(2)
          }}
        >
          <img
            alt='Link a Video'
            src={imageIcon}
            className='icons'
            label="link image"
          />
          Link Image
        </button>
        <button
          className={"tab-links" + (commentInputNum === 3 ? "-selected" : "")}
          onClick={() => {
            setCommentInput(Image)
            setCommentInputNum(3)
          }}
        >
          <img
            alt='Link a Video'
            src={videoIcon}
            className='icons make-post-video'
            label="link video"
          />
          Link Video
        </button>
      </div>
      {commentInput}
      <button className='make-post-button'>
        Post
      </button>
    </section>
  )
}

export default Make_Post
