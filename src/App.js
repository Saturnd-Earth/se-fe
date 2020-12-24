import Header from './Header/Header';
import Feed from './Feed/Feed';
// Blue icons
import homeBlue from '../src/Images/house-blue.png'
import postBlue from '../src/Images/post-blue.png'
import feedBlue from '../src/Images/user-blue.png'
import awardsBlue from '../src/Images/award-blue.png'
// White icons
import homeWhite from '../src/Images/house-white.png'
import postWhite from '../src/Images/post-white.png'
import feedWhite from '../src/Images/user-white.png'
import awardsWhite from '../src/Images/award-white.png'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'home'
    }
  }
  render() {
    return (
      <section>
        <Route exact path='/' render={ () => 
          <section className="home">
            <Header icons={{
              home: homeBlue,
              post: postWhite,
              feed: feedWhite,
              awards: awardsWhite
            }}/>
            <Feed />
          </section>
        }/>
        <Route exact path='/make_post' render={ () =>
          <section className="make-post">
            <Header icons={{
              home: homeWhite,
              post: postBlue,
              feed: feedWhite,
              awards: awardsWhite
            }}/>
            <p>make a post page</p>
          </section>}
        />
        <Route exact path='/my_post' render={ () =>
          <section className="view-post">
            <Header icons={{
              home: homeWhite,
              post: postWhite,
              feed: feedBlue,
              awards: awardsWhite
            }}/>
            <p>make a view page</p>
          </section>}
        />
        <Route exact path='/awards' render={ () =>
          <section className="awards">
            <Header icons={{
              home: homeWhite,
              post: postWhite,
              feed: feedWhite,
              awards: awardsBlue
            }}/>
            <p>Make an awards page</p>
          </section>}
        />
      </section>
    )
  }
}
