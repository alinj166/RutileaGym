<template lazy>
  <div>
    <l-map
      style="height: 80vh"
      :zoom="zoom"
      :center="center"
      @click="addMarker"
    >

      <l-tile-layer :url="url"></l-tile-layer>
            <l-geosearch  :options="geosearchOptions">
      </l-geosearch>
      <l-marker
        lazy
        v-for="marker in markers"
        :key="marker.label"
        :lat-lng="marker"
        :draggable="true"
        @dragstart="dragStartHandler"
        @dragend="dragEndHandler"
      >
        <l-tooltip :options="tooltipOptions"> {{ "geo" }} </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import LGeosearch from "vue2-leaflet-geosearch";

export default {
  name: "CreateGymsMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LGeosearch,
  },

  methods: {
    addMarker(event) {

      this.markers.pop()
      if (this.markers?.length <= 0) {
        let newMarker = {};
        let label = this.markers.length + 1;
        newMarker = {
          label: label,
          lat: event.latlng["lat"],
          lng: event.latlng["lng"],
          rotate: true,
        };
        // this.markers.push(newMarker);
        // console.log(this.markers);
        this.marker = newMarker;
        let newMarkers = this.markers;
        newMarkers.push(newMarker);
        this.markers = newMarkers;
        this.$emit("update-marker", newMarkers);
      }
    },
    dragStartHandler(e) {
      let coords = [e.target._latlng.lat, e.target._latlng.lng];
      this.currentPoint = this.getMarkerFromCoords(coords);
    },
    forceRerender() {
      this.componentKey = this.componentKey + 1;
    },
    dragEndHandler(e) {
      let coords = [e.target._latlng.lat, e.target._latlng.lng];
      let newCoords = {};
      let indexToChange = 0;
      for (let i = 0; i < this.markers.length; ++i) {
        if (this.markers[i] === this.currentPoint) {
          newCoords.lat = coords[0];
          newCoords.lng = coords[1];
          indexToChange = i;
        }
      }
      let newMarkers = this.markers;
      newMarkers[indexToChange].lat = newCoords.lat;
      newMarkers[indexToChange].lng = newCoords.lng;
      this.$emit("update-marker", newMarkers);
    },
    getMarkerFromCoords(coord) {
      for (let i = 0; i < this.markers.length; ++i) {
        if (
          this.markers[i].lat === coord[0] &&
          this.markers[i].lng === coord[1]
        ) {
          return this.markers[i];
        }
      }
      return {};
    },
  },
  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 15,
    center: [34.59693261625821, 135.58023853920724],

    tooltipOptions: {
      permanent: true,
    },
    marker: {
      label: 1,
    },
    componentKey: 0,
    geosearchOptions: {
      // Important part Here
      provider: new OpenStreetMapProvider(),
      showMarker: false,
      animateZoom: true,
      autoClose: true,
      searchLabel: "search coordinates",
      keepResult: true,
      retainZoomLevel: true,
    },
  }),

  props: {
    markers: Array,
  },
};
</script>
