import { addLike, addRing, removeAllLikes, removeAllRings } from '../mapActions.js';
import { cycleIndex } from '../helperFx.js'
import { GET_FEED } from '../requests.js';
import Loading from '../Loading/Loading.js'
import { Post } from '../Post/Post.js';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import prev from '../images/prev-mixed.png'
import next from '../images/next-mixed.png'

export default function Feed(props) {
  console.log(props)
    let {loading, error, data } = useQuery(GET_FEED, {
      variables: {
        latitude: props.position.lat || 0,
        longitude: props.position.lng || 0
      }
    });
    let [needNewRing, setNeedNewRing] = useState(true)
    let [postIndex, setPostIndex] = useState(0)

    if (loading) return <Loading/>
    if (error) return <h1>Hmm... something went wrong.</h1>
    if (!data || !data.postsUserCanIncrease || data.postsUserCanIncrease.length === 0) {
      return (
        <h1>There are no posts for your area. Be the first!</h1>
      )
    }
    console.log(data)
    let { createdAt, id, likes, latitude, longitude, postType, ringMinMax, url, text } = data.postsUserCanIncrease[postIndex]
    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )
    let center = {lat: () => latitude, lng: () => longitude}

    if (needNewRing && window.earthMapIsInitialized) {
      removeAllRings()
      window.earthMap.setZoom(10)
      window.earthMap.setCenter({lat: latitude, lng: longitude})
      addRing( center, min, max )
      setNeedNewRing(false)

      removeAllLikes()
      likes.forEach( like => addLike( {lat: latitude, lng: longitude} ))
    }

    return (
        <section className='feed'>
            <h1 className='header-title'>
              {props.userData.id === null ? 'Please login to like a post' : ''}
            </h1>
            <Post
              center={center}
              content={text}
              createdAt={createdAt}
              id={id}
              likes={likes}
              ring={[min, max]}
              latitude={latitude}
              longitude={longitude}
              position={props.position}
              postType={postType}
              url={url}
              userData={props.userData}
              userId={+props.userData.id}
            />
            <section className="next-previous-section">
              <button
                className='buttons'
                id="previous-button"
                onClick={ () => {
                  setNeedNewRing(true)
                  setPostIndex( cycleIndex( postIndex, data.postsUserCanIncrease.length, -1 ))
                }}
              >
                <img
                    src={prev}
                    alt='previous arrow'
                    label='previous arrow'
                    className='logon-icons'
                />
                Previous
              </button>
              <button
                className='buttons'
                id="next-button"
                onClick={ () => {
                  setNeedNewRing(true)
                  setPostIndex( cycleIndex( postIndex, data.postsUserCanIncrease.length, 1 ))
                }}
              >
                Next
                <img
                    src={next}
                    alt='previous arrow'
                    label='previous arrow'
                    className='logon-icons'
                />
              </button>
            </section>
        </section>
    )
}
