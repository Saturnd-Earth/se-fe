import { addRing, removeAllRings } from '../mapActions.js'
import { GET_USER_POSTS } from '../requests.js'
import Loading from '../Loading/Loading.js'
import React, { useState } from 'react';
import '../Scss/base.scss';
import { useQuery } from '@apollo/client';
import { Post } from '../Post/Post.js';

export default function YourPosts(props) {
    let {loading, error, data } = useQuery(GET_USER_POSTS, {
        variables: { userId: +props.userData.id },
    })

    if (props.userData.id === null) return <h1>Please sign in to access this feature!</h1>
    if (loading) {
      return (
        <>
          <Loading />
          <h1>LOADING POSTS...</h1>
        </>
      )
    }
    if (error) return <h1>Hmm... something went wrong.</h1>
    removeAllRings()
    return (
        <section>
            <h1 className='header-title'>{props.headerTitle}</h1>
            {
                data.postsByUser.map((post, i) => {
                  let { content, createdAt, id, likes, latitude, longitude, postType, ringMinMax, url, text } =  post;
                  let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )
                  let center = {lat: () => latitude, lng: () => longitude}
                  addRing( center, min, max )
                  return (
                      <Post
                      center={center}
                      content={text}
                      createdAt={createdAt}
                      hideLike={true}
                      id={+id}
                      key={`YourPost #${i}`}
                      likes={likes}
                      icon={props.icon}
                      latitude={latitude}
                      longitude={longitude}
                      position={props.position}
                      postType={postType}
                      ring={[min, max]}
                      userData={props.userData}
                      userId={+props.userData.id}
                      url={url}
                      />
                    )
                })
            }
        </section>
    )
}
