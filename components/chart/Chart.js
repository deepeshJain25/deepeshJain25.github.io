import React, { useRef } from "react";
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

export default function MyLineChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  function debounce(fn, delay) {
    let timeoutID = null;
    return function () {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  }

  function handleTooltipHover(data) {
    props.recordData(data);
  }

  const debouncedHandleTooltipHover = debounce(handleTooltipHover, 500);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
        external: function (context) {
          if (context.tooltip.opacity === 0) {
            debouncedHandleTooltipHover(null);
          } else {
            const tooltipItems = context.tooltip.dataPoints;
            debouncedHandleTooltipHover(tooltipItems);
          }
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

  const revenueData = useRef(
    labels.map(() => Math.ceil(Math.random() * 100000))
  );

  const deductiblesData = useRef(
    labels.map(() => Math.ceil(Math.random() * 100000))
  );

  const netRevData = useRef(
    labels.map(() => Math.ceil(Math.random() * 100000))
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Total Revenue",
        data: revenueData.current,
        borderColor: "#3250FF",
        backgroundColor: "#2BB2FE",
      },
      {
        label: "Deductibles",
        data: deductiblesData.current,
        borderColor: "#F86624",
        backgroundColor: "#F9C80E",
      },
      {
        label: "Net Revenue",
        data: netRevData.current,
        borderColor: "#2BB2FE",
        backgroundColor: "#22CAAD",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
