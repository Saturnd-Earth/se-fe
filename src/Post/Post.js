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

    useEffect( () => {
      setIsLiked( props.likes.some( like => +like.userId === +props.userId ) )
    }, [props.likes, props.userId])

    function like() {
      setLoadingPos(true)
      sendNewLike({
        variables: {
          userId: +props.userData.id,
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
      .catch( err => {
        setLoadingPos(false)
        console.log('No one likes.' + err)
      })
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
          setLoadingPos(false)
          setIsLiked(!isLiked)
        })
        .catch( err => {
          setLoadingPos(false)
          console.log('No one likes.' + err)
        })
      }
    }

  let likeButton = isLiked ? blueLike : defaultLike;

  return (
      <section className='post'>
        <div className={`post-overlay ${loadingPos ? '' : 'hidden'}`}>
          <img className='spin' alt='Updating the Post' src={loading}></img>
        </div>
          <section className='post-left'>
              <div className='post-left-bottom'>
              {props.hideLike ?
                <></> :
                <img
                  src={likeButton}
                  alt='Like button'
                  id='like-button'
                  onClick={() => {
                    if (props.userData.id) {
                      if (isLiked) unlike()
                      else like()
                    }
                  }}/>

                }
              </div>
          </section>
          <section className='post-right'>
              <div className='post-right-top'>
                <em><strong><h5 className='post-right-top-h' id='name-header'>{props.userName}</h5></strong></em><br/>
                <em><h6 className='post-right-top-h' id='prt2'>Ring: {props.ring[1]}</h6></em><br/>
                <em><h6 className='post-right-top-h' id='prt3'>{gdate.getRelativeDistance(new Date(props.createdAt))} ago</h6></em><br/>
                <em><h6 className='post-right-top-h' id='prt4'>Latitude: {props.latitude}</h6></em><br/>
                <em><h6 className='post-right-top-h' id='prt4'>Longitude: {props.longitude}</h6></em><br/>
              </div>
              <div className='post-right-bottom'>
                <p className='post-right-bottom-p'>{props.content}</p><br/>
                <div className={props.url ? 'post-img-div' : 'post-img-div hidden'}>
                  {
                    props.postType == 'Image' ? (
                      <img
                        className='post-img'
                        src={props.url}
                        alt={props.content}
                        id={props.content}
                      />
                    ) : (
                      <iframe
                      className="post-vid"
                      max-width='75%'
                      height='auto'
                      src={props.url}
                      >
                      </iframe>
                    )
                  }
                </div>
              </div>
          </section>
      </section>
  )
}
