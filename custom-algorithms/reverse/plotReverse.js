/* eslint-disable no-undef */
const Chart = require("chart.js");
const saveData = require("../saveData");
const reverse = require("./reverse");

const xValues = [];
for (i = 1; i < 21; i++) {
  xValues.push(5000 * i);
}

const yValues = saveData(reverse, 5000);

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
        text: "custom reverse()",
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
