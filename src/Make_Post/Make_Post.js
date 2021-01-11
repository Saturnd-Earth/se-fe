import React, { useState } from 'react'
import Video from './Post_Forms/Video.js';
import Comment from './Post_Forms/Comment.js';
import Image from './Post_Forms/Image.js';
import '../Scss/base.scss';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../requests.js';

import videoIcon from '../images/add-vid-white.png'
import imageIcon from '../images/add-img-white.png'
import commentIcon from '../images/add-comment-white.png'

const Make_Post = () => {
  const [input, setInput] = useState({});
  const [commentInput, setCommentInput] = useState(() => () => <Comment setInput={setInput}/>);
  const [commentInputNum, setCommentInputNum] = useState(1);
  const [sendPost, { data }] = useMutation(CREATE_POST);
  const [loadingPos, setLoadingPos] = useState(false)

  const post = async () => {
      setLoadingPos(true)
      window.navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLoadingPos(false)
          sendPost({
            variables: {
              userId: 10,
              content: `${input}`,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          })
          .then( () => {
            console.log('hey that worked?')
          })
          .catch( err => console.log('No one likes.' + err))
        },
        (err) => {
          console.log('BAD GEOLOCATOR ' + err)
        }
    )
    setTimeout( () => setLoadingPos(false), 16000)
  }

  return (
    <section className='make-post-section'>
      <h4 className='make-post-text'>
        Start Your Ring By Making A Post Here
      </h4>
      <div className="tab">
        <button
          className={"tab-links" + (commentInputNum === 1 ? "-selected" : "")}
          onClick={() => {
            setCommentInput(() => () => <Comment setInput={setInput}/>)
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
            setCommentInput(() => () => <Image setInput={setInput}/>)
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
            setCommentInput(() => () => <Video setInput={setInput} input={input}/>)
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
      {commentInput()} 
      <button
        onClick={() => post()} 
        className='make-post-button'
      >
        Post
      </button>
    </section>
  )
}

export default Make_Post
