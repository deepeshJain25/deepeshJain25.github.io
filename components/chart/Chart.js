import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        title: function (tooltipItems) {
          return `Data for ${tooltipItems[0].label}`;
        },
        label: function (context) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
        afterBody: function (tooltipItems) {
          const dataValue = tooltipItems[0].parsed.y;
          console.log("The value is:", dataValue);
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Total Revenue",
      data: labels.map(() => Math.ceil(Math.random() * 100000)),
      borderColor: "#3250FF",
      backgroundColor: "#2BB2FE",
    },
    {
      label: "Deductibles",
      data: labels.map(() => Math.ceil(Math.random() * 100000)),
      borderColor: "#F86624",
      backgroundColor: "#F9C80E",
    },
    {
      label: "Net Revenue",
      data: labels.map(() => Math.ceil(Math.random() * 100000)),
      borderColor: "#2BB2FE",
      backgroundColor: "#22CAAD",
    },
  ],
};

export default function MyLineChart() {
  return <Line options={options} data={data} />;
}
