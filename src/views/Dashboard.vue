<template>
  <v-container fluid color="primary" light>
    <v-row class="font-weight-medium headline">
      <p class="text-h5 text-primary">
        {{ $t("comparison.clientsRisktoQuit") }}
      </p>
    </v-row>
    <v-row>
      <v-col cols="24" md="8">
        <v-row>
          <v-container>
            <LogDisplay class="logTable"></LogDisplay>
          </v-container>
        </v-row>
        <v-row>
          <v-container>
            <p class="text-subtitle-1 font-weight-bold">
              {{ $t("chartDisplay.clientsRisktoquitperGym") }}
            </p>
            <v-select
              prepend-icon="mdi-filter"
              name="filterName"
              :label="$t('filtersLabels.selectFeature')"
              type="text"
              :items="$t('filtersLabels.filterName')"
              v-model="select"
              v-on:change="changeFilter"
              default="age"
            ></v-select>
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
          </v-container>
        </v-row>
      </v-col>
      <v-col>
        <userCard />
      </v-col>
    </v-row>
    <v-row>
      <v-container> </v-container>
    </v-row>
  </v-container>
</template>
<script>
import { Bar } from "vue-chartjs/legacy";
//import { Line } from 'vue-chartjs/legacy'

import LogDisplay from "../views/mainBody/logDisplay";
import userCard from "./userCard";

export default {
  name: "Dashboard",

  components: {
    LogDisplay,
    Bar,
    userCard,
  },
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
      default: 1000,
    },
    height: {
      type: Number,
      default: 300,
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
      labels: [15, 20],
      datasets: [
        {
          label: "Dataset 1",

          backgroundColor: "#109618",
        },
        {
          label: "Dataset 2",
          backgroundColor: "#FFFFAD",
        },
        {
          label: "Dataset 3",
          backgroundColor: "#FF8484",
        },
      ],
    },
    options: {
      autocolors: false,

      /*annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 7,
            yMax: 7,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'Limit',
              rotation: 90
          },
        },
          line2: {
            type: 'line',
            yMin: 3.5,
            yMax: 3.5,
            borderColor: 'orange',
            borderWidth: 2,
          },
          line3: {
            type: 'line',
            yMin: 8,
            yMax: 8,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          },
          line4: {
            type: 'line',
            yMin: 2,
            yMax: 2,
            borderColor: 'orange',
            borderWidth: 2,
          },

        }
      },*/
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

    filterName: ["gender", "age"],
    select: "age",
  }),

  //p= "localhost://..static/
  computed: {
    
    clientsRisksToQuitsorted()
    {
     return [...this.clientsRisksToQuit].sort((a,b) => {return b.score-a.score;})
    },
    changeSelectedDate() {
      return this.$store.state.selectedDateFormat;
    },
    ranked_clients_per_gym() {
      return this.$store.state.filterdClientsRisksToQuit;
    },
    gym() {
      return this.$store.state.activeGym;
    },
    clientsRisksToQuit() {
      return this.$store.state.clientsRisksToQuit;
    },
    //...mapState(['APIDataset', 'APIData']),
    chartOptions() {
      return {
        responsive: true,
        scales: {
          x: {
            ticks: {
              beginAtZero: true,
              color: this.$vuetify.theme.isDark ? "white" : "black",
            },
            stacked: true,
            grid: { display: false, borderColor: "grey" },
          },
          y: {
            ticks: {
              beginAtZero: true,
              color: this.$vuetify.theme.isDark ? "white" : "black",
            },
            stacked: true,
            grid: { display: false, borderColor: "grey" },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: this.$vuetify.theme.isDark ? "white" : "black", // not 'fontColor:' anymore
              // fontSize: 18  // not 'fontSize:' anymore
              font: {
                size: 12, // 'size' now within object 'font {}'
              },
            },
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
      };
    },
  },

  mounted() {

    if (this.$vuetify.theme.isDark) {
      this.chartOptions.plugins.legend.labels.color = "white";
    } else this.chartOptions.plugins.legend.labels.color = "black";
  },

  methods: {
    changeFilter(event) {
     let t = [ this.$route.params.id , event];
      this.$store.dispatch("changeFilterdClientsRisksToQuit", t);
    },

  },

  created() {

    let t = [this.gym.index, "age"];

    this.gym.index !== undefined &&
      this.$store.dispatch("changeFilterdClientsRisksToQuit", t);
    this.$store.dispatch(
      "changeClientsRisksToQuit",
      this.$route.params.id    );
  },
  watch: {
    "$store.state.filterdClientsRisksToQuit": {
      handler() {
        this.chartData = this.$store.state.filterdClientsRisksToQuit;
     
      },
    },

    "$store.state.activeGym": {
      handler() {
        this.$store.dispatch(
          "changeClientsRisksToQuit",
          this.$route.params.id        );
        let t = [ this.$route.params.id , "age"];

        this.$store.dispatch("changeFilterdClientsRisksToQuit", t);
        this.select = "age";
      },
    },
    "$store.state.loading": {
      handler() {
        this.$store.dispatch(
          "changeClientsRisksToQuit",
          this.$route.params.id        );
      },
    },
    "$store.state.clientsRisksToQuit": {
      handler() {

        const selectedItemState = sessionStorage.getItem('selectedItem');
    if (selectedItemState) {
      this.$store.dispatch(
          "changeUserCardActiveRowTableCRQ",
          JSON.parse(selectedItemState)
        );
    }else 
    {
        //let t=[this.clientsRisksToQuit, 'gender']
        this.$store.dispatch(
          "changeUserCardActiveRowTableCRQ",
          this.clientsRisksToQuitsorted[0]
        );
        
        sessionStorage.setItem('selectedItem',  this.clientsRisksToQuitsorted[0]);
      }
        let t = [ this.$route.params.id , "age"];

        this.$store.dispatch("changeFilterdClientsRisksToQuit", t);
    
        ///this.$store.dispatch("changeClientsRisksToQuit",this.$store.state.activeGym.activeGym);
      },
    },
  },
};
</script>

<style scoped>
.logTable {
  /*max-width: 800px;*/
  width: 800px;
}
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

/*@media (prefers-color-scheme: dark) {
  :root {
    background-color: #000;
    color: #fff;
  }
}*/
</style>
