
`<!doctype html>
<body>
<p> hello </p>
<html lang="en"></html>`
/*<script>
<script src="path/to/chartjs/dist/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8"></script>
<script src="path/to/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.min.js"></script>
</script>*/

/*<script src="path/to/chartjs/dist/chart.min.js"></script>
<script src="path/to/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.min.js"></script>*/

import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'vue-chartjs/legacy'
/*import { getAPI } from '../../axios-api'
import { mapState } from 'vuex'*/
import annotationPlugin from 'chartjs-plugin-annotation';
//import colors from 'vuetify/lib/util/colors'
//import chartsDisplay from "./chartDisplay";
//import navbar from "./Navbar.";
import vuetify from '../../plugins/vuetify';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement,  } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, zoomPlugin, annotationPlugin)
//const { reactiveProp } = mixins
/*const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
];*/
 /*const lightgradients = [
  ['#3f51b5'],
  ['#b0bec5'],
  ['#8c9eff'],
  ['#b71c1c'],
 ];*/
 /*const darkgradients = [
  ["#777777"],
  ["#E65100"],
  ["#7CB342"],
  ["#689F38"],
  [ "#4CAF50"],
  ["#6156d8"],
  ["#1565C0"],
  ["#FF7043"]
 ];*/


//let labelsDate = [];
//let test = {"date":[],"velocity":[],"acceleration":[],} ;

export default {
  name:"LineChart",
  extends: Line,
  //labelsSecond,
  //labelsDate,
  data() {
    return {
      //labelsDate: ['2022-01-01','2022-02-01'],
      //username: 'username',
      //labelsSecond,
      //labelsDate,
    }
  },
  template: `
        <div class="row">
            <div class="col-md-12">
                <p> hello</p>
            </div>
        </div>
    `,
  props: {
    //username: String
  },

  mounted() {
    this.switchColorLight = vuetify.userPreset.theme.themes.light.accent
    this.switchColorDark = vuetify.userPreset.theme.themes.dark.accent
    this.switchColorDarkPrimary = vuetify.userPreset.theme.themes.dark.primary
    this.switchChartColor = vuetify.userPreset.theme.themes.light.chartColor

    this.velocityArr = []
    //this.velocity()
    //this.render
    this.renderChart(
      {
        id:'chartId',
        //labels: labelsDate, //labelsSecond,
        xAxisID: 'A',
        backgroundColor: 'white',
        datasets: [
          {
            yAxisID: 'A',
            label: 'Acceleration Level 1',
            borderColor: "#64B5F6", //this.switchChartColor, //this.switchColorLight, //"grey",
            pointBackgroundColor: 'transparent',
            backgroundColor: "#64B5F6", //this.switchChartColor, //this.switchColorLight, //"grey",
            borderWidth: 1.5,
            pointBorderWidth: 0,
            //data : [10, 12, 13, 14, 15, 16, 20, 10, 12, 19,20, 1, 5, 9,45]
            //data: test.date, //dataValue,
            //tension: 0.1
            
          },
          {
            yAxisID: 'B',
            label: 'Velocity Level 1',
            borderColor: 'blue', // "#c45850", // this.switchColorDark,
            pointBackgroundColor: 'transparent',
            backgroundColor: 'blue', // "#c45850", //this.switchColorDark, //"blue",
            borderWidth: 1.5,
            pointBorderWidth: 0,
          },
        ],
      },
      
      {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
        autocolors: false,
      annotation: {
        annotations: {
          //threshold accelration danger
          line1: {
            content: 'line',
            type: 'line',
            yMin: 7,
            yMax: 7,
            drawTime: 'afterDatasetsDraw',
            //scaleID: 'y',
            //value: 7,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            /*label: {
              enabled: true,
              backgroundColor: 'green',
              content: 'March',
              xValue: 'June',
              color: 'black'
          },*/
        },
        //threshold accelration warning
          line2: {
            type: 'line',
            yMin: 3.5,
            yMax: 3.5,
            borderColor: 'orange',
            borderWidth: 2,
            drawTime: 'afterDatasetsDraw',
          },

          //threshold velocity danger
          line3: {
            type: 'line',
            yMin: 8,
            yMax: 8,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            drawTime: 'afterDatasetsDraw',
            borderDash :  [4, 4]
          },

          //threshold velocity warning
          line4: {
            type: 'line',
            yMin: 2,
            yMax: 2,
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
            pan: {
              enabled: true,
              threshold: 0.08,
              borderColor: "#c45850"
            }
          },
          //options: {
            
          },
          /*scales: {
            y: {
              xAxes: {
                drawBorder: true,
                color: 'red',
              zeroLineColor: 'blue'
               },
              },
          },*/
          scales: {
            yAxes: [{
              
            }],
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
          // scales: {
          //   y: {
          //     xAxes: {
          //       drawBorder: true,
          //       color: 'red',
          //       //zeroLineColor: 'blue'
          //       },
          //     },
          //   /*xAxes: {
          //     borderColor: 'red',
          //     gridLines: {
          //       borderColor: 'red',
          //       display: true,
          //       zeroLineColor: 'red'
          //   }
          //   },*/
          //   /*yAxis: {
          //     grid: {
          //       drawBorder: true,
          //       color: 'grey',
          //       },
          //     },*/
          //   }
          /*scales: {
            x: {
              grid: {
                display: DISPLAY,
                drawBorder: BORDER,
                drawOnChartArea: CHART_AREA,
                drawTicks: TICKS,
                color: darkgradients[0] ,//color: '#F8F9F9',
              }
            },
            y: {
              grid: {
                drawBorder: true,
                color: darkgradients[0],
                },
              },
            }*/
        //}
      }

    ),
      //console.log("here")
      
    //console.log("velocity from mounted", this.velocityArr)
    //console.log("velocity 1", this.velocityArr[1])
    //this.id = document.getElementById('chartId');
    console.log('id', vuetify.userPreset.theme.themes.dark.primary)
  },
  computed: {
    //...mapState(['APIDataset']),
  },
  methods: {

    /*async getSensorValues() {
      getAPI.get('/api/sensorValues/1/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
        .then(response => {
          this.$store.state.APIDataset = response.data
          
          this.$store.state.APIDataset.map((e)=>
          {
            //test.date.push(this.formatDate(e.DateTime))
            labelsDate.push(this.formatDate(e.DateTime))
            test.velocity.push(Number(e.Velocity))
            test.acceleration.push(Number(e.Acceleration))
          }
          //console.log(e)}
          )
        //console.log("test", test)
        })
        .catch(err => {
          console.log(err)
        })
      },
      formatDate(labelsDate) {
        var d = new Date(labelsDate),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            time = d.getHours() + ":" + d.getMinutes();
            
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        var fulldate = [year, month, day].join('-')
        var fulldatetime = [fulldate, time].join(' ')

        return fulldatetime;
    },*/
    /*velocity() {
      //var m = [5.279541016e-002,2.593994141e-002]
      //var velocityArr = []
      Math.integral = function (a) {

        var y, result = 0;
        for (var i = 0; i < dataValue.length; i++) {

          y = (a * i);
          result += y;
        }

        return result;
      }
      for (var j = 0; j < dataValue.length; j++) {

        var x = Math.integral(dataValue[j])
        this.velocityArr.push(x)

        //console.log('Integral', x)
      }

      console.log('velocityArr', this.velocityArr)
      //Using the sample
      // console.log( Math.integral(a[0],a[1]) );
    }*/
  },
};
