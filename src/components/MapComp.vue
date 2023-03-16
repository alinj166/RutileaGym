<template>
  <l-map style="height: 75vh" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="marker in markerLatLng"
      :key="marker.gym_id"
      :lat-lng="marker.coords"
      @click="handler1(marker)"
      
    >
      <l-tooltip :options="tooltipOptions">
        {{ marker.gym_label }}
      </l-tooltip>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  methods: {
    handler1(e) {
      this.$emit("handler", e.gym_id);
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 7,
      center: [34.59693261625821, 135.6795],

      tooltipOptions: {
        permanent: true,
      },
    };
  },
  props: {
    markerLatLng: Array,
  },
};
</script>
