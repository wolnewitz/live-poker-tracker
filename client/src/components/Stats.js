import React from 'react';
import { Col } from 'react-bootstrap'
import { greenOrRed } from '../helpers/statsHelper';

export const Stats = ({totalHours, totalProfit}) =>
  <div id='stats-view'>
    <Col md={4}>
      <p style={{fontSize: '20px'}}>Total Hours</p>
      <p>{ totalHours }</p>
    </Col>
    <Col md={4}>
      <p style={{fontSize: '20px'}}>Total Profit</p>
      <p style={{color: greenOrRed(totalProfit)}}>{ `$${totalProfit}` }</p>
    </Col>
    <Col md={4}>
      <p style={{fontSize: '20px'}}>$/hour</p>
      <p style={{color: greenOrRed(totalProfit/totalHours )}}>{ `$${(totalProfit/totalHours).toFixed(2)}` }</p>
    </Col>
  </div>
