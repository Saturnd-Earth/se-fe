import { GET_ALL_POSTS } from '../requests.js'
import React, { useState } from 'react';
import '../Scss/base.scss';
import { gql, useQuery } from '@apollo/client';
import { Post } from '../Post/Post.js';

export default function Feed(props) {
    let [postIndex, setPostIndex] = useState(0)
    let {loading, error, data } = useQuery(GET_ALL_POSTS);

    if (loading) {
      return (<h1>LOADING POSTS...</h1>)
    }

    function addToIndex(num) {
      let arrLength = data.posts.length
      let total = num + postIndex
      let index = ((total % arrLength) + arrLength) % arrLength
      return index
    }

    console.log(data)

    let { content, createdAt, id, ringMinMax } = data.posts[postIndex]
    let [min, max] = ringMinMax.slice(1, -1).split(', ').map( char => +char )

    return (
        <section className='feed'>
            <h1 className='header-title'>{props.headerTitle}</h1>
            <Post content={content} createdAt={createdAt} id={id} ring={[min, max]}/>
            <button onClick={ () => setPostIndex( addToIndex( -1 )) }>Previous</button>
            <button onClick={ () => setPostIndex( addToIndex( 1 )) }>Next</button>
        </section>
    )
}
