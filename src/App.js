// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Feed from './Feed/Feed';
// import YourPosts from './Your_Posts/YourPosts'
import Header from './Header/Header';
import Login from './Login/Login.js';
import MakePost from './Make_Post/Make_Post.js'
import { SignUp } from './SignUp/SignUp.js'
import './Scss/base.scss';

import dummyIcon from './images/dummyIcon.png';
import ringIcon from './images/ring-icon.png';

import React, { Component } from 'react';
import YourPosts from './Your_Posts/Your_Posts';

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
        <Header/>
        <Route exact path='/' render={ () =>
          <section className="home">
            <Feed
              icon={dummyIcon}
            />
          </section>
        }/>
        <Route exact path='/make_post' render={ () =>
          <section className="make-post">
            <MakePost/>
          </section>}
        />
        <Route exact path='/my_post' render={ () =>
          <section className="view-post">
            <YourPosts 
            myPostsPage={true}
            icon={ringIcon}
            />
          </section>}
        />
        <Route exact path='/awards' render={ () =>
          <section className="awards">
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
