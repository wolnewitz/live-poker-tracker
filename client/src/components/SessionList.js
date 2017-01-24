import React, { Component } from 'react';
import Session from './Session';
import { Table } from 'react-bootstrap';

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
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.sessions.map(s =>
            <Session hours={s.hours} profit={s.profit} date={s.date} />
          )}
        </tbody>
      </Table>
    )
  }
}

export default SessionList;
