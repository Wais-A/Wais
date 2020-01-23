import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'

import Intro from './components/Navigation/Intro'
function App() {
  return (
    <div className="App"> 
      <Route exact path='/' component={HomePage}/>
      <Route  path='/Intro' component={Intro}/>
    </div>
  );
}

export default App;
