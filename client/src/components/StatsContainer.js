import React, { Component } from 'react';
import { getAllSessions } from '../helpers/fetchSessions'
import { Filters } from './Filters'
import { Stats } from './Stats'
import Session from './Session';
import { Col, Table } from 'react-bootstrap'
import { getTotalHours } from '../helpers/statsHelper'

export default class StatsContainer extends Component {
  constructor() {
    super()
    this.state = {filteredSessions: [], dateRangeFilter: 'all'}
  }

  componentWillMount() {
    getAllSessions().then(sessions => {
      this.setState({filteredSessions: sessions})
    });
  }


  render() {
    const totalHours = getTotalHours(this.state.filteredSessions);

    return(
      <div>
        <Col md={4}>
          <Filters />
        </Col>
        <Col md={8}>
          <Stats filteredSessions={this.state.filteredSessions} totalHours={totalHours}/>
          <hr />
          <div className='filtered-sessions'>
            <p style={{fontSize:'25px'}}>Filtered Session List</p>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Hours</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredSessions.map(s =>
                  <Session key={s.id} hours={s.hours} profit={s.profit} date={s.date} />
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </div>
    )
  }
}
