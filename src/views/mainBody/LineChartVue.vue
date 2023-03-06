<script>

import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'vue-chartjs/legacy'
//import colors from 'vuetify/lib/util/colors'
//import chartsDisplay from "./chartDisplay";
//import navbar from "./Navbar.";
import vuetify from '../../plugins/vuetify';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, zoomPlugin)
const labelsDate = ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01',
  '2022-08-01', '2022-09-01', '2022-10-01', '2022-11-01', '2022-12-01'];
const labelsSecond = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
'19','20', '21', '22', '23', '24', '24', '25', '26', '27', '28', '29', '30'];
const dataValue = [2.5e-005,
  5.279541016e-002,
  2.593994141e-002,
  9.185791016e-002,
  6.256103516e-002,
  4.699707031e-002,
  3.601074219e-002,
  5.187988281e-002,
  4.638671875e-002,
  4.425048828e-002,
  5.401611328e-002,
  7.293701172e-002,
  5.798339844e-002,
  6.866455078e-002,
  3.875732422e-002,
  5.401611328e-002,
  2.105712891e-002,
  5.615234375e-002,
  4.821777344e-002,
  -1.098632813e-002,
  -2.9296875e-002,
  -2.44140625e-002,
  1.037597656e-002,
  -3.570556641e-002,
  -3.021240234e-002,
  -4.028320313e-002,
  -3.997802734e-002,
  -6.256103516e-002,
  -7.934570313e-002,
  -5.798339844e-002,
  -6.439208984e-002,
  -9.490966797e-002];
export default {
  extends: Line,
  labelsSecond,
  labelsDate,
  data() {
    return {
      //labelsDate: ['2022-01-01','2022-02-01'],
      //username: 'username',
      labelsSecond,
      labelsDate,
    }
  },
  props: ["data", "labels", "options"],

  mounted() {
    this.switchColorLight = vuetify.userPreset.theme.themes.light.accent
    this.switchColorDark = vuetify.userPreset.theme.themes.dark.accent
    this.switchColorDarkPrimary = vuetify.userPreset.theme.themes.dark.primary
    this.switchChartColor = vuetify.userPreset.theme.themes.light.chartColor

    this.velocityArr = []
    this.velocity()
    this.render
    this.renderChart(this.data, this.options),
      //console.log("here")
      
    console.log("velocity from mounted", this.velocityArr)
    console.log("velocity 1", this.velocityArr[1])
    this.id = document.getElementById('chartId');
    console.log('id', vuetify.userPreset.theme.themes.dark.primary)
  },
  methods: {
    velocity() {
      //var m = [5.279541016e-002,2.593994141e-002]
      //var velocityArr = []
      Math.integral = function (a) {

        var y, result = 0;
        for (var i = 0; i < 5; i++) {

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
      /*Using the sample*/
      // console.log( Math.integral(a[0],a[1]) );
    }
  },
};
</script>