import blueLike from '../images/like-blue.png';
import { CREATE_LIKE } from '../requests';
import defaultLike from '../images/like-white.png';
import dummyIcon from '../images/dummyIcon.png';
import React, { useState, useEffect }  from 'react';
import { useMutation } from '@apollo/client';
import '../Scss/base.scss';
import ringIcon from '../images/ring-icon.png';

export function Post(props) {
    let [userInfo, setUserInfo] = useState({
        userIcon: dummyIcon,
        name: null,
        id: 10
    })
    let [postInfo, setPostInfo] = useState({
        ring: 0,
        id: 14,
        date: null,
        liked: false,
        postContent: null,
    })
    let [page, setPage] = useState({
        myPosts: true
    })
    let [loadingPos, setLoadingPos] = useState(false)
    let [sendNewLike, { data }] = useMutation(CREATE_LIKE);

    useEffect(() => {
        // Set icon
        if (props.myPostsPage) {
            setUserInfo({
                ...userInfo,
                userIcon: ringIcon
            })
        }
        // Render content
        setPostInfo({
            ...postInfo,
            postContent: props.content
        })
    }, [userInfo, postInfo])

    let like = async () => {
        setLoadingPos(true)
        window.navigator.geolocation.getCurrentPosition(
          (pos) => {
            console.log(userInfo.id,
              postInfo.id,
              pos.coords.latitude,
              pos.coords.longitude
          )
            console.log(pos)
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
      setTimeout( () => setLoadingPos(false), 16000)
    }

    let likeButton;
    !postInfo.liked ? likeButton = defaultLike : likeButton = blueLike;
    if (loadingPos) return (<h1>LOADING YOUR LOCATION....</h1>)
    return (
        <section className='post'>
            <section className='post-left'>
                <div className='post-left-top'>
                    <img src={userInfo.userIcon} alt='User Icon' id='user-icon'/>
                </div>
                <div className='post-left-bottom'>
                    <img src={likeButton} alt='Like button' id='like-button' onClick={() => like()}/>
                </div>
            </section>
            <section className='post-right'>
                <div className='post-right-top'>
                        <em><strong><h5 className='post-right-top-h' id='name-header'>{userInfo.name}</h5></strong></em><br/>
                        <em><h6 className='post-right-top-h' id='prt2'>Ring: {postInfo.ring}</h6></em><br/>
                        <em><h6 className='post-right-top-h' id='prt3'>Date: </h6></em>
                </div>
                <div className='post-right-bottom'>
                    <p className='post-right-bottom-p'>{postInfo.postContent}</p>
                </div>
            </section>
        </section>
    )
}
