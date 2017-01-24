import React from 'react';

const Session = ({date, profit, hours}) =>
  <tr>
    <td>{ new Date(date).toDateString() }</td>
    <td>{ hours }</td>
    <td>{ profit }</td>
  </tr>

export default Session;

