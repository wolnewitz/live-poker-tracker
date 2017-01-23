import React, { Component } from 'react';
import NavBar from './Nav';

class App extends Component {
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
