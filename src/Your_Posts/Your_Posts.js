import { GET_USER_POSTS } from '../requests.js'
import React, { useState } from 'react';
import '../Scss/base.scss';
import { gql, useQuery } from '@apollo/client';
import { Post } from '../Post/Post.js';

export default function YourPosts(props) {
    let {loading, error, data } = useQuery(GET_USER_POSTS, {
        variables: { userId: 10 },
    })
    if (loading) return <h1>LOADING POSTS...</h1>
    if (error) return <h1>Hmm... something went wrong.</h1>
    return (
        <section>
            <h1 className='header-title'>{props.headerTitle}</h1>
            {
                data.postsByUser.map(i => {
                    let { content, createdAt, id, ringMinMax } = i
                    return <Post myPostsPage={true} content={content} createdAt={createdAt} id={id} ring={[i.min, i.max]}/>
                })
            }
        </section>
    )
}
