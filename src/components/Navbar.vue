<template>
  <nav >
    <!--<v-app-bar  color="#fafafa" light app >-->
    <v-app-bar color="header" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        
      </v-toolbar-title>

      <NavbarUpper v-show="stateNavBar" > </NavbarUpper>

      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      class="darken-4"
      color="#0a1115"
    >
    
      <!--#0a1115  #04042e-->
      <template v-slot:prepend>
        <v-layout column align-center>
          <v-row>
          <v-col>
          <v-flex  >
            <v-img 
              v-if=" isDark===false"
              src="../assets/SharvilLogoV4.jpeg"
              max-height="50"
              max-width="100">
            </v-img>
              <v-img 
              v-if=" isDark===true"
              src="../assets/SharvilLogoV4.jpeg"
              max-height="50"
              max-width="100">
            </v-img>
          </v-flex>
        </v-col>
        <v-col>
          <v-flex   class="mt-3">
            
              <button @click="clickMethod">
                
            <p class="white--text subheading mt-1 text-center">{{$t("navbar.fintessClub")}}</p></button>
          </v-flex>
        </v-col>
      </v-row>
        </v-layout>
      </template>

      <div class="pa-2">
        <v-spacer></v-spacer>
        <div><v-divider></v-divider></div>
        <v-list-item
          v-for="(item, index) in gyms"
          @click="displayMenu(item.gym_id)"
          :key="index"
          router
          :to="'/dashboard/' + item.gym_id"
          active-class="border"
        >
          <v-list-item-action>
            <v-list-item-icon>
              <v-icon>mdi-city-variant-outline</v-icon>
            </v-list-item-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.gym_label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

     
      <template v-slot:append>
        <div class="pa-2">
          <v-spacer></v-spacer>
          <div><v-divider></v-divider></div>
          <v-list-item
            @click="displayMenu"
            v-for="link in navbarMenu"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t(link.text) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>
<script>

import NavbarUpper from "./NavbarUpper.vue";
import api from "../api";
export default {


  data: () => ({
    gyms: null,
    temp:{},
    drawer: true,
    isVisible: false,
    navbarMenu: [
      { icon: "compare", text: "navbar.comparison", route: "/comparison" },
      {
        icon: "mdi-sitemap-outline",
        text: "navbar.manageItems",
        route: "/manageGyms",
      },
      { icon: "settings", text: "navbar.settings", route: "/settings" },
    ],
    links: [
     
      { icon: "leak_add", color: "red", text: "1", route: "/chart" },
      { icon: "leak_add", color: "orange", text: "2", route: "/chartSensor2" },
    ],
    links2: [
      {
        icon: "leak_add",
        color: "orange",
        text: "3",
        route: "/chartsDisplay3",
      },
      { icon: "leak_add", color: "red", text: "4", route: "/chartsDisplay4" },
      {
        icon: "leak_add",
        color: "orange",
        text: "5",
        route: "/chartsDisplay3",
      },
      { icon: "leak_add", color: "red", text: "6", route: "/chartsDisplay4" },
    ],
    linksMenu: [
      { icon: "home", text: "Home", route: "/homePage" },
      { icon: "show_chart", text: "Charts", route: "/chart" },
      { icon: "supervision", text: "Supervision", route: "/supervision" },
      { icon: "person", text: "Devices", route: "/devices" },

    ],
    items: [
      { title: "Pref 1", icon: "mdi-home-city" },
      { title: "Pref 2", icon: "mdi-account" },
    ],
    admins: [
      ["City 1", "mdi-leak"],
      ["City 2", "mdi-leak"],
    ],

    itemsCityPref1: [
      {
        action: "mdi-ticket",
        items: [
          { title: "Gym 1", route: "/gym/1" },
          { title: "Gym 2", route: "/gym/2" },
          { title: "Gym 3", route: "/gym/3" },
        ],
        title: "City 1",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Gym 4", route: "/gym/4" },
          { title: "Gym 5", route: "/gym/5" },
          { title: "Gym 6", route: "/gym/6" },
        ],
        title: "City 2",
      },
    ],

    itemsCityPref2: [
      {
        action: "mdi-school",
        items: [
          { title: "Gym 7", route: "/gym/7" },
          { title: "Gym 8", route: "/gym/8" },
          { title: "Gym 9", route: "/gym/9" },
        ],
        title: "City 3",
      },
      {
        action: "mdi-human-male-female-child",
        items: [{ title: "Gym 10", route: "/gym/10" }],
        title: "City 4",
      },
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],

    itemsTest: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Education",
      },
      {
        action: "mdi-human-male-female-child",
        items: [{ title: "List Item" }],
        title: "Family",
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [{ title: "List Item" }],
        title: "Health",
      },
      {
        action: "mdi-briefcase",
        items: [{ title: "List Item" }],
        title: "Office",
      },
      {
        action: "mdi-tag",
        items: [{ title: "List Item" }],
        title: "Promotions",
      },
    ],
  }),
  components: {
    NavbarUpper,

  },

mounted(){
},
  computed: {
    gym() {
      return this.$store.state.activeGym;
    },
    isDark(){
      return this.$vuetify.theme.isDark ;
    },
    stateNavBar() {
      return this.$store.state.stateNavBar;
    },

  },
  async created() {
    let gyms = await api.numberClinetsPerGym();
    this.gyms = gyms.data;
  },

  methods: {
        clickMethod() {
          this.$router.push("/")

          if (this.$route.name !== "dashboard") {
        this.isVisible = false;
        this.$store.dispatch("changeStateNavBar", false);
      
      } else {
     this.isVisible = true;
        this.$store.dispatch("changeStateNavBar", true);

      }

  },
  
    displayMenu(index) {
      this.url_data = this.$route.params.id;
      if (this.url_data === undefined) {
        this.isVisible = false;
        this.$store.dispatch("changeStateNavBar", false);
      
      } else {
     this.isVisible = true;
        this.$store.dispatch("changeStateNavBar", true);
        this.$store.dispatch("changeNumberNonActiveClients", index);
        this.$store.dispatch("changeClientsSummary", index);
        this.$store.dispatch("changeNumberActiveClients", index);
         this.temp = {
          activeGym: this.gyms.find((i) => i.gym_id === index),
          id: index,
        };
        this.$store.dispatch("changeActiveGym", this.temp);
      }
    },
   
  },
};
</script>
<style scoped>
.border {
  border-left: 4px solid grey; /*border-left: 4px solid #0ba518;*/
}
.fontCustom {
  font-family: "Trebuchet MS";
}
</style>
