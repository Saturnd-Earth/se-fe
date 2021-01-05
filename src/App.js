// import logo from './logo.svg';
import Post from './Post/Post.js'
import MakePost from './Make_Post/Make_Post.js'
import Header from './Header/Header';
import Feed from './Feed/Feed';
// Blue icons
import homeBlue from '../src/images/house-blue.png'
import postBlue from '../src/images/post-blue.png'
import feedBlue from '../src/images/user-blue.png'
import awardsBlue from '../src/images/award-blue.png'
// White icons
import homeWhite from '../src/images/house-white.png'
import postWhite from '../src/images/post-white.png'
import feedWhite from '../src/images/user-white.png'
import awardsWhite from '../src/images/award-white.png'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// SCSS
import './Scss/base.scss';

// React
import React, { Component } from 'react';
// Dummy Info
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const lat = -888;
const lon = -999;
const name = 'John Doe';
export default class App extends Component {
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
            />
          </section>}
        />
        <Route exact path='/awards' render={ () =>
          <section className="awards">
            <Header/>
            <p>Make an awards page</p>
          </section>}
        />
      </section>
    )
  }
}
