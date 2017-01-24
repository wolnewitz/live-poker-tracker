import React, { Component } from 'react';
import NavBar from './Nav';
import { API } from '../helpers/api'

class App extends Component {
  constructor() {
    super();
    this.setState = {sessions: []}
  }

  componentWillMount() {
    console.log('apiURL', API)
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className='container'>
          <h1>Hello From App</h1>
        </div>
      </div>
    );
  }
}

export default App;
