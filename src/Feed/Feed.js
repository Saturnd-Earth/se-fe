import React from 'react';
import './Feed.scss'
import Post from '../Post/Post.js';

export default function Feed(props) {
    let theArray = [
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        />,
    ];
    return (
        <section className='feed'>
            <h1 className='header-title'>{props.headerTitle}</h1>
            {
                theArray.map(i => {
                    return i;
                })
            }
        </section>
    )
}
