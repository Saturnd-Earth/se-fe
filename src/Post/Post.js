import React, { Component }  from 'react';
import './Post.scss';
import dummyIcon from '../images/dummyIcon.png'

export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            userInfo: {
                userIcon: dummyIcon,
                name: 'John Doe'
            },
            postInfo: {
                ring: 0,
                id: null,
                date: null
            }
        }
    }
    
    componentDidMount = () => {
        //
    }

    render() {
        return (
            <section className='post'>
                <section className='post-left'>
                    <div className='post-left-top'>
                        <img src={this.state.userInfo.userIcon} alt={'User Icon'} id='user-icon'/>
                    </div>
                    <div className='post-left-bottom'></div>
                </section>
                <section className='post-right'>
                    <div className='post-right-top'>
                            <em><strong><h5 className='post-right-top-h' id='name-header'>{this.state.userInfo.name}</h5></strong></em><br/>
                            <em><h6 className='post-right-top-h' id='prt2'>Ring {this.state.postInfo.ring}</h6></em><br/>
                            <em><h6 className='post-right-top-h' id='prt3'>Date: </h6></em>
                    </div>
                    <div className='post-right-bottom'>
                        <p className='post-right-bottom-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </section>
            </section>
        )
    }
}
