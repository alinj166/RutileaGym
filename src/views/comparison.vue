<template>
  <v-container fluid color="#fafafa" light>
  <h1> {{$t('comparison.gymComparison')}} </h1>

    <Bar 
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"/>

    <v-divider class="my-8"> </v-divider>
                <v-select
              prepend-icon="mdi-filter"
              name="filterName"
              :label='$t("filtersLabels.selectFeature")'
              type="text"
              :items='$t("filtersLabels.filterActiveNonActive")'
              v-model="select"
              v-on:change="changeFilter"
              
            ></v-select>
    <Bar 
    :chart-options="options"
    :chart-data="chartDataGender"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height2"/>
  </v-container>
</template>

<script> 
import { Bar } from 'vue-chartjs/legacy'
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
  components: { Bar },
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
      default: 600,
    },
    height: {
      type: Number,
      default: 200,
    },
    height2: {
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
  },
  data: () => ({
    
    chartData: {
      labels: [],
      datasets: [
        { 
        label: '',
        data: [0],
        backgroundColor: ["#FF8484"],
        },
        { 
        label: '',
        data: [0, 0, 0,0,0,0,0,0],
        backgroundColor: ["#FFC184"],
        },
        { 
        label: '',
        data: [0,0,0,0,0,0,0,0],
        backgroundColor: ["#FFADAD"],
    },
    { 
        label: '',
        data: [0,0,0,0,0,0,0,0],
        backgroundColor: ["#ADFFAD"],
    },
    { 
        label: '',
        data: [0,0,0,0,0,0,0,0],
        backgroundColor: ["#ADD6FF"],
    },
    { 
        label: '',
        data: [0,0,0,0,0,0,0,0],
        backgroundColor: ["#FFFFAD"],
    },
    { 
        label: '',
        data: [0,0,0,0,0,0,0,0],
        backgroundColor: ["#FFD6AD"],
    },
    { 
        label: '',
        data: [0,0,0,0,0,0,0,0],
        backgroundColor: ["#FFADD6"],
    }
        ],
    },
    chartDataGender: {
      
      labels: ["Male", "Female","Other" ],
      datasets: [{ 
        label: '',
        data: [],
        backgroundColor: ["#FF8484"],
        },
        { 
        label: '',
        data: [],
        backgroundColor: ["#FFC184"],
    },
    { 
        label: '',
        data: [],
        backgroundColor: ["#FFADAD"],
    },
    { 
        label: '',
        data: [],
        backgroundColor: ["#ADFFAD"],
    },
    { 
        label: '',
        data: [],
        backgroundColor: ["#ADD6FF"],
    },
    { 
        label: '',
        data: [0,0],
        backgroundColor: ["#FFFFAD"],
    },
    { 
        label: '',
        data: [0,0],
        backgroundColor: ["#FFD6AD"],
    },
    { 
        label: '',
        data: [0,0],
        backgroundColor: ["#FFADD6"],
    }],
    },
    
    filterName: [{text:"filtersLabels.all",value: "all"}, {text:"Only Active",value: "Only_active"},{ text:"Only Non Active",value:"Only_Non_active"}],
    select: "all",
  }),
  computed: {
    gym() {
      return this.$store.state.activeGym;
    },
    comparaisonNumberClients(){
            return this.$store.state.comparaisonNumberClients;
    },
    chartOptions () {
      return {
      responsive: true,
      plugins: {
        legend: {
        labels: {
          color: (this.$vuetify.theme.isDark) ? "white" : "black",  // not 'fontColor:' anymore
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
      title: {
            display: true,
            text: this.$t('chartOptions.title.text'),
            color: (this.$vuetify.theme.isDark) ? "white" : "black",
            font: {size: 20},
            padding: {
                    top: 10,
                    bottom: 30
                }
          }
      },      
      scales: {
        x: {
          ticks: { beginAtZero: true, color: (this.$vuetify.theme.isDark) ? "white" : "black" },
          stacked: true,
          categoryPercentage: 0.8,
              barPercentage: 1,
           grid: { display: false,
              borderColor: "grey" },
        },
        y: {
          ticks: { beginAtZero: true, color: (this.$vuetify.theme.isDark) ? "white" : "black" },
          stacked: true,
          categoryPercentage: 0.5,
              barPercentage: 1,
           grid: { display: false,
              borderColor: "grey" },
        },
      },
      }
    },
    options () {
      return {
        responsive: true,
        maintainAspectRatio: false,
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
          title: {
            display: true,
            text: this.$t('comparison.numberClient'),
            font: {size: 20},
            color: (this.$vuetify.theme.isDark) ? "white" : "black",
            //color: 'black',
            padding: {
                    top: 10,
                    bottom: 30
                }
          },
      },
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
    }
    },
},
methods:{
  changeFilter(event) {

      this.$store.dispatch("changeComparaisonNumberClients",event)

 
    },
},
  watch: {
    '$store.state.comparaisonNumberClients': {
      handler() {
        this.chartDataGender.datasets = this.$store.state.comparaisonNumberClients;
      },
    },
    '$store.state.filterdComparaisonClientsRisksToQuit': {
      handler() {
        this.chartData = this.$store.state.filterdComparaisonClientsRisksToQuit;
      },
    },
  },
  created(){
this.$store.dispatch("changeComparaisonNumberClients","all")
this.$store.dispatch("changeFilterdComparaisonClientsRisksToQuit",)

  }
}
</script>

<style>
.sensorDisplay {
  opacity: 0.5;
  display: none;
}
</style>
