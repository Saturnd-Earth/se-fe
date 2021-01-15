import { addShowPosition, hideMap, showMap } from './mapActions.js'
import Error from './Error/Error.js'
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Loading from './Loading/Loading.js'
import Login from './Login/Login.js';
import MakePost from './Make_Post/Make_Post.js'
import { Redirect, Route, Switch } from 'react-router-dom';
import Splash from './Splash/Splash.js'
import { SignUp } from './SignUp/SignUp.js'
import './Scss/base.scss';

import ringIcon from './images/ring-icon.png';

import React, { useState, useEffect } from 'react';
import YourPosts from './Your_Posts/Your_Posts';

export default function App() {
  let blank = {id: null, username: null};
  let previousSessionData = JSON.parse(window.localStorage.getItem('user'))
  const [userData, setUserData] = useState( previousSessionData || blank );
  const [position, setPosition] = useState(null)

  window.navigator.geolocation.getCurrentPosition(
    ({coords}) => {
      setPosition( {lat: coords.latitude, lng: coords.longitude} )
      addShowPosition( {lat: coords.latitude, lng: coords.longitude} )
    },

    (err) => {
      console.log(err)
      setPosition('error')
    }
  )

  useEffect( () => {
    if (!window.earthMapIsInitialized) {
      hideMap()
    } else {
      showMap()
    }
  }, [window.earthMapIsInitialized])

  if (position === 'error') {
    return (
      <>
        <Header
          setUserData= {setUserData}
          userData= {userData}
        />
        <Error message="Please enable location sharing and refresh the page!"/>
      </>
    )
  }

  if (position === null) {
    return (
      <>
        <Header
          setUserData= {setUserData}
          userData= {userData}
        />
        <Loading />
        <h1 className="loading-map" style={{"textAlign": "center"}}>Loading your position</h1>
      </>
    )
  }

  return (
    <section className='all-pages'>
      <Header
        setUserData= {setUserData}
        userData= {userData}
      />
      <Switch>
        <Route exact path='/se-fe' render={ () =>
          <section className="home">
            <Feed
              position={position}
              userData= {userData}
            />
          </section>
        }/>
        <Route exact path='/se-fe/make_post' render={ () =>
          <section className="make-post">
            <MakePost
              position={position}
              userData= {userData}
            />
          </section>}
        />
        <Route exact path='/se-fe/my_post' render={ () =>
          <section className="view-post">
            <YourPosts
              myPostsPage={true}
              icon={ringIcon}
              userData={userData}
            />
          </section>}
        />
        <Route exact path='/se-fe/earth' render={ () =>
          <section className="awards">
            <Splash center={position}/>
          </section>}
        />
        <Route exact path='/se-fe/signup' render={ () =>
          <section className="signup">
            <SignUp/>
          </section>}
        />
        <Route exact path='/se-fe/login' render={ () =>
          <section className="login">
            <Login setUserData= {setUserData}/>
          </section>}
        />
        <Redirect to='/se-fe' />
      </Switch>
    </section>
  )
}
