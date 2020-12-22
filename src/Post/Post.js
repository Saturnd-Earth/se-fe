import React, { Component }  from 'react';
import './Post.scss';

export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            userInfo: {
                userIcon: '',
                name: ''
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
                    <div className='post-left-top'></div>
                    <div className='post-left-bottom'></div>
                </section>
                <section className='post-right'>
                    <div className='post-right-top'>
                            <em><strong><h5 className='post-right-top-h' id='prt1'>Lorem ipsum dolor sit amet</h5></strong></em>
                            <em><h6 className='post-right-top-h' id='prt2'>Lorem ipsum dolor sit amet</h6></em>
                            <em><h6 className='post-right-top-h' id='prt3'>Lorem ipsum dolor sit amet</h6></em>
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
