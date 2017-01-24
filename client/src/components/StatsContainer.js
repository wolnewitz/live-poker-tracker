import React, { Component } from 'react';
import { getAllSessions } from '../helpers/fetchSessions'
import { Filters } from './Filters'
import { Stats } from './Stats'
import Session from './Session';
import { Col, Table } from 'react-bootstrap'
import { getTotalHours, getTotalProfit } from '../helpers/statsHelper'
import { selectButtonsFilter } from '../helpers/dateHelpers'

export default class StatsContainer extends Component {
  constructor() {
    super();
    this.state = {allSessions: [], filteredSessions: []};
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentWillMount() {
    getAllSessions().then(sessions => {
      this.setState({allSessions: sessions, filteredSessions: sessions})
    });
  }

  onSelectChange(e) {
    const filter = e.target.value
    const filtered = selectButtonsFilter(filter, this.state.allSessions);

    this.setState({filteredSessions: filtered});
    console.log('this.state', this.state);
  }


  render() {
    const totalHours = getTotalHours(this.state.filteredSessions);
    const totalProfit = getTotalProfit(this.state.filteredSessions);

    return(
      <div>
        <Col md={4}>
          <Filters onSelectChange={this.onSelectChange}/>
        </Col>
        <Col md={8}>
          <Stats
            filteredSessions={this.state.filteredSessions}
            totalHours={totalHours}
            totalProfit={totalProfit}
          />
          <div className='filtered-sessions'>
            <hr />
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
