import Vue from "vue";
import Vuex from "vuex";
//import api from "./api";
//import { getAPI } from "./axios-api";
import changeClientsRisksToQuit from "./store/DashboardState/dashAction";
import changeUserCardActiveRowTableCRQ from "./store/DashboardState/dashAction";
import changeFilterdClientsRisksToQuit from "./store/DashboardState/dashAction";
import changeFilterdClientsRisksToQuitMutation from "./store/DashboardState/dashAction";
import changeClientsRisksToQuitMutation from "./store/DashboardState/dashMutation";
import changeUserCardActiveRowTableCRQMutation from "./store/DashboardState/dashMutation";

import changeClientsSummary from "./store/gymState/gymAction";
import changeActiveIndexDoughnut from "./store/gymState/gymAction";
import changeNumberNonActiveClients from "./store/gymState/gymAction";
import changeNumberActiveClients from "./store/gymState/gymAction";

import changeClientsSummaryMutation from "./store/gymState/gymMutation";
import changeActiveIndexDoughnutMutation from "./store/gymState/gymMutation";
import changeNumberNonActiveClientsMutation from "./store/gymState/gymMutation";
import changeNumberActiveClientsMutation from "./store/gymState/gymMutation";

import changeComparaisonNumberClients from "./store/ComparisonState/comAction";
import changeComparaisonNumberClientsMutation from "./store/ComparisonState/comMutation";

import changeFilterdComparaisonClientsRisksToQuit from "./store/ComparisonState/comAction";
import changeFilterdComparaisonClientsRisksToQuitMutation from "./store/ComparisonState/comMutation";
//import { Axios } from "./axios-api";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    username: "",
    APIData: "",
    APIDataset: "",
    APIDataset2: "",
    APISettings: "",
    APIDataSensor: [],
    interventions: [],
    user: null,
    // loggedIn:false,
    //users: [],
    dates: ["3 Months", "6 Months", "1 Year", "2 Years"],
    selectedDateFormat: "2 Years",
    activeGym: {},
    clientsSummary: {},
    numberNonActiveClients: [],
    numberActiveClients: [],

    clientsRisksToQuit: [],

    filterdClientsRisksToQuit: {
      chartData: {
        labels: [],
        datasets: [
          {
            //label: "Clients that risk to quit",
            data: [5, 7, 10, 9, 8, 7, 3, 4, 5, 6],
            backgroundColor: ["#ADD6FF"],
          },
        ],
      },
    },
    // object used for  user card in  dashboard page to display information for this componenent
    //just init prob_0 because .toPrecision generate an error for undefined value
    userCardActiveRowTableCRQ: { score: 0.0 },
    // call active gender and non active gender API to Get the numbers of males and females for each gyms
    //calculate the sum of the active and non active
    // use this object as parametre in chart Number of clients (page comparaison )
    comparaisonNumberClients: {},

    filterdComparaisonClientsRisksToQuit: {},
    activeIndexDoughnut: null,
    stateNavBar: null,
    //loading for
    loading: false,
  },
  
  mutations: {
    /*setUser(state, username) {
         state.username = username;
    },*/
    // updateStorage(state, usercredentials) { //{ access, refresh }
    //   // state.accessToken = access;
    //   // state.refreshToken = refresh;
    //   state.user = usercredentials
      
    // },
    //destroyToken(state) {
      //state.refreshToken = null;
      //state.user = usercredentials
    //},
    // userLogout(state) {
    //   state.user = null
    //   state.loggedIn = false;
    // },
    changeDefaultDate(state, datesItem) {
      state.dates = datesItem;
    },

    changeSelectedDate(state, pickedDate) {
      state.selectedDateFormat = pickedDate;
    },
    changeActiveGym(state, activeGym) {
      state.activeGym = activeGym;
    },

    ...changeClientsSummaryMutation,

    ...changeClientsRisksToQuitMutation,
    ...changeFilterdClientsRisksToQuitMutation,
    ...changeUserCardActiveRowTableCRQMutation,
    ...changeComparaisonNumberClientsMutation,
    ...changeFilterdComparaisonClientsRisksToQuitMutation,
    ...changeNumberNonActiveClientsMutation,
    ...changeNumberActiveClientsMutation,
    ...changeActiveIndexDoughnutMutation,
    changeStateNavBar(state, stateNavBar) {
      state.stateNavBar = stateNavBar;
    },
    changeLoading(state, loading) {
      state.loading = loading;
    },
    changeLogged(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
  },
  getters: {
  //   loggedIn(state) {
  //     console.log("state.loggedIn", state.loggedIn)
  //     return state.loggedIn;
      
  //     // return state.accessToken != null;
  //   },
  //   userState(state) {
  //     return state.user != null;
  //   },
  //   StateUser: (state) => state.user,
   },
  actions: {
    // userLogout({commit}) {
    //   let user = null;
    //   //state.user = null
    //   //state.loggedIn = false;
    //   commit('userLogout', user)
    //   console.log('from logout user', user)
    // },

    // // async LogOut({ commit }) {
    //   let user = null;
    //   console.log(state.users)
    //   commit("logout", user);
    // },

    // userLogin (context, usercredentials) {
    //   return new Promise((resolve, reject) => {
    //     /*const timeout = setTimeout(() => {
          
    //       // Timeout Logic
    //     }, 10000);*/
    //     Axios.post('/api/login/', {
    //       username: usercredentials.username,
    //       password: usercredentials.password
    //     })
    //       .then( () => { //response => 
    //         console.log("step1")
    //         context.commit('updateStorage', usercredentials)  //, { access: response.data.token, refresh: response.data.expiry}
    //         resolve()
            
    //       })
    //       .catch(err => {
    //         reject(err)
    //       })
    //   })
    // },

    changeDefaultDate(context, dates) {
      context.commit("changeLabel", dates);
    },

    changeSelectedDate(context, selectedDate) {
      context.commit("selectedDate", selectedDate);
    },
    changeActiveGym(context, activeGym) {
      context.commit("changeActiveGym", activeGym);
    },
    changeStateNavBar(context, stateNavBar) {
      context.commit("changeStateNavBar", stateNavBar);
    },
    changeLogged(context, loggedIn) {
      context.commit("changeLogged", loggedIn);
    },
    // object used for  user card in  dashboard page to display information for this componenent
    //just init prob_0 because .toPrecision generate an error for undefined value

    ...changeUserCardActiveRowTableCRQ,
    changeLoading(context, loading) {
      context.commit("changeLoading", loading);
    },
    ...changeClientsSummary,

    ...changeFilterdClientsRisksToQuit,
    ...changeClientsRisksToQuit,

    ...changeComparaisonNumberClients,

    //call 4 API
    ...changeActiveIndexDoughnut,
    ...changeFilterdComparaisonClientsRisksToQuit,
    ...changeNumberActiveClients,
    ...changeNumberNonActiveClients,
  },
});

////commented becaus she want to sperate the active and non active
///and this function works only for all clientss
/*changeComparaisonNumberClients(context, table) {
      console.log(
        "🚀 ~ file: store.js ~ line 392 ~ changeComparaisonNumberClients ~ table",
        table
      );

      let active = {};
      let nonActive = {};
      let activeNonActiveKeys = {};
      let sum = [];
      let randomIndex = 0;
      let backgroundColor = [
        "#FF8484",
        "#FFC184",
        "#FFADAD",
        "#ADFFAD",
        "#ADD6FF",
        "#FFFFAD",
        "#FFD6AD",
        "#d18285",
        "#f7bf6a",
        "#109618",
      ];
      api
        .clientsRisksToQuitNonActiveGender()
        .then((response) => {
          response.data.map((item) => {
            active[item["gym_id"]] = {
              male: item["male"],
              female: item["female"],
              label: item["gym_label"],
            };
            activeNonActiveKeys[item["gym_id"]] = item["gym_label"];
          });
        })
        .then(() =>
          api.clientsRisksToQuitActiveGender().then((response) =>
            response.data.map((item) => {
              nonActive[item["gym_id"]] = {
                male: item["male"],
                female: item["female"],
                label: item["gym_label"],
              };
              activeNonActiveKeys[item["gym_id"]] = item["gym_label"];
            })
          )
        )
        .then(() => {
          for (let i in activeNonActiveKeys) {
            sum.push({
              label: activeNonActiveKeys[i],
              data: [
                isNanValue(nonActive[i]?.male) + isNanValue(active[i]?.male),
                isNanValue(nonActive[i]?.female) +
                  isNanValue(active[i]?.female),
              ],
              backgroundColor: [backgroundColor[randomIndex]],
            });
            randomIndex++;
            if (randomIndex === backgroundColor.length - 1) randomIndex = 0;
          } 
          

          context.commit("changeComparaisonNumberClients", sum);
        });

      const isNanValue = (val) => {
        if (isNaN(val)) {
          return 0;
        } else return val;
      };
    },*/
