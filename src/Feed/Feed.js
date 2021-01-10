import {addRing} from '../addRing.js';
import { GET_ALL_POSTS } from '../requests.js';
import { gql, useQuery } from '@apollo/client';
import { Post } from '../Post/Post.js';
import React, { useState } from 'react';
import '../Scss/base.scss';

export default function Feed(props) {
    let {loading, error, data } = useQuery(GET_ALL_POSTS);
    let [earthMapIsLoaded, setEarthMapIsLoaded] = useState(window.earthMap !== undefined)
    let [needNewRing, setNeedNewRing] = useState(true)
    let [postIndex, setPostIndex] = useState(0)
    let [ring, setRing] = useState(null)

    let addToIndex = (num) => {
      let arrLength = data.posts.length
      let total = num + postIndex
      let index = ((total % arrLength) + arrLength) % arrLength
      return index
    }

    if (loading) return <h1>LOADING POSTS...</h1>
    if (error) return <h1>Hmm... something went wrong.</h1>

    let { content, createdAt, id, latitude, longitude, ringMinMax } = data.posts[postIndex]
    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )

    let lat = () => latitude
    let lng = () => longitude
    let newRing = addRing({lat, lng}, min, max)

    if (needNewRing && earthMapIsLoaded) {
      if (ring) {
        ring.setMap( null )
      }
      setRing(newRing)
      window.earthMap.setZoom(10)
      window.earthMap.setCenter({lat: lat(), lng: lng()})
      setNeedNewRing(false)

    } else {
      window.setTimeout( () => setEarthMapIsLoaded(window.earthMap !== undefined), 100)
    }

    return (
        <section className='feed'>
            <h1 className='header-title'>{props.headerTitle}</h1>
            <Post content={content} createdAt={createdAt} id={id} ring={[min, max]}/>

            <button
              onClick={ () => {
                setNeedNewRing(true)
                setPostIndex( addToIndex( -1 ))
              }}
            >Previous</button>

            <button
              onClick={ () => setPostIndex( addToIndex( 1 )) }>Next</button>
        </section>
    )
}
