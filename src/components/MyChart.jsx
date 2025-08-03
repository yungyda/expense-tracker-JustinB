// MyDoughnutChart.js
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

function MyChart({ categoryTotals }) {
  console.log(categoryTotals);
  const labels = categoryTotals.map((ct) => ct.category);
  const totals = categoryTotals.map((ct) => ct.total);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "$",
        data: totals,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "My Doughnut Chart",
      },
    },
  };

  return (
    <div className="chart-wrapper">
      {" "}
      {/* Adjust size as needed */}
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default MyChart;
