// Include Chart.js library via CDN
const chartJsUrl = 'https://cdn.jsdelivr.net/npm/chart.js';
document.write('<script src="' + chartJsUrl + '"></script>');

// Simulate data from a CSV file
const csvData = `Date,Price
2023-01-01,100
2023-01-02,105
2023-01-03,110
2023-01-04,108
`;

// Parse CSV data
const lines = csvData.trim().split('\n');
let labels = [], dataPoints = [];

for (let i = 1; i < lines.length; i++) {  // Start from 1 to skip the header
    const [date, price] = lines[i].split(',');
    labels.push(date);
    dataPoints.push(parseFloat(price));
}

// Setup for Chart.js
const ctx = document.getElementById('priceChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Price',
            data: dataPoints,
            borderColor: 'blue',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});