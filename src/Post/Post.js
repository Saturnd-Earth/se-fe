import blueLike from '../images/like-blue.png';
import { CREATE_LIKE, DESTROY_LIKE } from '../requests';
import defaultLike from '../images/like-white.png';
import gdate from 'gdate'
import { increaseRingSize } from '../mapActions.js'
import loading from '../images/loading.png';
import React, { useState, useEffect }  from 'react';
import { useMutation } from '@apollo/client';
import '../Scss/base.scss';

export function Post(props) {
    let [isLiked, setIsLiked] = useState( props.likes.some( like => +like.userId === +props.userId ) )
    let [loadingPos, setLoadingPos] = useState(false)
    let [sendNewLike] = useMutation(CREATE_LIKE);
    let [destroyLike] = useMutation(DESTROY_LIKE);
    let [signedIn, setSignedIn] = useState(false);

    useEffect( () => {
      setIsLiked( props.likes.some( like => +like.userId === +props.userId ) )
    }, [props.likes, props.userId])

    function like() {
      console.log(props.position)
      setLoadingPos(true)
      sendNewLike({
        variables: {
          userId: +props.userId,
          postId: +props.id,
          latitude: props.position.lat,
          longitude: props.position.lng
        }
      })
      .then( response => {
        setLoadingPos(false)
        setIsLiked(!isLiked)
        increaseRingSize(props.ring[1], props.center)
      })
      .catch( err => console.log('No one likes.' + err))
    }

    function unlike() {
      let like = props.likes.find( like => +like.userId === +props.userId )
      if (like !== undefined) {
        setLoadingPos(true)
        destroyLike({
          variables: {
            id: +like.id
          }
        })
        .then( () => {
          setIsLiked(!isLiked)
          setLoadingPos(false)
        })
        .catch( err => console.log('No one likes.' + err))
      }
    }
    let likeButton = isLiked ? blueLike : defaultLike;

    let likeCallBack = signedIn ? () => {
      return( <img
            src={likeButton}
            alt='Like button'
            className='like-call-back'
          />
      )} : () => {
      return( <img
          src={likeButton}
          alt='Like button'
          id='like-button'
          onClick={() => isLiked? unlike() : like()}
        />
      )};

    let likeCallBackText = signedIn ? () => {
      return( <p className='post-right-bottom-p' >
               Please Sign In To Like a Post And Start Expanding Rings Sizes
             </p>
    )} : () => {
      return( <p className='post-right-bottom-p'>
                {props.content}
              </p>
      )};

    return (
        <section className='post'>
          <div className={`post-overlay ${loadingPos ? '' : 'hidden'}`}>
            <img className='spin' alt='Updating the Post' src={loading}></img>
          </div>
            <section className='post-left'>
                <div className='post-left-bottom'>
                    {likeCallBack()}
                </div>
            </section>
            <section className='post-right'>
                <div className='post-right-top'>
                        <em><strong><h5 className='post-right-top-h' id='name-header'>{props.userName}</h5></strong></em><br/>
                        <em><h6 className='post-right-top-h' id='prt2'>Ring: {props.ring[1]}</h6></em><br/>
                        <em><h6 className='post-right-top-h' id='prt3'>{gdate.getRelativeDistance(new Date(props.createdAt))} ago</h6></em>
                </div>
                <div className='post-right-bottom'>
                    {likeCallBackText()}
                </div>
            </section>
        </section>
    )
}
