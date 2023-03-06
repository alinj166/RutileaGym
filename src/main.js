import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
//import store from './views/store';  
import store from './store';  
import i18n from "@/plugins/i18n";
import axios from 'axios'
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import JsonExcel from "vue-json-excel";
//import vueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component('downloadExcel', JsonExcel)
Vue.config.productionTip = false
import  L  from 'leaflet';
import "leaflet-geosearch/dist/geosearch.css";

delete L.Icon.Default.prototype._getIconUrl;  

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
new Vue({
//  store1,
  store,
  router,
  vuetify,
  i18n,

  render: h => h(App),


}).$mount('#app')
