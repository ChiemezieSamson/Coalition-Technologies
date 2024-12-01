let myChartInstance;

export const myChart = (user) => {
  const ctx = document.getElementById('myChart').getContext('2d');

  // Clear the previous chart if it exists
  if (myChartInstance) {
      myChartInstance.destroy();
  }

  let time = []
  let Systolic = []
  let Diastolic = []

  for (let i = 0; i < user.diagnosis_history.length; i++) {
    time.push(`${user.diagnosis_history[i].month.slice(0, 3) + ", " + user.diagnosis_history[i].year}`)
    Systolic.push(`${user.diagnosis_history[i].blood_pressure.systolic.value}`)
    Diastolic.push(`${user.diagnosis_history[i].blood_pressure.diastolic.value}`)
  }
  
  myChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: time,
      datasets: [{
        label: 'Systolic',
        data: Systolic,
        borderColor: 'rgb(194, 110, 180)',
        pointBackgroundColor: 'rgb(230, 111, 210)',
        pointBorderWidth: 4,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.4,
      }, 
      {
        label: 'Diastolic',
        data: Diastolic,
        pointBorderWidth: 4,
        borderColor: 'rgb(126, 108, 171)',
        pointBackgroundColor: 'rgb(140, 111, 230)',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          min: 60,
          max: 180,
          ticks: {
            stepSize: 20
          },
          grid: {
              color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        x: {
          grid: {
              display: false
          }
        }
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });
};

