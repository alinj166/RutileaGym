<template>
  <v-app>

    <Navbar />   <!--v-if='User'-->
    <v-main class="ma-4">
          

      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { mapGetters,  } from "vuex";
export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },
   computed: {
     ...mapGetters({ Posts: "StatePosts", User: "userState" }),
    //  isLoggedIn ()
    //   { return this.$store.getters.loggedIn},
   },
  // data: () => ({
  //   //
  // }),
};
</script>
