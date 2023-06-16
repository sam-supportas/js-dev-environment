const Chart = require("chart.js");

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: __LABEL__,
    datasets: __DATA__
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
