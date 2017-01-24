import React, { Component } from 'react';
import SessionList from './SessionList';
import NavBar from './Nav';

const App = (props) =>
  <div>
    <NavBar />
    <div className='container'>
      {props.children}
    </div>
  </div>

  export default App;
