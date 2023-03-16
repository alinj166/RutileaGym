import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
//import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg',
  },
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        white: 'white',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        chartColor : '#5cbeff',
        toolbarTab: 'white',
        textToolBar : 'black',
        dateInput : 'white',
        header:"#fafafa",
      },
      dark: {
        primary: "639CD9", //"BBE1FA", // '#8c9eff' "#82DBD8",
        white: 'white',
        textToolBar : 'black',

        accent: "#7CB342",
        secondary: "#689F38",
        success: "#4CAF50",
        info: "#6156d8",
        warning: "#1565C0",
        error: "#FF7043",
        toolbarTab: "#D5D5D5", //  //"#DDDDDD", //"white", // "639CD9", //'BBE1FA',  //'#8c9eff',
        chartColor : '#5cbeff',
        dateInput : "#D5D5D5", // "#1e1e1e",  //"7F8487", //"639CD9"
        header:"#1e1e1e",
      },
    },
  },
});
