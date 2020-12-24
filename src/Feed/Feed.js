import React from 'react';
import './Feed.scss'
import Post from '../Post/Post.js';

export default function Feed(props) {
    return (
        <section className='feed'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </section>
    )
}
