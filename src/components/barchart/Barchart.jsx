import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'react-chartjs-2';
import '../barchart/Barchart.css'


const Barchart = () => {
const [selectedFilter, setSelectedFilter] = useState('monthly');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales Trend',
        data: [5000, 15000, 3000, 25000, 8000, 45000, 8000, 20000, 32000, 4500, 30000, 26000],
        backgroundColor: [
          'rgba(52, 202, 165, 0.10)', // Gradient color for the first bar
          'rgba(52, 202, 165, 0.10)', // Solid color for hover
          'rgba(52, 202, 165, 0.10)',
          'rgba(52, 202, 165, 0.10)',
          'rgba(52, 202, 165, 0.10)',
          '#34CAA5',
          'rgba(52, 202, 165, 0.10)',
          'rgba(52, 202, 165, 0.10)',
          'rgba(52, 202, 165, 0.10)',
          'rgba(52, 202, 165, 0.10)',
          'rgba(52, 202, 165, 0.10)',
          'rgba(52, 202, 165, 0.10)',
        ],  
          
        hoverBackgroundColor: 'rgba(75,192,192,1)',
        borderWidth: 0,
        borderRadius: 50,
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { beginAtZero: true,
       
      },
    },
    
  };

  return (
    <div className='barchart-container'>
    <div className='filter'>
      <span className='bar-header'>Sales Trend</span>
      <label htmlFor="filter">Sort by: </label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
      </select>
    </div>
    <Bar data={data} options={options} />
  </div>
  );
};

export default Barchart;
