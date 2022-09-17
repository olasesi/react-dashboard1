import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import "./chart.scss"


const Chart = () => {

  const data = [
    {
      name: 'A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
      
    <ResponsiveContainer height="100%" width="100%" >
        <AreaChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
         
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#431ea8" fill="#612df1" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#523a92" fill="#815be9" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#7964b4" fill="#a085eb" />
        </AreaChart>
      </ResponsiveContainer>
     
  )
}

export default Chart