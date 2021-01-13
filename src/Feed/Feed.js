import { addLike, addRing, removeAllLikes, removeAllRings } from '../mapActions.js';
import { cycleIndex } from '../helperFx.js'
import { GET_ALL_POSTS } from '../requests.js';
import { useQuery } from '@apollo/client';
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

    let { content, createdAt, id, likes, latitude, longitude, ringMinMax } = data.posts[postIndex]
    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )
    let center = {lat: () => latitude, lng: () => longitude}

    console.log(data)
    if (needNewRing && earthMapIsLoaded) {
      removeAllRings()
      window.earthMap.setZoom(10)
      window.earthMap.setCenter({lat: latitude, lng: longitude})
      addRing( center, min, max )
      setNeedNewRing(false)

      removeAllLikes()
      likes.forEach( like => {
        console.log(like)
        let center = {lat: latitude, lng: longitude}
        addLike( center )
      })

    } else if (!earthMapIsLoaded) {
      window.setTimeout( () => setEarthMapIsLoaded(window.earthMap !== undefined), 100)
    }

    return (
        <section className='feed'>
            <h1 className='header-title'>{props.headerTitle}</h1>
            <Post center={center} content={content} createdAt={createdAt} id={id} likes={likes} userId={19} ring={[min, max]}/>
            <section className="next-previous-section">
              <button
                className='buttons'
                id="previous-button"
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
                className='buttons'
                id="next-button"
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
