import React from 'react'

export default function Header() {
    return (
        <section>
            <section className='header-top'>
                <img src='../images/se-logo.png' alt='Saturn`d Earth Logo' className='images' id='se-logo'/>
                <h1 className='header-text'>Saturn'd Earth</h1>
            </section>
            <section className='header-bottom'>
                <img src='../images/home.png' alt='Home' className='images' id='se-logo'/>
                <img src='../images/post.png' alt='Add a post' className='images' id='make-post'/>
                <img src='../images/user-feed.png' alt='Your feed' className='images' id='user-feed'/>
                <img src='../images/awards.png' alt='Your awards' className='images' id='user-awards'/>
            </section>
        </section>
    )
}