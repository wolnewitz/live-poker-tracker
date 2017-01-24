import React from 'react';
import { greenOrRed } from '../helpers/statsHelper';

const Session = ({date, profit, hours}) =>
  <tr>
    <td>{ new Date(date).toDateString() }</td>
    <td>{ hours }</td>
    <td style={{color: greenOrRed(profit)}}>{ profit }</td>
  </tr>

export default Session;

