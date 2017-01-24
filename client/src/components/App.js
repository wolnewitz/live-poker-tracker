import React, { Component } from 'react';
import SessionList from './SessionList';
import { NavBar } from './Nav';
import { Footer } from './Footer';

const App = (props) =>
  <div>
    <NavBar />
    <div className='container'>
      {props.children}
    </div>
    <Footer />
  </div>

  export default App;
