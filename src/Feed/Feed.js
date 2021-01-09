import { GET_ALL_POSTS } from '../requests.js'
import React, { useState } from 'react';
import '../Scss/base.scss';
import { gql, useQuery } from '@apollo/client';
import { Post } from '../Post/Post.js';
import prev from '../images/prev-mixed.png';
import next from '../images/next-mixed.png';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import ringIcon from '../images/ring-icon.png';
import  Map  from '../Map/Map'


export default function Feed(props) {
    let [postIndex, setPostIndex] = useState(0)
    let {loading, error, data } = useQuery(GET_ALL_POSTS);

    if (loading) return <h1>LOADING POSTS...</h1>
    if (error) return <h1>Hmm... something went wrong.</h1>

    function addToIndex(num) {
      let arrLength = data.posts.length
      let total = num + postIndex
      let index = ((total % arrLength) + arrLength) % arrLength
      return index
    }

    let { content, createdAt, id, ringMinMax } = data.posts[postIndex]
    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )

    return (
        <section className='feed'>
            <h1 className='header-title'>{props.headerTitle}</h1>
            <Post content={content} createdAt={createdAt} id={id} ring={[min, max]}/>
            <Map 
            lat={content.lat}
            lon={content.lon}
            />
            <section className="next-previous-section">
              <button 
                className='buttons'
                id="previous-button"
                onClick={ () => setPostIndex( addToIndex( -1 )) }
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
                onClick={ () => setPostIndex( addToIndex( 1 )) }
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
