import React from 'react'
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts'
import transactions from '../../../mockdata/transactions.json'


const TransactionNoChart = () => {
  return (
    <LineChart width={600} height={250} data={transactions}
     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="number"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="number" stroke="#8884d8" />

    </LineChart>
  )
}

export default TransactionNoChart