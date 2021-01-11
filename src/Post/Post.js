import blueLike from '../images/like-blue.png';
import { CREATE_LIKE, DESTROY_LIKE } from '../requests';
import dummyIcon from '../images/dummyIcon.png'
import defaultLike from '../images/like-white.png';
import loading from '../images/loading.png';
import React, { useState }  from 'react';
import { useMutation } from '@apollo/client';
import '../Scss/base.scss';

export function Post(props) {
    let [userInfo, setUserInfo] = useState({
        userIcon: null,
        name: null,
        id: 10
    })
    let [postInfo, setPostInfo] = useState({
        ring: props.ring,
        id: props.id,
        createdAt: props.createdAt,
        liked: props.liked,
        content: props.content,
    })
    let [page, setPage] = useState({
        myPosts: true
    })
    let [loadingPos, setLoadingPos] = useState(false)
    let [sendNewLike, { data }] = useMutation(CREATE_LIKE);
    let [destroyLike] = useMutation(DESTROY_LIKE);

    function like() {
        setLoadingPos(true)
        window.navigator.geolocation.getCurrentPosition(
          (pos) => {
            setLoadingPos(false)
            setPostInfo({
                ...postInfo,
                liked: !postInfo.liked
            })
            sendNewLike({
              variables: {
                userId: userInfo.id,
                postId: postInfo.id,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
              }
            })
            .then( () => {

            })
            .catch( err => console.log('No one likes.' + err))
          },
          (err) => {
            console.log('BAD GEOLOCATOR ' + err)
          }
      )
    }

    function unlike() {
        setLoadingPos(true)
        window.navigator.geolocation.getCurrentPosition(
          (pos) => {
            setLoadingPos(false)
            setPostInfo({
                ...postInfo,
                liked: !postInfo.liked
            })
            destroyLike({
              variables: {
                userId: userInfo.id,
                postId: postInfo.id,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
              }
            })
            .then( () => {

            })
            .catch( err => console.log('No one likes.' + err))
          },
          (err) => {
            console.log('BAD GEOLOCATOR ' + err)
          }
      )
    }

    let likeButton = postInfo.liked ? blueLike : defaultLike;

    return (
        <section className='post'>
          <div className={`post-overlay ${loadingPos ? '' : 'hidden'}`}>
            <img className='spin' src={loading}></img>
          </div>
            <section className='post-left'>
                <div className='post-left-top'>
                    <img src={props.icon} alt='User Icon' id='user-icon'/>
                </div>
                <div className='post-left-bottom'>
                    <img src={likeButton} alt='Like button' id='like-button' onClick={() => like()}/>
                </div>
            </section>
            <section className='post-right'>
                <div className='post-right-top'>
                        <em><strong><h5 className='post-right-top-h' id='name-header'>{props.name}</h5></strong></em><br/>
                        <em><h6 className='post-right-top-h' id='prt2'>Ring: {props.ring[1]}</h6></em><br/>
                        <em><h6 className='post-right-top-h' id='prt3'>Date: {props.createdAt}</h6></em>
                </div>
                <div className='post-right-bottom'>
                    <p className='post-right-bottom-p'>{props.content}</p>
                </div>
            </section>
        </section>
    )
}
