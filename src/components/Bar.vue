<template>
    <div class="barChart col-md-6">
      <Bar :chart-data="barchartDatacollection"></Bar>
      
  </div>
</template>

<script>
import { Bar } from "vue-chartjs/legacy";

export default {
  components: {
    Bar
  },
  data() {
    return {
      barchartDatacollection: { labels: [], datasets: [], options: {} }, 
     
    };
  },
  mounted() {
    this.barchartdata();
  },
  methods: {
    barchartdata() {
      this.barchartDatacollection = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],

        datasets: [
          {
            label: "Bad Style",
            data: [40, 47, 44, 38, 27],
            backgroundColor: "#512DA8",
            hoverBackgroundColor: "#7E57C2",
            hoverBorderWidth: 0
          },
          {
            label: "Warning",
            data: [10, 12, 7, 5, 4],
            backgroundColor: "#FFA000",
            hoverBackgroundColor: "#FFCA28",
            hoverBorderWidth: 0
          },
          {
            label: "Error",
            data: [17, 11, 22, 18, 12],
            backgroundColor: "#D32F2F",
            hoverBackgroundColor: "#EF5350",
            hoverBorderWidth: 0
          }
        ],
        options: {
          scales: {
            x: [
              {
                stacked: true,
              }
            ],
            y: [
              {
                stacked: true
              }
            ]
          },
        }
      };
    }
  }
};
</script>