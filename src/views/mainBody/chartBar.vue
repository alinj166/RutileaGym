<template>
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
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
//import { Doughnut } from 'vue-chartjs'
//import chartDoughnut from '../views/mainBody/chartDoughnut'
//let activeNonActiveClients = {"active":[5, 7, 10, 9, 8, 7, 3, 4, 5, 6], "nonActive": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
  name: "ChartBar",
  components: { Bar }, //chartDoughnut
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
    nonActiveClients:null
  },
  data: () => ({
    chartData: {
      labels: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      datasets: [
        {
          label: ["Active Clients"],
          data: [5, 7, 10, 9, 8, 7, 3, 4, 5, 6],
          backgroundColor: ["#E46651"],
        },
                {
          label: ["Active Clients"],
          data: [5, 7, 10, 9, 8, 7, 3, 4, 5, 6],
          backgroundColor: ["#E46651"],
        },
      ],
    },
    chartOptions: {
      responsive: true,
    },
  }),
  watch: {
    activeClients: {
      
      handler () {
        this.$data.chartData.datasets[0].data = [this.activeClients.count,this.nonActiveClients.count];
        
      }
    },
    },
  created(){
       this.$data.chartData.datasets[0].data = [this.activeClients.count,this.nonActiveClients.count];
  },
    methods: {
    updateChart () {
 this.$data.chartData.set_datasets();    },

}
};
</script>
