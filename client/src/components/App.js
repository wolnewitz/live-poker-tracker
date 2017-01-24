import React, { Component } from 'react';
import NavBar from './Nav';
import { API } from '../helpers/api'
import SessionList from './SessionList';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className='container'>
          <SessionList />
        </div>
      </div>
    );
  }
}

export default App;
