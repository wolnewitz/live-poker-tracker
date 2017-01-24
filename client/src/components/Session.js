import React from 'react';

const greenOrRed = (num) => {
  console.log('num', num);
  if(num.toString().match(/^-/)) { return 'red'; }
  return 'green'
}

const Session = ({date, profit, hours}) =>
  <tr>
    <td>{ new Date(date).toDateString() }</td>
    <td>{ hours }</td>
    <td style={{color: greenOrRed(profit)}}>{ profit }</td>
  </tr>

export default Session;

