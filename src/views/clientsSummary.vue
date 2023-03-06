<template>
  <container>
    <v-row>
      <v-col cols="2">
        <v-card>
          <!-- color="#385F73" dark -->
          <v-card-title class="text-h5">
            {{ gym.activeGym.count }}
          </v-card-title>

          <v-card-subtitle> {{ $t("gymView.totalClients") }} </v-card-subtitle>


        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <!-- color="white" -->
          <v-card-title class="text-h5"> {{ $t("gymView.clientsSummary") }} </v-card-title>
          <chartDoughnut
            :activeClients="numberActiveClients"
            :nonActiveClients="numberNonActiveClients"
            @saveIndexChartDough="saveIndexChartDough($event)"
          />
          <!--<v-card-subtitle>Doughnut chart</v-card-subtitle>-->

          <v-card-actions>
            <!--<v-btn text> chart </v-btn>-->
          </v-card-actions>
        </v-card>
      </v-col>
      <!--<v-card class="pa-2" outlined tile>-->
      <!--<v-card>-->
      <v-col cols="6">
        <v-card>
          <!-- color="white" -->
          <v-card-title class="text-h5"> {{ $t("gymView.activeNonActive") }} </v-card-title>
          <v-select
            prepend-icon="mdi-filter"
            name="filterName"
            :label='$t("filtersLabels.selectFeature")'
            type="text"
            :items='$t("filtersLabels.filterName")'
            v-model="select"
            v-on:change="changeFilter"
            default="gender"
          ></v-select>
          <div>
            <Bar
              :chart-options="chartOptions"
              :chart-data="chartData"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
            />
            <v-spacer> </v-spacer>
          </div>
          <!--<v-card-subtitle> Bar chart </v-card-subtitle> -->

          <v-card-actions>
            <!--<v-btn text> Bar chart </v-btn>-->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </container>
</template>

<script>
//import { Bar, } from "vue-chartjs/legacy";
//import { Doughnut } from 'vue-chartjs'
import { Bar } from "vue-chartjs/legacy";

import chartDoughnut from "../views/mainBody/chartDoughnut";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
export default {
  name: "clientsSummary",
  components: { chartDoughnut, Bar }, //chartDoughnut
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 800,
    },
    lineWidth: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 440,
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
    activeClients: null,
    nonActiveClients: null,
  },
  data: () => ({
    //filterName: [{text: "filtersLabels.gender"}, {text:"filtersLabels.age"}],
    filterName: [
      {text:"gender", value:"gender"}, 
      {text:"age", value:"age"}
    ],
    select: "gender",
    chartData: {
      labels: [],
      datasets: [
        {
          label: [],
          data: [],
          backgroundColor: ["#E46651"],
        },
        {
          label: [],
          data: [],
          backgroundColor: ["#E46651"],
        },
      ],
    },
    // chartOptions: {
    //   responsive: true,
    //   scales: {
    //     x: {
    //        grid: { display: false,
    //           borderColor: "grey" },
    //     },
    //     y: {
    //        grid: { display: false,
    //           borderColor: "grey" },
    //     },
    //   },
    // },
  }),
  computed: {
    gym() {
      return this.$store.state.activeGym;
    },
    numberNonActiveClients() {
      return this.$store.state.numberNonActiveClients;
    },
    numberActiveClients() {
      return this.$store.state.numberActiveClients;
    },
    chartOptions () {
      return {
      responsive: true,
      scales: {
        x: {
          ticks: { beginAtZero: true, color: (this.$vuetify.theme.isDark) ? "white" : "black" },
           grid: { display: false,
              borderColor: "grey" },
        },
        y: {
          ticks: { beginAtZero: true, color: (this.$vuetify.theme.isDark) ? "white" : "black" },
           grid: { display: false,
              borderColor: "grey" },
        },
      },
      plugins: {
        legend: {
        labels: {
          color: (this.$vuetify.theme.isDark) ? "white" : "black",  // not 'fontColor:' anymore
          // fontSize: 18  // not 'fontSize:' anymore
          font: {
            size: 12 // 'size' now within object 'font {}'
          }
        }
      },
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
        },
      },
    }
  }
  },
  methods: {
    saveIndexChartDough(e) {
      console.log(e);
    },
    changeFilter(event) {

      
      this.$store.dispatch("changeActiveIndexDoughnut", [event,this.gym.id]);
    },
  },
  watch: {
    '$store.state.activeIndexDoughnut': {
      
      handler () {
        this.$data.chartData = this.$store.state.activeIndexDoughnut ;
        
      }
    },
      '$store.state.activeGym':
   { 
    handler(){
      this.$store.dispatch("changeActiveIndexDoughnut",["gender",this.gym.id]);
    }
    },
    },
      created() {

      this.$store.dispatch("changeActiveIndexDoughnut", ["gender",this.gym.id]);
  },
};
</script>
