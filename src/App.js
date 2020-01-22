import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import Nav from './components/Nav/Nav'
import Intro from './components/Navigation/Intro'
function App() {
  return (
    <div className="App"> 
      <Route exact path='/' component={HomePage}/>
      <Nav/>
      <Route  path='/Intro' component={Intro}/>
      <h1 style={{color: 'grey'}}>Work In Progress</h1>
    </div>
  );
}

export default App;
