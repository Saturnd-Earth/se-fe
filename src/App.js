// import logo from './logo.svg';
import Header from './Header/Header'
import Post from './Post/Post.js'
import MakePost from './Make_Post/Make_Post.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './Scss/base.scss';

function App() {
  return (
    <section className="all-pages">
      <Route exact path='/' render={ () => 
        <section>
          <Header/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
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
         <p>make a view page</p>
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

export default App;
