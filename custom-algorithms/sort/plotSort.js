/* eslint-disable no-undef */
const Chart = require("chart.js");
const createSortDataPoint = require("./createSortDataPoint");
const saveData = require("../saveData");
const sort = require("./sort");

const xValues = [];
for (i = 1; i < 21; i++) {
  xValues.push(100 * i);
}

const yValues = saveData(sort, 100, 100, createSortDataPoint);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        font: {
          size: 32,
        },
        text: "merge sort",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          font: {
            size: 20,
          },
          text: "Array length /# of elements",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          font: {
            size: 20,
          },
          text: "Time /ms",
        },
      },
    },
  },
});
