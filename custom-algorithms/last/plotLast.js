/* eslint-disable no-undef */
const Chart = require("chart.js");
const saveData = require("../saveData");
const last = require("./last");

const xValues = [];
for (i = 1; i < 21; i++) {
  xValues.push(5000 * i);
}

const yValues = saveData(last, 1000000);

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
        text: "last()",
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
        max: 0.0003,
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
