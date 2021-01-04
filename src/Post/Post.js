import React, { Component }  from 'react';
import '../Scss/base.scss';

// icons
import dummyIcon from '../Images/dummyIcon.png';
import defaultLike from '../Images/like-white.png';
import blueLike from '../Images/like-blue.png';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                userIcon: dummyIcon,
                name: 'John Doe'
            },
            postInfo: {
                ring: 0,
                id: null,
                date: null,
                liked: false,
                postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            page: {
                myPosts: true
            }
        }
    }

    componentDidMount = () => {
        //
    }

    like = () => {
        this.setState({postInfo: {
            ...this.state.postInfo,
            liked: !this.state.postInfo.liked
        }})
    }

    render() {
        let likeButton;
        !this.state.postInfo.liked ? likeButton = defaultLike : likeButton = blueLike;
        return (
            <section className='post'>
                <section className='post-left'>
                    <div className='post-left-top'>
                        <img src={this.state.userInfo.userIcon} alt='User Icon' id='user-icon'/>
                    </div>
                    <div className='post-left-bottom'>
                        <img src={likeButton} alt='Like button' id='like-button' onClick={() => this.like()}/>
                    </div>
                </section>
                <section className='post-right'>
                    <div className='post-right-top'>
                            <em><strong><h5 className='post-right-top-h' id='name-header'>{this.state.userInfo.name}</h5></strong></em><br/>
                            <em><h6 className='post-right-top-h' id='prt2'>Ring: {this.state.postInfo.ring}</h6></em><br/>
                            <em><h6 className='post-right-top-h' id='prt3'>Date: </h6></em>
                    </div>
                    <div className='post-right-bottom'>
                        <p className='post-right-bottom-p'>{this.state.postInfo.postContent}</p>
                    </div>
                </section>
            </section>
        )
    }
}