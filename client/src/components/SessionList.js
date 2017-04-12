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
    const { hours, profit, date } = this.state.formState;

    return {hours, profit, date};
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
      this.updateSessions();
    })
    this.setState({isSubmitting: false});
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
