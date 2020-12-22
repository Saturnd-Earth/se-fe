// import logo from './logo.svg';
import Header from './Header/Header'
import Post from './Post/Post.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <section>
      <Route exact path='/' render={ () => 
        <section className="home">
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
         <p>make a post page</p>
       </section>}
      />
      <Route exact path='/my_post' render={ () =>
       <section className="view-post">
         <p>make a view page</p>
       </section>}
      />
    </section>
  );
}

export default App;
