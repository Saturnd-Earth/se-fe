import React from 'react';
import '../Scss/base.scss';
import { Post } from '../Post/Post.js';

export default function Feed(props) {
    let theArray = [
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
        />,
        <Post 
        myPostsPage={props.myPostsPage}
        content={props.content}
        lat={props.lat}
        lon={props.lon}
        name={props.name}
        icon={props.icon}
        ring={props.ring}
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
