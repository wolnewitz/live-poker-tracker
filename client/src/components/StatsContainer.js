import React, { Component } from 'react';
import { getAllSessions } from '../helpers/fetchSessions'
import { Filters } from './Filters'
import { Stats } from './Stats'

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
    return(
      <div>
        <Filters />
        <Stats />
      </div>
    )
  }
}
