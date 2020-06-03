import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
// import Background from './Assets/download.png'
import HomePage from './components/HomePage/HomePage';

// import Intro from './components/Navigation/Intro';
import Work from './components/Navigation/Work';
import Contact from './components/Navigation/Contact';
import About from './components/Navigation/About';
import Nav from './components/Nav/Nav';
function App ()
{
  return (
    <div className="App">
      <Route exact path='/' component={ HomePage } />
      {/* <Route path='/Intro' component={ Intro } /> */}
      <Route path='/Work' component={ Work } />
      <Route path='/Contact' component={ Contact } />
      <Route path='/About' component={ About } />
      <Nav />
    </div>
  );
}

export default App;
