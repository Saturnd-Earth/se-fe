import { addShowPosition } from './mapActions.js'
import { Route } from 'react-router-dom';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Login from './Login/Login.js';
import MakePost from './Make_Post/Make_Post.js'
import Splash from './Splash/Splash.js'
import { SignUp } from './SignUp/SignUp.js'
import './Scss/base.scss';

import ringIcon from './images/ring-icon.png';

import React, { useState } from 'react';
import YourPosts from './Your_Posts/Your_Posts';

export default function App() {
  const [userData, setUserData] = useState({id: null, username: null});
  const [position, setPosition] = useState(null)

  window.navigator.geolocation.getCurrentPosition(
    ({coords}) => {
      setPosition( {lat: coords.latitude, lng: coords.longitude} )
      addShowPosition( {lat: coords.latitude, lng: coords.longitude} )
    },

    (err) => {
      console.log('BAD GEOLOCATOR ' + err)
    }
  )

  return (
    <section className='all-pages'>
      <Header/>
      <Route exact path='/' render={ () =>
        <section className="home">
          <Feed position={position}/>
        </section>
      }/>
      <Route exact path='/make_post' render={ () =>
        <section className="make-post">
          <MakePost position={position}/>
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
          <Splash center={position}/>
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
