import React from 'react';
import { LineChart,Line, Tooltip, XAxis, YAxis,BarChart,CartesianGrid,Bar,Legend } from 'recharts';

const Dashboard = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className="flex justify-between align-center mt-40">
        <div>
        <LineChart width={730} height={400} data={data}>
        <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
        <XAxis dataKey="month"></XAxis>
        <YAxis/>
        <Tooltip></Tooltip>
        </LineChart>
        </div>

        <div className="mt-7">
        <BarChart width={730} height={400} data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="month" />
           <YAxis />
           <Tooltip />
           <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
        </div>
        </div>
  
         
    );
};

export default Dashboard;