/* eslint-disable no-undef */
const Chart = require("chart.js");
const saveFibData = require("./saveFibData");
const fibonacci = require("./fibonacci");

const xValues = [];
for (i = 1; i < 21; i++) {
  xValues.push(5000 * i);
}

const yValues = saveFibData(fibonacci, 500);

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
        text: "fibonacci()",
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
          text: "N /# of fibonacci numbers calculated",
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
