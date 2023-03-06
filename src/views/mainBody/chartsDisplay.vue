<template>
  <v-container fluid color="primary" light>
    <v-row class="font-weight-medium headline">
      <v-col cols="24" md="12">
        <v-row style="letter-spacing: 2px" class="text-h5 font-weight-bold">
          {{ $t("chartDisplay.supervision") }}
        </v-row>

        <v-row cols="12" md="6">
          <!-- <v-row cols="24" md="24">-->
          <v-col md="1" class="inputdate text-no-wrap rounded" color="blue">
            {{ $t("chartDisplay.start") }} :
          </v-col>
          <v-col
            cols="14"
            sm="3"
            md="2"
            class="inputdate text-no-wrap rounded dateInput ms-n2"
            style="margin-top: 10px; padding-top: 5px; height: 40px"
          >
            <!--<b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>-->
            <!--<input @change="filterData()" type="date" id="startdate" value='2021-01-01'>-->
            <input
              type="datetime-local"
              @change="filterData()"
              id="startdate"
              name="meeting-time"
              :value="periodDateTimeStart"
            />
            <!-- step="1" -->
          </v-col>
          <!-- class="text--primary" -->
          <v-col md="1" class="inputdate text-no-wrap rounded">
            {{ $t("chartDisplay.end") }} :
          </v-col>
          <v-col
            cols="14"
            sm="3"
            md="2"
            class="inputdate text-no-wrap text--textToolBar rounded dateInput ms-n2"
            style="margin-top: 10px; padding-top: 5px; height: 40px"
          >
            <!--<input @change="filterData()" type="date" id="enddate" :value="period" > -->
            <!--value ="2021-12-31"-->
            <input
              type="datetime-local"
              @change="filterData()"
              id="enddate"
              name="meeting-time"
              :value="periodDateTime"
            />
            <!-- step="1"  -->
          </v-col>
          <!-- class="text--primary" -->

          <v-col
            cols="12"
            sm="5"
            md="1"
            class="inputdate text-no-wrap text--textToolBar ms-4"
          >
            <v-btn color="primary" text outlined @click="refreshDate()">
              {{ $t("chartDisplay.refresh") }}
            </v-btn>
          </v-col>
          <v-col class="mt-2" cols="12" md="8">
            <!-- <v-col class="mt-2" cols="14" md="24"> -->
            <!--<line-chart/>-->
            <!--<LineChartVue id="chartId" :data="dataLine" :options="options"/>
            <line-chart id="chartIdLine" :chart-options="options"
            -->
            <line-chart
              :chart-options="options"
              :chart-data="dataLine"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import { mapState } from "vuex";
import zoomPlugin from "chartjs-plugin-zoom";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  zoomPlugin,
  LineElement,
  annotationPlugin
);
import LineChart from "./LineChart.js";

const labelsDate = [];
let test = {
  date: ["2021-12-31T22:00","2021-12-3T22:00","2021-12-4T22:00","2021-12-5T22:00"],
  velocity: ["1","3","4","5"],
  acceleration: [],
  thresholdDate: [],
  thresholdAccelerationHigh: [],
  thresholdAccelerationLow: [],
  thresholdVelocityHigh: [],
  thresholdVelocityLow: [],
};
//const thresholdDate = [];

export default {
  //components: {LogDisplay,Bar,LineChart},
  //components: { Bar, LogDisplay, LineChart, LineChartVue },
  name: "ChartsDisplay",
  components: { LineChart },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    labelsDateUp: [],
  },

  data: () => ({
    dataLine: {
      id: "chartId",
      labels: labelsDate, //test.date,
      backgroundColor: "white",
      datasets: [
        {
          //yAxisID: 'A',
          label: "Acceleration Level 1",
          borderColor: "#64B5F6", //this.switchColorLight, //"grey",
          pointBackgroundColor: "transparent",
          backgroundColor: "#64B5F6", //this.switchColorLight, //"grey",
          borderWidth: 1.5,
          pointBorderWidth: 0,
          data: test.acceleration, //dataValue
        },
        {
          //yAxisID: 'B',
          label: "Velocity Level 1",
          borderColor: "blue", // this.switchColorDark,
          pointBackgroundColor: "transparent",
          backgroundColor: "blue", //this.switchColorDark, //"blue",
          borderWidth: 1.5,
          pointBorderWidth: 0,
          //data : [0.10, 0.12, 0.13, 0.14, 0.15, 0.16, 0.20, 0.10, 0.12, 0.19,0.20, 0.1, 0.5, 0.9,0.45]
          data: test.velocity, //dataValuet
        },
      ],
    },
    options: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: 7,
            yMax: 7,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            label: {
              enabled: true,
              content: "Limit",
              rotation: 90,
            },
          },
          line2: {
            type: "line",
            yMin: 3.5,
            yMax: 3.5,
            borderColor: "orange",
            borderWidth: 2,
          },
          line3: {
            type: "line",
            yMin: 8,
            yMax: 8,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
          },
          line4: {
            type: "line",
            yMin: 2,
            yMax: 2,
            borderColor: "orange",
            borderWidth: 2,
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: "x",
          },
          pan: {
            enabled: true,
            threshold: 0.08,
            borderColor: "#c45850",
          },
        },
      },
    },
    time: null,
    menu2: false,
    modal2: false,

    titles: [
      {
        title: "CARACTERISTICS",
      },
      {
        title: "DATA",
      },
    ],
    sensors: [""],
    model: 1,
    fill: false,
    cells: [],
    padding: 5,
    radius: 0,
    chartOptions: {
      responsive: true,
    },

    date: null,
    period: "2021-12-31", //  '2021-03-31',
    periodDateTimeStart: "2021-01-01 00:00", //'2021-01-01T00:00:00',
    periodDateTime: "2021-12-31 23:00", //'2021-12-31T23:00:00',
    accelerationValue: new Array(),
  }),
  created() {
  },
  mounted() {
  },
  computed: {
    changeSelectedDate() {
      return this.$store.state.selectedDateFormat;
    },
    ...mapState(["APIDataset", "APIData"]),
  },
  methods: {


    async refreshDate() {
      const startdate = document.getElementById("startdate");
      const enddate = document.getElementById("enddate");

      (startdate.value = "2021-01-01 00:00:00"), // '2021-01-01T00:00:00'  // '2021-01-01';
        (enddate.value = "2021-12-31 23:00:00"); //'2021-12-31T23:00:00'  //'2021-12-31';

      //this.dataLine.labels = labelsDate
    },



    formatDate(labelsDate) {
      var d = new Date(labelsDate),
        //date
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        //time
        hour = d.getHours(),
        minute = d.getMinutes();

      //format the date values
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      //format the date values
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;

      var fulldate = [year, month, day].join("-");
      var fullTime = [hour, minute].join(":");

      var fulldatetime = [fulldate, fullTime].join("T");

      return fulldatetime;
    },
  },
};
</script>

<style scoped>
/*#timeID{
  width: 50px;
}*/

.inputdate {
  border: 2px solid grey round;
  font-size: 17px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  color-scheme: blue; /*color-scheme: dark;*/
  /*filter: invert(1);*/
}
</style>
