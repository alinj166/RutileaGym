<template>
  <v-item-group style="z-index: 1">
    <v-container>
      <v-row>
        <LoadingOverlay />
        <MapComp
          @handler="handler($event, 'instruction')"
          :markerLatLng="gyms"
        />
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import { mapActions } from "vuex";
import api from "../api";
import MapComp from "../components/MapComp.vue";
import LoadingOverlay from "../components/LoadingOverlay.vue";

export default {
  name: "team",
  components: {
    MapComp,
    LoadingOverlay,
  },
  data: () => ({
    gyms: null,
    isVisible: true,
    markerLatLng: [
      { coord: [32.3709, 64.6962], key: "gym1", id: 5 },
      { coord: [51.504, -0.156], key: "gym2", id: 3 },
    ],
  }),
  props: {
    markers: Array,
    url: String,
    angleImage: Number,
    bounds: Array,
    zoomRange: Number,
  },
  mounted() {
  },

  async created() {
    this.$store.dispatch("changeLoading", true);
    let gyms = await api.numberClinetsPerGym();
    this.gyms = gyms.data;
    gyms.data.forEach((element) => {
      element["coords"] = [
        element["x_coord"],
        element["y_coord"],
      ];
    });
    this.$store.dispatch("changeLoading", false);
  },

  methods: {
    displayMenu(index) {
      this.url_data = this.$route.params.id;
      //let routes = ["gym"]
      //if (routes.includes(this.$route.name)) {
      if (this.$route.name == "dashboard") {
        this.isVisible = true;
        this.$store.dispatch("changeStateNavBar", true);
      } else {
        this.isVisible = false;
        this.$store.dispatch("changeStateNavBar", false);
      }

      this.$store.dispatch("changeNumberNonActiveClients", index);
      this.$store.dispatch("changeClientsSummary", index);
      this.$store.dispatch("changeNumberActiveClients", index);
      let temp = {
        activeGym: this.gyms.find((i) => i.gym_id === index),
        id: index,
      };
      this.$store.dispatch("changeActiveGym", temp);
    },

    async handler(index) {
      this.url_data = this.$route.params.id;

      //let routes = ["gym"]
      //if (routes.includes(this.$route.name)) {
      this.$store.dispatch("changeStateNavBar", true);

      this.$store.dispatch("changeNumberNonActiveClients", index);

      this.$store.dispatch("changeClientsSummary", index);

      this.$store.dispatch("changeNumberActiveClients", index);

      let temp = {
        activeGym: this.gyms.find((i) => i.gym_id === index),
        id: index,
      };
      this.$store.dispatch("changeActiveGym", temp);

      this.$router.push("./dashboard/" + index);
      this.nextPage = "dashboard";
    },
    //...mapActions(["LogOut"]),
    ...mapActions(["userLogout"]),
    logout() {
      this.userLogout();
      ///this.$router.push("/login");
    },
  },
};
</script>
<style></style>
