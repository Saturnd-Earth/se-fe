// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Feed from './Feed/Feed';
// import YourPosts from './Your_Posts/YourPosts'
import Header from './Header/Header';
import Login from './Login/Login.js';
import MakePost from './Make_Post/Make_Post.js'
import Splash from './Splash/Splash.js'
import { SignUp } from './SignUp/SignUp.js'
import './Scss/base.scss';

import dummyIcon from './images/dummyIcon.png';
import ringIcon from './images/ring-icon.png';

import React, { useState } from 'react';
import YourPosts from './Your_Posts/Your_Posts';

export default function App() {
  const [userData, setUserData] = useState({id: null, username: null});
    console.log("APP Props", userData)
    return (
      <section className='all-pages'>
        <Header 
          setUserData= {setUserData}
          userData= {userData}
        />
        <Route exact path='/' render={ () =>
          <section className="home">
            <Feed
              icon={dummyIcon}
              userData= {userData}
            />
          </section>
        }/>
        <Route exact path='/make_post' render={ () =>
          <section className="make-post">
            <MakePost               
              userData= {userData}
            />
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
        <Route exact path='/earth' render={ () =>
          <section className="awards">
            <Splash />
          </section>}
        />
        <Route exact path='/signup' render={ () =>
          <section className="signup">
            <SignUp/>
          </section>}
        />
        <Route exact path='/login' render={ () =>
          <section className="login">
            <Login setUserData= {setUserData}/>
          </section>}
        />
      </section>
    )
  }

