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

import './Scss/base.scss';

function App() {
  return (
    <section className="all-pages">
      <Route exact path='/home' render={ () => 
        <section>
          <Header/>
          <Feed headerTitle='Home'/>
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
         <Feed headerTitle='My Posts'/>
       </section>}
      />
      <Route exact path='/awards' render={ () =>
       <section className="awards">
         <Header/>
         <p>awards page</p>
       </section>}
      />
    </section>
  );
}
export default App
