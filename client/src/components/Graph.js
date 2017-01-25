import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const transformFilteredData = (filteredData) => {
  var count = 0;
  return filteredData.reverse().map(s=>{
    count = count + s.profit;
    return({y: count});
  });
}

export const Graph = ({graphData}) => {
  const width = 500;
  const height = 300;
  const margins = {left: 100, right: 100, top: 50, bottom: 50};
  const chartSeries = [
    {
      field: 'profit',
      name: 'profit',
      color: 'red'
    }
  ];

  const data = transformFilteredData(graphData);

  return(
    <LineChart width={width} height={height} data={data}>
      <Line type='monotone' dataKey="y" stroke= "#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <YAxis />
    </LineChart>
  );
}
