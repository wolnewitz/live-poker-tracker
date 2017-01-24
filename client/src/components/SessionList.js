import React, { Component } from 'react';
import Session from './Session';
import SessionForm from './SessionForm';
import { Table } from 'react-bootstrap';
import { createSession, getAllSessions } from '../helpers/fetchSessions'

class SessionList extends Component {
  constructor() {
    super();
    this.state = {sessions: [], formState: {date: '', hours: '', profit: ''}, isSubmitting: false};
    this.onSessionSubmit = this.onSessionSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  updateSessions() {
    getAllSessions()
    .then(sessions => {
      this.setState(() => ({ sessions: sessions }));
    })
  }

  componentWillMount() {
    this.updateSessions();
  }

  getFormBody() {
    var hours = this.state.formState['hours'];
    var profit = this.state.formState['profit'];
    var date = this.state.formState['date'];

    return {hours: hours, profit: profit, date: date};
  }

  clearForm() {
    var emptyForm = {date: '', profit: '', hours: ''};
    this.setState({ formState: emptyForm });
  }

  onSessionSubmit(e) {
    e.preventDefault();

    var body = this.getFormBody();
    this.clearForm();
    this.setState({isSubmitting: true});

    createSession(body).then(res => {
      this.setState({isSubmitting: false});
      this.updateSessions();
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
          state={this.state}
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
              <Session key={s.id} hours={s.hours} profit={s.profit} date={s.date} />
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default SessionList;
