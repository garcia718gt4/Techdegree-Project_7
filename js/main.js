/* ============================
    ALERT BANNER
   ============================
*/


//   Create the alert banner 
const alertBanner = document.getElementById('alert');
alertBanner.innerHTML =
`<p><strong>Alert:</strong> You have <strong>3</strong> overdue tasks to complete.<span class="close"><strong>X</strong></span></p>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains('close')) {
        alertBanner.style.display = 'none'
    }
});

/* ============================
    LINE GRAPH CHART 
   ============================
*/
   
// Create the properties for the new line chart 

// An object literal representing the data property of the line chart 
let trafficData = {
    labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17','18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgb(121, 89, 238, .3)',
        borderWidth: 1,
        pointBorderColor: 'rgb(121, 89, 238)',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: 'rgb(121, 89, 238)',
        pointRadius: 5,
    }]
};

// An object literal to set the options of the line chart 
let trafficOptions = {
    aspectRatio: 3.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks:{
                beginAtZero:true
            }
        }]
    },
    legend: {
        display:false
    }
};

/* ===================
        Hourly Chart 
   ==================== */ 

const hourly = document.getElementById('hourly');
const trafficCanvasHourly = document.getElementById('traffic-chart-hourly'); 


// Create the chart itself 
let trafficChart = new Chart(trafficCanvasHourly, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
}); 


hourly.addEventListener('click', e => {
    trafficCanvasDaily.style.display = 'none';
    trafficCanvasHourly.style.display = 'block';
    trafficCanvasWeekly.style.display = 'none';
    trafficCanvasMonthly.style.display = 'none';
});

/* ===================
        Daily Chart 
   ==================== */      

const daily = document.getElementById('daily');
const trafficCanvasDaily = document.getElementById('traffic-chart-daily'); 


let trafficData2 = {
    labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17','18-24', '25-31'],
    datasets: [{
        data: [950, 1150, 900, 1500, 1100, 1650, 1510, 1850, 1800, 1600, 2200],
        backgroundColor: 'rgb(60, 179, 113, .3)',
        borderWidth: 1,
        pointBorderColor: 'rgb(60, 179, 113)',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: 'rgb(60, 179, 113)',
        pointRadius: 5,
    }]
};

let trafficChart2 = new Chart(trafficCanvasDaily, {
    type: 'line',
    data: trafficData2,
    options: trafficOptions
});


trafficCanvasDaily.style.display = 'none';

daily.addEventListener('click', e => {
    trafficCanvasHourly.style.display = 'none';
    trafficCanvasWeekly.style.display = 'none';
    trafficCanvasDaily.style.display = 'block';
    trafficCanvasMonthly.style.display = 'none';
});

/* ===================
        Weekly Chart 
   ==================== */      

   const weekly = document.getElementById('weekly');
   const trafficCanvasWeekly = document.getElementById('traffic-chart-weekly'); 
   
   
   let trafficData3 = {
       labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17','18-24', '25-31'],
       datasets: [{
           data: [650, 1150, 900, 1400, 1100, 1250, 1510, 1350, 2000, 1600, 1800],
           backgroundColor: 'rgb(61, 95, 233, .3)',
           borderWidth: 1,
           pointBorderColor: 'rgb(61, 95, 233)',
           pointBackgroundColor: '#fff',
           pointHoverBackgroundColor: 'rgb(61, 95, 233)',
           pointRadius: 5,
       }]
   };
   
   let trafficChart3 = new Chart(trafficCanvasWeekly, {
       type: 'line',
       data: trafficData3,
       options: trafficOptions
   });
   
   trafficCanvasWeekly.style.display = 'none';
   
   weekly.addEventListener('click', e => {
       trafficCanvasHourly.style.display = 'none';
       trafficCanvasDaily.style.display = 'none';
       trafficCanvasWeekly.style.display = 'block';
       trafficCanvasMonthly.style.display = 'none';
   });

/* ===================
        Monthly Chart
   ==================== */      

   const monthly = document.getElementById('monthly');
   const trafficCanvasMonthly = document.getElementById('traffic-chart-monthly'); 
   
   
   let trafficData4 = {
       labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17','18-24', '25-31'],
       datasets: [{
           data: [950, 1150, 1100, 1500, 1100, 1650, 1510, 1850, 1800, 1600, 2200],
           backgroundColor: 'rgb(244, 129, 41, .3)',
           borderWidth: 1,
           pointBorderColor: 'rgb(244, 129, 41)',
           pointBackgroundColor: '#fff',
           pointHoverBackgroundColor: 'rgb(244, 129, 41)',
           pointRadius: 5,
       }]
   };
   
   let trafficChart4 = new Chart(trafficCanvasMonthly, {
       type: 'line',
       data: trafficData4,
       options: trafficOptions
   });
   
   trafficCanvasMonthly.style.display = 'none';
   
   monthly.addEventListener('click', e => { 
       trafficCanvasHourly.style.display = 'none';
       trafficCanvasDaily.style.display = 'none';
       trafficCanvasWeekly.style.display = 'none';
       trafficCanvasMonthly.style.display = 'block';
   });


/* ============================
    BAR GRAPH CHART 
   ============================
*/

const dailyCanvas = document.getElementById('daily-chart');

// Object literal of the data for the daily-bar chart
const dailyData = {
    labels: ['S','M','T','W','T','F','S'],
    datasets: [{
        label:'# of Hits',
        data:[75,115,175,125,225,200,100],
        backgroundColor: 'rgb(119, 105, 164)',
        borderWidth: 1,
    }]
};

// Object literal of the options for the daily-bar chart
const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display:false
    }
};

// Create the bar-chart itself
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


/* ================================
    MOBILE(DOUGHNUT) GRAPH CHART 
===============================   */
const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [500, 500, 550],
        borderWidth: 0,
        backgroundColor: [
            'rgb(248, 159, 91, .5)',
            'rgb(60, 179, 113, .5)',
            'rgb(121, 89, 238, .5)'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    } 
};
    let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


/* ======================================
    Create variables to store the form fields
   =======================================  */

   