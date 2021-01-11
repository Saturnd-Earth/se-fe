import { addRing, removeAllRings } from '../mapActions.js';
import { cycleIndex } from '../helperFx.js'
import { GET_ALL_POSTS } from '../requests.js';
import { gql, useQuery } from '@apollo/client';
import { Post } from '../Post/Post.js';
import React, { useState } from 'react';
import '../Scss/base.scss';
import prev from '../images/prev-mixed.png'
import next from '../images/next-mixed.png'

export default function Feed(props) {
    let {loading, error, data } = useQuery(GET_ALL_POSTS);
    let [earthMapIsLoaded, setEarthMapIsLoaded] = useState(window.earthMap !== undefined)
    let [needNewRing, setNeedNewRing] = useState(true)
    let [postIndex, setPostIndex] = useState(0)

    if (loading) return <h1>LOADING POSTS...</h1>
    if (error) return <h1>Hmm... something went wrong.</h1>

    let { content, createdAt, id, latitude, longitude, ringMinMax } = data.posts[postIndex]
    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )

    if (needNewRing && earthMapIsLoaded) {
      if (window.earthRings.length > 0) removeAllRings()
      let center = {lat: () => latitude, lng: () => longitude}
      let newRing = addRing( center, min, max )
      window.earthMap.setZoom(10)
      window.earthMap.setCenter({lat: latitude, lng: longitude})
      setNeedNewRing(false)

    } else if (!earthMapIsLoaded) {
      window.setTimeout( () => setEarthMapIsLoaded(window.earthMap !== undefined), 100)
    }

    return (
        <section className='feed'>
            <h1 className='header-title'>{props.headerTitle}</h1>
            <Post content={content} createdAt={createdAt} id={id} ring={[min, max]}/>
            <section className="next-previous-section">
              <button
                className="previous-button"
                onClick={ () => {
                  setNeedNewRing(true)
                  setPostIndex( cycleIndex( postIndex, data.posts.length, -1 ))
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
                className="next-button"
                onClick={ () => {
                  setNeedNewRing(true)
                  setPostIndex( cycleIndex( postIndex, data.posts.length, 1 ))
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
