import React from 'react';
import './Post.scss';

export default function Post() {
    return (
        <section className='post'>
            <section className='post-left'>
                <div className='post-left-top'></div>
                <div className='post-left-bottom'></div>
            </section>
            <section className='post-right'>
                <div className='post-right-top'>
                        <h5 className='post-right-top-h' id='prt1'><em><strong>Lorem ipsum dolor sit amet</strong></em></h5>
                        <h6 className='post-right-top-h' id='prt2'><em>Lorem ipsum dolor sit amet</em></h6>
                        <h6 className='post-right-top-h' id='prt3'><em>Lorem ipsum dolor sit amet</em></h6>
                </div>
                <div className='post-right-bottom'>
                    <p className='post-right-bottom-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
        </section>
    )
}
