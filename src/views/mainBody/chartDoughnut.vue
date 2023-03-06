<template>
  <Doughnut
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
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";
//import { Doughnut } from 'vue-chartjs'
//import chartDoughnut from '../views/mainBody/chartDoughnut'

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
  name: "chartDoughnut",
  components: { Doughnut }, //chartDoughnut
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 200,
    },
    lineWidth: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100, //400,
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
    status: null,
  },
  data: () => ({
    chartData: {
      labels: ["Non Active Clients", "Active Clients"],
      datasets: [
        {
          backgroundColor: ["#E46651", "#41B883"],
          data: [20, 40],
        },
      ],
    },
    // chartOptions: {
      
    //   onClick: (event, elements, chart, status) =>{
        
    //     console.log("🚀 ~ file: chartDoughnut.vue ~ line 83 ~ status", status);
    //     console.log("🚀 ~ file: chartDoughnut.vue ~ line 83 ~ chart", chart);

    //     if (elements[0]) {
    //       const i = elements[0].index;
    //       console.log("🚀 ~ file: chartDoughnut.vue ~ line 90 ~ i", i)
    //      /// _this.$store.dispatch("changeActiveIndexDoughnut",i)
    //       //this.$emit("saveIndexChartDough", i);
    //     }
    //   },
    //   //weight: 2,
    //   //aspectRatio: 1.5,
    //   //maintainAspectRatio: true,
    //   responsive: true,
    // },
  }),
  computed: {
    chartOptions () {
      return {
      responsive: true,
      // scales: {
      //   x: {
      //     ticks: { beginAtZero: true, color: (this.$vuetify.theme.isDark) ? "white" : "black" },
      //     //stacked: true,
      //     //grid: { display: false, borderColor: "grey" },
      //   },
      //   y: {
      //     ticks: { beginAtZero: true, color: (this.$vuetify.theme.isDark) ? "white" : "black" },
      //     //stacked: true,
      //     //grid: { display: false, borderColor: "grey" },
      //   },
      // },
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

  watch: {
    activeClients: {
      handler() {
        this.$data.chartData.datasets[0].data = [
          this.activeClients.count,
          this.nonActiveClients.count,
        ];
      },
    },
  },
  created() {
    this.$data.chartData.datasets[0].data = [
      this.activeClients.count,
      this.nonActiveClients.count,
    ];
  },
  methods: {
    updateChart() {
      this.$data.chartData.set_datasets();
    },
    // switchActive() {
    //   console.log("chart clicked");
    // },
  },
};
</script>
