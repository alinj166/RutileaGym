<template>
  <v-container>
    <div class="text-h5 font-weight-medium">
      {{ $t("gymView.gymInfo.gymInfo") }}
    </div>

    <v-row>
        <template>
        <v-col>
        
          <v-row dense>
            <v-col cols="12">
              <v-card class="pa-2" outlined tile>
                <v-card-title class="text-h5">
                  <v-img
                    width="200"
                    src="https://images.hausples.com.pg/blog/IMG_2621-scaled.jpg"
                  ></v-img>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
            <v-row dense>
              <v-col cols="12">
                  <v-row dense>
                  <v-col>
      <v-card ref="form">
        <v-card-text>
       
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
         
        </v-card-text>
        <v-divider ></v-divider>
        <v-card-actions>
        
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
                    
                  
                </v-row>
              
              </v-col>
              <v-card-actions class="mx-auto">
             
              </v-card-actions>
            </v-row>
        </v-col>
      </template>
    </v-row>
   
  </v-container>
</template>

<script>
import api from "../api";
export default {
  name: "gymInformation",
  data: () => ({
    select: [],
    panel: [false, false, true, true, false],
    disabled: false,
    readonly: false,
    
    cardItems: [
    
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
    comboItems: [
      { text: "Athelic", value: "athelic", id:1 },
      { text: "Pool", value: "pool", id:2 },
      { text: "Bade Pool", value: "bade_pool", id:3 },
      { text: "Studio 1", value: "studio_1", id:4 },
      { text: "Studio 2", value: "studio_2", id:5 },
      { text: "Multipurpose Studio", value: "multipurpose_studio", id:6 },
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
      for (const i in gym) {
        if (gym[i] > 0 && i !== "gym_id" && i !== "gym_density" && i !== "total_memberships" && i !== "gym_area"
        && i !== "x_coord" && i !== "y_coord") {
         this.select.push({ text: i, value: i})
        }
      }
      for (const i in this.cardItems) 
      {this.editedItem.push(this.cardItems[i])
      }
    
    },
    deleteGym(){
      api.delete_gym(this.gym.id)
      this.close();
    },
    changeCombox1(gym) {
  
     this.payload ={
      "gym_label": gym[0].value,
      "address": gym[1].value,
      "numberEmployees": gym[3].value,
   
      }
      this.select.forEach(element => {
        this.payload[element.value]=true
            });
      api.edit_gym(this.gym.id,this.payload)

      this.close();
    },
    changeCardItems(gym) {
      let arr = [];
      for (const i in gym) {
        
        if (gym[i] > 0 && i !== "gym_id" && i !== "gym_density" && i !== "total_memberships" && i !== "gym_area"
        && i !== "x_coord" && i !== "y_coord") {
          arr.push(this.facilities[i]);
        }
      }

      this.cardItems = [
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
    
    },

    save() {
      this.close();
    },
  },
};
</script>
