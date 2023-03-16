<template>

<v-toolbar-items > 

   <v-btn text router  :to="'/dashboard/'+ this.activeGym.id">
                <span>{{ $t("navbar.dashboard") }}</span> <!-- home -->
                <!--<v-icon right> home </v-icon>-->
             </v-btn>
             <v-btn text router :to="'/gym/'+ this.activeGym.id">
                <span>{{ $t("navbar.gym") }}</span> <!-- home -->
                <!--<v-icon right> home </v-icon>-->
             </v-btn>
                <!--<v-icon right> home </v-icon>-->
                
          </v-toolbar-items>
        
</template>
<script>


export default {

   data: () => ({
    
      drawer: true,
      navbarMenu : [
        {icon: 'compare', text:"navbar.comparison",route: '/comparison'},
        {icon: 'mdi-sitemap-outline', text:"navbar.manageItems",route: '/manageItems/0'},
        {icon: 'report', text:"navbar.reports",route: '/projects'},
        {icon: 'settings', text:"navbar.settings",route: '/settings'},
      ],
      links :[
        
          {icon: 'leak_add', color: 'red', text:'1', route: '/chart'},
          {icon: 'leak_add', color: 'orange', text:'2', route: '/chartSensor2'},
      ],
      links2 :[
          {icon: 'leak_add', color: 'orange', text:'3', route: '/chartsDisplay3'},
          {icon: 'leak_add', color: 'red', text:'4', route: '/chartsDisplay4'},
          {icon: 'leak_add', color: 'orange', text:'5', route: '/chartsDisplay3'},
          {icon: 'leak_add', color: 'red', text:'6', route: '/chartsDisplay4'},
      ],
     linksMenu :[
       {icon: 'home', text:'Home', route: '/homePage'},
       {icon: 'show_chart', text:'Charts', route: '/chart'},
       {icon: 'supervision', text:'Supervision', route: '/supervision'},
       {icon: 'person', text:'Devices', route: '/devices'},

     ],
     items: [
       {title: 'Pref 1', 
        icon: 'mdi-home-city', 
       },
       { title: 'Pref 2', icon: 'mdi-account' },
     ],
     admins: [
       ['City 1', 'mdi-leak'],
       ['City 2', 'mdi-leak'],
     ],

     itemsCityPref1: [
        {
          action: 'mdi-ticket',
          items: [
            { title: 'Gym 1' },
            { title: 'Gym 2' },
            { title: 'Gym 3' },
          ],
          title: 'City 1',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Gym 4' },
            { title: 'Gym 5' },
            { title: 'Gym 6' },
          ],
          title: 'City 2',
        },
      ],
     
     itemsCityPref2: [
        {
          action: 'mdi-school',
          items: [
            { title: 'Gym 7' },
            { title: 'Gym 8' },
            { title: 'Gym 9' },
          ],
          title: 'City 3',
        },
        {
          action: 'mdi-human-male-female-child',
          items: [
            { title: 'Gym 10' },
          ],
          title: 'City 4',
        },
      ],
     cruds: [
       ['Create', 'mdi-plus-outline'],
       ['Read', 'mdi-file-outline'],
       ['Update', 'mdi-update'],
       ['Delete', 'mdi-delete'],
     ],

     itemsTest: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Attractions',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Dining',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Education',
        },
        {
          action: 'mdi-human-male-female-child',
          items: [{ title: 'List Item' }],
          title: 'Family',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Health',
        },
        {
          action: 'mdi-briefcase',
          items: [{ title: 'List Item' }],
          title: 'Office',
        },
        {
          action: 'mdi-tag',
          items: [{ title: 'List Item' }],
          title: 'Promotions',
        },
      ],
     
    }),


  mounted() {
  },
    computed: {
    activeGym() {
      return this.$store.state.activeGym;
    },
  },

   methods: {
    display () {
      this.$emit('drawer', this.drawer)
    },


}
}
</script>
<style scoped>
.border {
  border-left: 4px solid grey; /*border-left: 4px solid #0ba518;*/
  }
.fontCustom{
  font-family: "Trebuchet MS"
}
</style>