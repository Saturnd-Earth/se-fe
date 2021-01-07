import blueLike from '../images/like-blue.png';
import { CREATE_LIKE } from '../requests';
import defaultLike from '../images/like-white.png';
import React, { useState, useEffect }  from 'react';
import { useMutation } from '@apollo/client';
import '../Scss/base.scss';

export function Post(props) {
    let [userInfo, setUserInfo] = useState({
        userIcon: null,
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
    if (props.myPostsPage) {
        return (
            <section className='post'>
                <section className='post-left'>
                    <div className='post-left-top'>
                        <img src={props.icon} alt='User Icon' id='user-icon'/>
                    </div>
                    <div className='post-left-bottom' style={{display: 'grid',
                    gridTemplateRows: '1em 1em', paddingTop: '.5em'}}>
                        <em style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}><h6  style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}>Lat: </h6></em>
                        <em style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}><h6  style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}>{props.lat}</h6></em>
                        <em style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}><h6  style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}>Lon: </h6></em>
                        <em style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}><h6  style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}>{props.lon}</h6></em>
                    </div>
                </section>
                <section className='post-right'>
                    <div className='post-right-top'>
                            <em><strong><h5 className='post-right-top-h' id='name-header'>Last liked in: {props.lastLike}</h5></strong></em><br/>
                            <em><h6 className='post-right-top-h' id='prt2'>Ring: {props.ring}</h6></em><br/>
                            <em><h6 className='post-right-top-h' id='prt3'>Date: {props.date}</h6></em>
                    </div>
                    <div className='post-right-bottom'>
                        <p className='post-right-bottom-p'>{props.content}</p>
                    </div>
                </section>
            </section>
        )
    } else {
        return (
            <section className='post'>
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
                            <em><h6 className='post-right-top-h' id='prt2'>Ring: {props.ring}</h6></em><br/>
                            <em><h6 className='post-right-top-h' id='prt3'>Date: {props.date}</h6></em>
                    </div>
                    <div className='post-right-bottom'>
                        <p className='post-right-bottom-p'>{props.content}</p>
                    </div>
                </section>
            </section>
        )
    }
}