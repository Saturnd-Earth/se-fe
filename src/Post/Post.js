import { addRing, removeAllRings } from '../mapActions.js';
import blueLike from '../images/like-blue.png';
import { CREATE_LIKE, DESTROY_LIKE } from '../requests';
import dummyIcon from '../images/dummyIcon.png'
import defaultLike from '../images/like-white.png';
import gdate from 'gdate'
import loading from '../images/loading.png';
import { makeCircle } from '../helperFx.js'
import React, { useState }  from 'react';
import { useMutation } from '@apollo/client';
import '../Scss/base.scss';

export function Post(props) {
    let [userInfo, setUserInfo] = useState({
        userIcon: null,
        name: null,
        id: 10
    })
    let [isLiked, setIsLiked] = useState(false)
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
            setIsLiked(!isLiked)
            sendNewLike({
              variables: {
                userId: userInfo.id,
                postId: +props.id,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
              }
            })
            .then( response => {
              let [min, max] = props.ring
              let points = [ ...Array(30).keys() ];
              const outerCoords = makeCircle( props.center, (max + 1) * 2, points);
              const innerCoords = makeCircle( props.center, (min + 1) * 2, points.reverse());
              window.earthRings[0].setPaths([outerCoords, innerCoords])
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
            setIsLiked(!isLiked)
            destroyLike({
              variables: {
                userId: userInfo.id,
                postId: props.id,
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

    let likeButton = isLiked ? blueLike : defaultLike;

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
                        <em><h6 className='post-right-top-h' id='prt3'>{gdate.getRelativeDistance(new Date(props.createdAt))} ago</h6></em>
                </div>
                <div className='post-right-bottom'>
                    <p className='post-right-bottom-p'>{props.content}</p>
                </div>
            </section>
        </section>
    )
}
