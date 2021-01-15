import { addLike, addRing, hideMap, removeAllLikes, removeAllRings, setZoomToFitCenter } from '../mapActions.js';
import { cycleIndex } from '../helperFx.js';
import Error from '../Error/Error.js';
import { GET_FEED } from '../requests.js';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading.js';
import { Post } from '../Post/Post.js';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import prev from '../images/prev-mixed.png'
import next from '../images/next-mixed.png'

export default function Feed(props) {
    let [getFeed, {loading, error, data}] = useLazyQuery(GET_FEED);
    let [needNewRing, setNeedNewRing] = useState(true)
    let [postIndex, setPostIndex] = useState(0)
    let [reload, setReload] = useState(true)
    let history = useHistory();

    useEffect( () => {
      if (reload) {
        console.log('didFetch')
        getFeed({
          variables: {
            latitude: props.position.lat,
            longitude: props.position.lng
          }
        })
        setReload(false)
        return () => {
          console.log(history)
          if (history.location.pathname !== '/se-fe')
          setReload(true)
        }
      }
    }, [reload])
    console.log(data)
    if (loading) return <Loading/>
    if (error) return <Error message='Hmm... Something went wrong while fetching posts for you.'/>
    if (!data || !data.postsUserCanIncrease || data.postsUserCanIncrease.length === 0) {
      return (
        <>
          <h1>There are no posts for your area. Be the first!</h1>
            <Link to="/se-fe/make_post">
              <button
                onClick={ hideMap }
                style={{
                  "backgroundColor": "#C4C4C4b3",
                  "borderRadius": "1em",
                  "color": "#006c92",
                  "cursor": "pointer",
                  "fontSize": "1em",
                  "justifySelf": "center"
              }}>Click here to make a post!</button>
            </Link>
          </>
      )
    }

    let {
      createdAt,
      id,
      likes,
      latitude,
      longitude,
      postType,
      ringMinMax,
      url,
      text
    } = data.postsUserCanIncrease[postIndex]

    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )
    let center = {lat: () => latitude, lng: () => longitude}

    if (needNewRing && window.earthMapIsInitialized) {
      removeAllRings()
      setZoomToFitCenter(props.position, center)
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
