import React, { Component } from 'react';
import Session from './Session';
import SessionForm from './SessionForm';
import { Table } from 'react-bootstrap';

class SessionList extends Component {
  constructor() {
    super();
    this.state = {sessions: [], formState: {date: '', hours: 0, profit: 0}};
    this.onSessionSubmit = this.onSessionSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  componentWillMount() {
    fetch('/sessions').then(res => {
      res.json().then(sessions => {
        this.setState(() => ({ sessions: sessions }));
      })
    })
  }

  onSessionSubmit() {
    var hours = this.state.formState['hours'];
    var profit = this.state.formState['profit'];
    var date = this.state.formState['date'];

    var data = {hours: hours, profit: profit, date: date};

    fetch('/sessions', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => {
      console.log('res', res);
    })
  }

  onFormChange(e) {
    var key = e.target.id;
    var oldFormState = this.state.formState;
    oldFormState[key] = e.target.value;

    this.setState({ formState: oldFormState } );
  }

  render() {
    return(
      <div>
        <SessionForm 
          onSessionSubmit={this.onSessionSubmit}
          onFormChange={this.onFormChange}
        />
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
      </div>
    )
  }
}

export default SessionList;
