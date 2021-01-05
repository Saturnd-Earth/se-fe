import React, { Component }  from 'react';
import '../Scss/base.scss';

// icons
import dummyIcon from '../Images/dummyIcon.png';
import defaultLike from '../Images/like-white.png';
import blueLike from '../Images/like-blue.png';
import ringIcon from '../Images/ring-icon.png';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                userIcon: dummyIcon,
                name: null
            },
            postInfo: {
                ring: 0,
                id: null,
                date: null,
                liked: false,
                postContent: null,
            },
            page: {
                myPosts: true
            }
        }
    }

    componentDidMount = () => {
        // Set icon
        if (this.props.myPostsPage) {
            this.setState({userInfo: {
                ...this.state.userInfo,
                userIcon: ringIcon
            }})
        }
        // Render content
        this.setState({postInfo:{
            ...this.state.postInfo,
            postContent: this.props.content
        }})
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
        let bottomLeft;
        if (this.props.myPostsPage) {
            return (
                <section className='post'>
                    <section className='post-left'>
                        <div className='post-left-top'>
                            <img src={this.state.userInfo.userIcon} alt='User Icon' id='user-icon'/>
                        </div>
                        <div className='post-left-bottom' style={{display: 'grid',
                        gridTemplateRows: '1em 1em', paddingTop: '.5em'}}>
                            <em style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}><h6  style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}>Lat: </h6></em>
                            <em style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}><h6  style={{margin: 0, gridRowStart: 1, gridRowEnd: 1}}>{this.props.lat}</h6></em>
                            <em style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}><h6  style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}>Lon: </h6></em>
                            <em style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}><h6  style={{margin: 0, gridRowStart: 2, gridRowEnd: 2}}>{this.props.lon}</h6></em>
                        </div>
                    </section>
                    <section className='post-right'>
                        <div className='post-right-top'>
                                <em><strong><h5 className='post-right-top-h' id='name-header'>Last liked in: </h5></strong></em><br/>
                                <em><h6 className='post-right-top-h' id='prt2'>Ring: {this.state.postInfo.ring}</h6></em><br/>
                                <em><h6 className='post-right-top-h' id='prt3'>Date: </h6></em>
                        </div>
                        <div className='post-right-bottom'>
                            <p className='post-right-bottom-p'>{this.state.postInfo.postContent}</p>
                        </div>
                    </section>
                </section>
            )
        } else {
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
                                <em><strong><h5 className='post-right-top-h' id='name-header'>{this.props.name}</h5></strong></em><br/>
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
}