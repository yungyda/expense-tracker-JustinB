// MyDoughnutChart.js
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

function MyChart({categoryTotals}) { console.log (categoryTotals);
  const labels = categoryTotals.map(ct => ct.category);
  const totals = categoryTotals.map(ct => ct.total);
  const data = {
    labels: labels,
    datasets: [
      {
        label: '$',
        data: totals,
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.8)',
        //   'rgba(54, 162, 235, 0.8)',
        //   'rgba(255, 206, 86, 0.8)',
        // ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        // ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'My Doughnut Chart',
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '400px' }}> {/* Adjust size as needed */}
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default MyChart;