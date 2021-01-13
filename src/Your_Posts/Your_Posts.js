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
    if (loading) {
      return (
        <>
          <h1>LOADING POSTS...</h1>
          <Loading />
        </>
      )
    }

    if (error) return <h1>Hmm... something went wrong.</h1>
    return (
        <section>
            <h1 className='header-title'>{props.headerTitle}</h1>
            {
                data.postsByUser.map(post => {
                  let { content, createdAt, id, likes, latitude, longitude, postType, ringMinMax, url, text } =  post;
                    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )
                    let center = {lat: () => latitude, lng: () => longitude}
                    console.log(post)
                    return (
                        <Post
                        center={center}
                        content={post.text}
                        createdAt={post.createdAt}
                        id={post.id}
                        likes={likes}
                        ring={[post.min, post.max]}
                        icon={props.icon}
                        latitude={post.latitude}
                        longitude={post.longitude}
                        position={props.position}
                        postType={post.postType}
                        userData={props.userData}
                        userId={+props.userData.id}
                        url={post.url}
                        />
                    )




                })
            }
        </section>
    )
}
