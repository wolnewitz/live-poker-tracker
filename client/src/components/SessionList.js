import React, { Component } from 'react';
import Session from './Session';

class SessionList extends Component {
  constructor() {
    super();
    this.state = {sessions: []};
  }

  componentWillMount() {
    fetch('/sessions').then(res => {
      res.json().then(sessions => {
        this.setState(() => ({ sessions: sessions }));
      })
    })
  }

  render() {
    console.log('state', this.state);
    return(
      <ul>
        {this.state.sessions.map(s =>
          <Session hours={s.hours} profit={s.profit} date={s.date} />
        )}
      </ul>
    )
  }
}

export default SessionList;
