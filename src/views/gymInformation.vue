<template>
  <v-container>
    <!--  class="grey lighten-5" -->
    <!-- for cards grid : https://vuetifyjs.com/en/components/subheaders/#menu  -->
    <div class="text-h5 font-weight-medium">
      {{ $t("gymView.gymInfo.gymInfo") }}
    </div>

    <v-row>
      <!--<template v-for="n in 3">
        <v-col :key="n">-->
      <template>
        <v-col>
          <!--<v-card color="white"class="pa-2" outlined tile>-->
          <!--<v-card>-->
          <v-row dense>
            <v-col cols="12">
              <v-card class="pa-2" outlined tile>
                <v-card-title class="text-h5">
                  <v-img
                    width="200"
                    src="https://images.hausples.com.pg/blog/IMG_2621-scaled.jpg"
                  ></v-img>
                </v-card-title>

                <!--<v-card-subtitle> Bar chart </v-card-subtitle>

                    <v-card-actions>
                      <v-btn text> Bar chart </v-btn>
                    </v-card-actions>-->
              </v-card>
            </v-col>
          </v-row>
          <!--</v-card>-->
          <!--</v-card>-->
        </v-col>
        <v-col>
          <!-- <v-card class="pa-2" tile> -->
            <!--<v-btn
                class="float-end"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>-->
            <v-row dense>
              <v-col cols="12">
                <!-- <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in manage"
                :key="i"
                link
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>-->
                <!--<v-card color="white">-->
                <!--<v-card-title class="text-h5"> 974 </v-card-title>-->
                <!-- {{cardItems}} -->
                
                <!-- <v-row
                  v-for="n in editedItem"
                  :key="n.item"
                  class="mb-3"
                  no-gutters
                > -->
                  <!--  v-for="k in cardItems"
                        :key="k.items"-->
                  <!--<v-col>
                    <v-card class="pa-2" outlined tile>
                      {{ n.item }}
                    </v-card>
                  </v-col>-->
                  <v-row dense>
                  <v-col>
      <v-card ref="form">
        <v-card-text>
          <!-- <v-col cols="4">
        <v-subheader>Prefix for dollar currency</v-subheader>
      </v-col> -->
          <v-text-field
            v-model="editedItem[0].value"
            :label="$t('gymView.gymInfo.gymLabel')"
            :placeholder="$t('gymView.gymInfo.gymLabel')"
            readonly
            prepend-icon="mdi-dumbbell"
          ></v-text-field>
          <v-text-field
            ref="address"
            v-model="editedItem[1].value"
           :label="$t('gymView.gymInfo.adress')"
            placeholder="Address"
            readonly
            prepend-icon="mdi-map-marker-outline"
          ></v-text-field>
          <v-combobox
            v-model="select"
            :items="comboItems"                  
            :label="$t('gymView.gymInfo.facilities')"
            multiple
            prepend-icon="mdi-dumbbell"
            small-chips
            readonly
          ></v-combobox>
          <v-text-field
            ref="state"
            v-model="editedItem[3].value"
            :label="$t('gymView.gymInfo.employees')"
            :placeholder="$t('gymView.gymInfo.employees')"
            readonly
            prepend-icon="mdi-account-multiple"
          ></v-text-field>
          <v-text-field
            v-model="editedItem[4].value"
            :label="$t('gymView.gymInfo.startDay')"
            :placeholder="$t('gymView.gymInfo.startDay')"
            readonly
            prepend-icon="mdi-lock-open-outline"
          ></v-text-field>
          <v-text-field
            v-model="editedItem[5].value"
           :label="$t('gymView.gymInfo.clients')"
            :placeholder="$t('gymView.gymInfo.clients')"
            readonly
            prepend-icon="mdi-account-multiple"
          ></v-text-field>
          <!-- <v-autocomplete
            v-model="editedItem[5].value"
            :rules="[() => !!country || 'This field is required']"
            :items="countries"
            label="Country"
            placeholder="Select..."
            required
          ></v-autocomplete> -->
        </v-card-text>
        <v-divider ></v-divider>
        <v-card-actions>
          <!-- <v-btn text>
            Cancel
          </v-btn> -->
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>          
          <v-dialog v-model="dialog" max-width="800px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
            color="primary"
            text
            v-bind="attrs"
            v-on="on"
            @click="changeCombox1(gym)"
          >
          {{$t('gymView.editGym')}}
          </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{$t('gymView.editGymInformation')}} </span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col  cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem[0].value"
                              :label="$t('gymView.gymInfo.gymLabel')"
                            ></v-text-field>
                          </v-col>
                          <v-col  cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem[1].value"
                              :label="$t('gymView.gymInfo.address')"
                            ></v-text-field>
                          </v-col>
                          <v-col  cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem[3].value"
                              :label="$t('gymView.gymInfo.employees')"
                            ></v-text-field>
                          </v-col>
                          <v-col  cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem[4].value"
                              :label="$t('gymView.gymInfo.startDay')">
                            </v-text-field>
                          </v-col>
                          <v-col  cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem[5].value"
                              :label="$t('gymView.gymInfo.clients')" 
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" sm="6" md="6">
                            <v-combobox
                              v-model="select"
                              :items="comboItems" 
                              :label="$t('gymView.gymInfo.facilities')"     
                                                        multiple
                              prepend-icon="mdi-dumbbell"
                              
                            ></v-combobox>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        {{$t('gymView.cancel')}}
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="changeCombox1(editedItem)">
                        {{$t('gymView.save')}}
                        
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="800px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
            color="primary"
            text
            v-bind="attrs"
            v-on="on"
            
          >
          {{$t('gymView.deleteGym')}}
          </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{$t('gymView.deleteGym')}}</span>
                    </v-card-title>

                    <v-card-text>
                      {{$t('gymView.deleteGymDialog')}}
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        {{$t('gymView.cancel')}}
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="deleteGym()">
                        {{$t('gymView.save')}}
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
                    <!-- <v-expansion-panels>
                      <v-expansion-panel v-model="panel"
                        ><v-expansion-panel-header>
                          {{ $t(n.item) }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          {{ n.value }}
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels> -->
                    <!--<v-card class="pa-2" outlined tile>
                      {{ n.value }}
                    </v-card>-->
                  
                </v-row>
                <!--<v-card-subtitle>Total Clients</v-card-subtitle>-->
                <!--</v-card>-->
              </v-col>
              <v-card-actions class="mx-auto">
                

                <!-- <v-dialog v-model="dialogDelete" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="ml-16 red" v-bind="attrs" v-on="on">
                      <v-icon right> mdi-close </v-icon>
                      Delete Gym
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this gym?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog> -->
              </v-card-actions>
            </v-row>
          <!-- </v-card> -->
        </v-col>
      </template>
    </v-row>
    <!--<v-row
                  v-for="n in cardItems"
                  :key="n.item"
                  class="mb-3"
                  no-gutters
                >
                    v-for="k in cardItems"
                        :key="k.items"
                  <v-col>
                    <v-card class="pa-2" outlined tile>
                      {{ n.item }}
                    </v-card>
                  </v-col>
                  <v-card>
        <v-layout row wrap class="pa-3">
          <v-flex>
            <div class="caption grey--text">{{$t(n.item)}}</div>
            <div>{{ n.value }}</div>
          </v-flex>
          </v-layout>
          </v-card>
          </v-row>-->
  </v-container>
</template>

<script>
import api from "../api";
export default {
  name: "gymInformation",
  data: () => ({
    //select: [],
    select: [],
    panel: [false, false, true, true, false],
    disabled: false,
    readonly: false,
    
    cardItems: [
      /*'gymLabel',
        '男性', */
      { item: "gymView.gymInfo.gymLabel", value: "男性" },
      { item: "gymView.gymInfo.address", value: "Street City" },
      { item: "gymView.gymInfo.facilities", value: "Equipements, Piscine" },
      { item: "employees", value: "30" },
      { item: "gymView.gymInfo.startDay", value: "1st June 2021" },
      { item: "gymView.gymInfo.clients", value: "974" },
    ],
    facilities: {
      athelic: "Athelic",
      pool: " Pool",
      bade_pool: " Bade pool",
      studio_1: " Studio 1",
      studio_2: " Studio 2",
      multipurpose_studio: " Multipurpose studio",
      jacuzzi: " Jacuzzi",
      massage: " Massage",
      outside_air_bath_jacuzzi: " Outside air bath jacuzzi",
      sleeping_bath: " Sleeping bath",
      utase_hot_water: " Utase hot water",
      steam_sauna: " Steam sauna",
      mist_sauna: " Mist sauna",
      dry_sauna: " Dry sauna",
      shower_booth: " Shower booth",
      bathtub: " Bathtub",
      water_bath: " Water bath",
      open_air_bath: " Open air bath",
      mutlipupose_court: " Mutlipupose court",
      tennis_court: " Tennis court",
      golf_range: " Golf range",
      squash_coat: " Squash coat",
      massage_chair: " Massage chair",
    },
    // items: [
    //   "athelic",
    //   "pool",
    //   "bade_pool",
    //   "studio_1",
    //   "studio_2",
    //   "multipurpose_studio",
    //   "multipurpose_studio",
    //   "jacuzzi",
    //   "massage",
    //   "outside_air_bath_jacuzzi",
    //   "sleeping_bath",
    //   "utase_hot_water",
    //   "steam_sauna",
    //   "mist_sauna",
    //   "dry_sauna",
    //   "shower_booth",
    //   "water_bath",
    //   "open_air_bath",
    //   "mutlipupose_court",
    //   "tennis_court",
    //   "golf_range",
    //   "squash_coat",
    //   "massage_chair",
    // ],
    comboItems: [
      { text: "Athelic", value: "athelic", id:1 },
      { text: "Pool", value: "pool", id:2 },
      { text: "Bade Pool", value: "bade_pool", id:3 },
      { text: "Studio 1", value: "studio_1", id:4 },
      { text: "Studio 2", value: "studio_2", id:5 },
      { text: "Multipurpose Studio", value: "multipurpose_studio", id:6 },
      // { text: "Multipurpose Studio", value: "multipurpose_studio" },
      { text: "Jacuzzi", value: "jacuzzi", id:7 },
      { text: "Massage", value: "massage", id:8 },
      { text: "Outside Air", value: "outside_air_bath_jacuzzi", id:9 },
      { text: "Sleeping Bath", value: "sleeping_bath", id:10 },
      { text: "Utase Hot", value: "utase_hot_water", id:11 },
      { text: "Steam Sauna", value: "steam_sauna", id:12 },
      { text: "Mist Sauna", value: "mist_sauna", id:13 },
      { text: "Dry Sauna", value: "dry_sauna", id:14 },
      { text: "Shower Booth", value: "shower_booth", id:15 },
      { text: "Bath Tub", value: "bathtub", id:16 },
      { text: "Water Bath", value: "water_bath", id:17 },
      { text: "Open Air", value: "open_air_bath", id:18 },
      { text: "Mutlipupose Court", value: "mutlipupose_court", id:19 },
      { text: "Tennis Court", value: "tennis_court", id:20 },
      { text: "Golf Range", value: "golf_range", id:21 },
      { text: "Squash Coat", value: "squash_coat", id:22 },
      { text: "Massage Chair", value: "massage_chair", id:23 },
   ],

    manage: [{ title: "Edit", router: "/Edit" }, { title: "Delete" }],
    editedItem: [],
    // editedItem: [
    //   { item: "gymView.gymInfo.gymLabel", value: "" },
    //   { item: "gymView.gymInfo.address", value: "" },
    //   { item: "gymView.gymInfo.facilities", value: "" },
    //   { item: "employees", value: "" },
    //   { item: "gymView.gymInfo.startDay", value: "" },
    //   { item: "gymView.gymInfo.clients", value: "" },
    // ],
    editedIndex: -1,
    dialog: false,
    dialogDelete: false,
    payload: {},
    toggleDisable: true,
  }),

  computed: {
    gym() {
      return this.$store.state.activeGym;
    },
    changeClientsSummary() {
      this.changeCardItems(this.$store.state.clientsSummary);
      return this.$store.state.clientsSummary;
    },
    // changeCardItems1(){
    //   return this.cardItems;
    // }
  },

  created() {
    this.changeCardItems(this.changeClientsSummary);
    this.changeCombox(this.changeClientsSummary)
  },

  watch: {
    "$store.state.clientsSummary": function () {
      this.changeCardItems(this.$store.state.clientsSummary);
    },
    gym() {
      return this.$store.state.activeGym;
    },
    dialog(val) {
      val || this.close();
    },
    
    dialogDelete(val) {
      val || this.close();
    },
    
  },
  methods: {

    changeCombox(gym) {
      console.log("changeComobox method")
      //console.log("changeComobox method", gym)
      //console.log("changeComobox method", gym.gym_id)
      console.log("this.select edit", this.select)
      //let arr = [];
      for (const i in gym) {
        if (gym[i] > 0 && i !== "gym_id" && i !== "gym_density" && i !== "total_memberships" && i !== "gym_area"
        && i !== "x_coord" && i !== "y_coord") {
         this.select.push({ text: i, value: i})
        }
      }
      console.log("before for", this.editedItem)
      for (const i in this.cardItems) 
      {this.editedItem.push(this.cardItems[i])
      }
      console.log("after for", this.editedItem)

      //console.log("changeCardItems(gym)", this.changeCardItems(gym))
      // let payload={}
      // this.select.forEach(element => {
      //   payload[element.value]=true
      // });
      
      // payload["x_coord"]=2.2558413
      // payload["y_coord"]=2.2558413
      // payload["gym_label"]="lllllllllll"
      // payload["address"]="adddddrrrrrrrrrrreeeeeeeeeeeessssss"
      // payload["numberEmployees"]=40
      //console.log("🚀 ~ file: manageGyms.vue ~ line 259 ~ submit ~ payload", payload)

   
      //api.create_new_gym(payload)
      //api.edit_gym(43,payload)
    },
    deleteGym(){
      api.delete_gym(this.gym.id)
      // api.delete_gym(this.gym.id)
      this.close();
    },
    changeCombox1(gym) {
      console.log("changeComobox method")
      console.log("changeComobox method", this.gym)
      console.log("changeComobox method", this.gym.id)
      console.log("this.select edit", this.select)
      //let arr = [];
      /*for (const i in gym) {
        if (gym[i] > 0 && i !== "gym_id" && i !== "gym_density" && i !== "total_memberships" && i !== "gym_area"
        && i !== "x_coord" && i !== "y_coord") {
         this.select.push(i)
        }
      }*/

     this.payload ={

      //"x_coord": gym[0].value,
      //"y_coord":gym[0].value,
      "gym_label": gym[0].value,
      "address": gym[1].value,

      "numberEmployees": gym[3].value,
      //"opensAt": gym[4].value,
      //"closesAt": gym[5].value
      }
      this.select.forEach(element => {
        this.payload[element.value]=true
            });
      console.log("🚀 ~ file: gymInformation.vue ~ line 478 ~ changeCombox1 ~ gym[5].value", gym[5].value)
      /*let str =gym[2].value.split(",")
      console.log(str)
      str.map((item)=>{
      this.payload[item]=true
      })*/
      console.log(this.payload)
      //console.log("changeCardItems(gym)", this.changeCardItems(gym))
      // let payload={}
      // this.select.forEach(element => {
      //   payload[element.value]=true
      // });
      
      // payload["x_coord"]=2.2558413
      // payload["y_coord"]=2.2558413
      // payload["gym_label"]="lllllllllll"
      // payload["address"]="adddddrrrrrrrrrrreeeeeeeeeeeessssss"
      // payload["numberEmployees"]=40
      //console.log("🚀 ~ file: manageGyms.vue ~ line 259 ~ submit ~ payload", payload)

   
      //api.create_new_gym(payload)
      //api.edit_gym(43,payload)
      console.log("this.cardItems", this.cardItems)
      api.edit_gym(this.gym.id,this.payload)
      //this.changeCardItems(gym)
      //console.log(gym[10])
      this.close();
    },
    changeCardItems(gym) {
      console.log(
        "🚀 ~ file: gymInformation.vue ~ line 154 ~ changeCardItems ~ gym",
        gym
      );
      //let extract = ["gym_id", "gym_density", "total_memberships", "gym_area", "x_coords", "y_coords"]
      let arr = [];
      console.log(this.dialog)
      for (const i in gym) {
        
        if (gym[i] > 0 && i !== "gym_id" && i !== "gym_density" && i !== "total_memberships" && i !== "gym_area"
        && i !== "x_coord" && i !== "y_coord") {
        //if (gym[i] > 0 && i !== extract[i]) {
          arr.push(this.facilities[i]);
        }
      }
      console.log(
        "🚀 ~ file: gymInformation.vue ~ line 122 ~ created ~ arr",
        arr
      );
      console.log("this.select", this.select)
      this.cardItems = [
        /*'gymLabel',
        '男性', */
        { item: "gymView.gymInfo.gymLabel", value: gym["gym_label"] },
        { item: "gymView.gymInfo.address", value: gym["address"] },
        { item: "gymView.gymInfo.facilities", value: arr.join() },
        { item: "gymView.gymInfo.employees", value: "30" },
        { item: "gymView.gymInfo.startDay", value: "1st June 2021" },
        { item: "gymView.gymInfo.clients", value: this.gym.activeGym.count },
      ];
    },

    editItem(item) {
      this.editedIndex = this.editedItem.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      
    },

    close() {
      this.dialog = false;
      this.dialogDelete = false
      // this.$nextTick(() => {
      //   this.cardItems = Object.assign({}, this.defaultItem);
      //   this.editedIndex = -1;
      // });
    },

    save() {
      // if (this.editedIndex > -1) {
      //   Object.assign(this.cardItems[this.editedIndex], this.cardItems);
      // } else {
      //   this.desserts.push(this.cardItems);
      // }

      //api.edit_gym(43,this.paylaod)
      console.log("this.cardItems", this.cardItems)
      // this.cardItems = [
      //   /*'gymLabel',
      //   '男性', */
      //   { item: "gymView.gymInfo.gymLabel", value: this.payload["gym_label"] },
      //   { item: "gymView.gymInfo.address", value: this.payload["address"] },
      //   { item: "gymView.gymInfo.facilities", value: this.select },
      //   { item: "gymView.gymInfo.employees", value: this.payload["numberEmployees"] },
      //   { item: "gymView.gymInfo.startDay", value: "1st June 2021" },
      //   { item: "gymView.gymInfo.clients", value: this.gym.activeGym.count },
      // ];
      //this.cardItems.push(this.editedItem)
      console.log("this.select edit", this.select)
      this.close();
    },
  },
};
</script>
