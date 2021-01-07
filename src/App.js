// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Login from './Login/Login.js';
import MakePost from './Make_Post/Make_Post.js'
import { SignUp } from './SignUp/SignUp.js'
import './Scss/base.scss';

import React, { Component } from 'react';

// Dummy Info
import ringIcon from './images/ring-icon.png';
import dummyIcon from './images/dummyIcon.png';
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const lat = -888;
const lon = -999;
const name = 'John Doe';
const dummyRing = 0
const dummyDate = '07/04/1776'
const dummyLastLike = 'Boston, MA'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'home'
    }
  }

  render() {
    return (
      <section className='all-pages'>
        <Route exact path='/' render={ () =>
          <section className="home">
            <Header/>
            <Feed
              headerTitle='Home'
              myPostsPage={false}
              content={loremIpsum}
              name={name}
              icon={dummyIcon}
              ring={dummyRing}
              date={dummyDate}
              lastLike={dummyLastLike}
            />
          </section>
        }/>
        <Route exact path='/make_post' render={ () =>
          <section className="make-post">
            <Header/>
            <MakePost/>
          </section>}
        />
        <Route exact path='/my_post' render={ () =>
          <section className="view-post">
            <Header/>
            <Feed
              headerTitle='My Posts'
              myPostsPage={true}
              content={loremIpsum}
              lat={lat}
              lon={lon}
              icon={ringIcon}
              ring={dummyRing}
              date={dummyDate}
              lastLike={dummyLastLike}
            />
          </section>}
        />
        <Route exact path='/awards' render={ () =>
          <section className="awards">
            <Header/>
            <p>Make an awards page</p>
          </section>}
        />
        <Route exact path='/signup' render={ () =>
          <section className="signup">
            <SignUp/>
          </section>}
        />
        <Route exact path='/login' render={ () =>
          <section className="login">
            <Login/>
          </section>}
        />
      </section>
    )
  }
}

export default App
