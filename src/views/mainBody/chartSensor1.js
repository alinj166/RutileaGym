import vuetify from '../../plugins/vuetify';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, zoomPlugin)

export default {
    extends: Line, 
    data() {
      return {
      }
    },
    props : {},
  
    mounted() {
    this.switchColorLight = vuetify.userPreset.theme.themes.light.accent
    this.switchColorDark = vuetify.userPreset.theme.themes.dark.accent
    this.switchChartColor = vuetify.userPreset.theme.themes.light.chartColor
      this.renderChart(
        {
          datasets: [
            {
              yAxisID: 'A',
              label: 'Acceleration Level 2',
              borderColor: this.switchChartColor, //'#8e84f5', //this.switchColorDark, // "black", //"#64B5F6",
              pointBackgroundColor: 'transparent',
              backgroundColor: this.switchChartColor, //'#8e84f5', //this.switchColorDark, //"black",
              borderWidth: 2,
              pointBorderWidth: 0,
            },
            {
              yAxisID: 'B',
              label: 'Velocity Level 2',
              borderColor: "blue",
              pointBackgroundColor: 'transparent',
              backgroundColor: "blue",
              borderWidth: 2,
              pointBorderWidth: 0,
            },
          ],
        },
        
        { responsive: true,
          maintainAspectRatio: false,
            plugins: {
              autocolors: false,
      annotation: {
        annotations: {
          
          line1: {
            type: 'line',
            yMin: 9,
            yMax: 9,
            drawTime: 'afterDatasetsDraw',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
        },
        
          line2: {
            type: 'line',
            yMin: 5,
            yMax: 5,
            borderColor: 'orange',
            borderWidth: 2,
            drawTime: 'afterDatasetsDraw',
          },
          line3: {
            type: 'line',
            yMin: 7,
            yMax: 7,
            borderColor: 'rgb(255, 99, 132)',  //red
            borderWidth: 2,
            drawTime: 'afterDatasetsDraw',
            borderDash :  [4, 4]
          },
          line4: {
            type: 'line',
            yMin: 3.5,
            yMax: 3.5,
            borderColor: 'orange',
            borderWidth: 2,
            drawTime: 'afterDatasetsDraw',
            borderDash :  [4, 4]
          },

        }
      },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'x',
                    },
                    pan : {
                        enabled: true,
                        borderColor : "#c45850"
                    }
                },
            },
            scales: {
              A: {
                text: "Accelration",
                type: 'linear',
                position: 'left',
                ticks: { beginAtZero: true, color: '#64B5F6' },
                borderWidth: 5,
                // Hide grid lines, otherwise you have separate grid lines for the 2 y axes
                grid: { display: false,
                borderColor: "grey" },
                title: {
                  display: true,
                  text: 'Acceleration m/s2'
                },
              },
              B: {
                type: 'linear',
                position: 'right',
                ticks: { beginAtZero: true, color: 'blue' },
                grid: { display: true,
                  borderColor: "grey"},
                title: {
                    display: true,
                    text: 'Velocity mm/s'
                  }
              },
              x: { ticks: 
                    { beginAtZero: true, 
                      color: "grey", 
                      
                      display: true,
                      },
                    grid: { 
                      borderColor: "grey" 
                    },
                    
                  }
            }
        }
      )
    },
  };
  