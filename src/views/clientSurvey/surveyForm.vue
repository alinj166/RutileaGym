<template>
    <v-container fluid>
      <!-- fill-height -->
      <h1 class="mb-4"> {{ $t("surveyForm.ClientSurvey") }}</h1>
      <!-- <h1 class="mb-4">{{ $t("manageItems.addGym.manageGyms") }}</h1> -->
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          <!-- <v-row> -->
            <!-- <v-col cols="12"> -->
              <v-card class="elevation-12">
                <v-layout justify-center>
                  <span
                    style="font-size: 30px"
                    class="my-4 text--lighten-5 text-center"
                  >
                  {{ $t("surveyForm.userExperience") }}
                    <!-- {{ $t("manageItems.addGym.addNewGym") }} -->
          
                  </span>
                </v-layout>
                <v-card-text>
                  <v-form ref="entryForm" @submit.prevent="submit"> <!-- v-model="dialog" @submit.prevent="submit"-->
                    <v-row>
                    <v-col
                    cols="6"
                    md="6">
                    <v-text-field
                      prepend-icon="mdi-dumbbell"
                      name="membershipID"
                      :label="$t('dashboardView.logDisplay.membershipID')"
                      type="text"
                      v-model="userCardActiveRowTableCRQ.membership_id"
                      :rules="[rules.required]"
                      v-on:click="createStatus = false"
                      disabled
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="6"
                    md="6">
                    <v-text-field
                      prepend-icon="mdi-dumbbell"
                      name="clientEmail"
                      :label="$t('surveyForm.emailUser')"
                      type="text"
                      v-model="form.clientEmail"
                      :rules="[rules.required]"
                      v-on:click="createStatus = false"
                      disabled
                    ></v-text-field>
                    </v-col>
                </v-row>
                    <v-row>
                        <v-col
                    cols="6"
                    md="6">
                    <v-text-field
                      prepend-icon="mdi-dumbbell"
                      name="username"
                      :label="$t('surveyForm.username')"
                      type="text"
                      v-model="form.username"
                      :rules="[rules.required]"
                      v-on:click="createStatus = false"
                    ></v-text-field>
               </v-col>
               <v-col
                    cols="6"
                    md="6">
                    <v-text-field
                      prepend-icon="mdi-dumbbell"
                      name="userEmail"
                      :label="$t('surveyForm.emailAdmin')"
                      type="text"
                      v-model="form.userEmail"
                      :rules="[rules.required]"
                      v-on:click="createStatus = false"
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-col cols="12">
                    <v-textarea
                    v-model="form.bio"
                    color="teal"
                    >
                    <template v-slot:label>
                        <div>
                          {{  $t('surveyForm.note')}}
                        </div>
                    </template>
                    </v-textarea>
                </v-col>
                    <v-combobox
                      v-model="facilities"
                      :items="items"
                      :label="$t('surveyForm.facilitiesMaintenance')"
                      multiple
                      prepend-icon="mdi-dumbbell"
                      
                    ></v-combobox>
                    <!-- :rules="[rules.required]" -->
                <!-- :label="`Checkbox 1: ${checkbox1.toString()}`" 
                :label="`Checkbox 2: ${checkbox2.toString()}`"-->
                    <v-checkbox
                        v-model="surveyCheckbox"
                        :label="$t('surveyForm.clientContact')"
                        value=1
                        ></v-checkbox>
                        <v-checkbox
                        v-model="surveyCheckbox"
                        :label="$t('surveyForm.meeting')"
                        value=2
                        ></v-checkbox>
                        <v-checkbox
                        v-model="surveyCheckbox"
                        :label="$t('surveyForm.offer')"
                        value=3
                        ></v-checkbox>
                        <v-checkbox
                        v-model="surveyCheckbox"
                        :label="$t('surveyForm.surveySent')"
                        value=4
                        ></v-checkbox>
  
                    <!-- <v-dialog v-model="dialog">
                      <v-lazy>
                        <CreateGymsMap
                          :markers="markers"
                          @update-marker="updateMarker($event, markers)"
                        />
                      </v-lazy>
                    </v-dialog> -->
                    <v-row>
                      <v-col cols="6">
                        <v-dialog v-model="dialog" max-width="800px">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn block color="primary" 
                              v-bind="attrs"
                              v-on="on">{{
                              $t("manageItems.submit")
                            }}</v-btn>
                            </template>
                              <v-card>
                                <v-card-title>
                                  <span class="text-h5"> Submit Survey </span>
                                </v-card-title>

                                <v-card-text>
                                  Are you sure, you want to submit this survey ?
                                </v-card-text>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn color="blue darken-1" text @click="dialog = false">
                                    Cancel
                                  </v-btn>
                                  <v-btn color="blue darken-1" type="submit" text @click="submit()">
                                    Save
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                          </v-dialog>
                      </v-col>
                      <v-col cols="6">
                        <v-btn block color="grey" @click="clear">{{
                          $t("manageItems.clear")
                        }}</v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            <!-- </v-col> -->
            <!-- <v-col cols="6">
              <fileUpload />
            </v-col> -->
          <!-- </v-row> -->
        </v-flex>
      </v-layout>
  
      <div>
        <v-alert :value="createStatus" :type="createType">
          <span> {{ createSuccessMsg }} <br /> </span>
        </v-alert>
      </div>
      <v-overlay :value="loading">
        <v-progress-circular :size="70" :width="7" color="purple" indeterminate>
        </v-progress-circular>
      </v-overlay>
      <!-- <template>
        <v-data-table
          :headers="headers"
          :items="testClaims"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </template> -->
      <h1 class="my-8">{{$t('surveyForm.SurveyHistory')}}</h1>
      <v-card
        flat
        class="mb-3 px-4 elevation-12">
        <v-layout row wrap>
      <v-flex xs4 sm4 md1>
        <!-- caption -->
            <div class=" grey--text">{{$t('surveyForm.membershipID')}}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="grey--text">{{$t('surveyForm.email')}}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="grey--text">{{$t('surveyForm.note')}}</div>
          </v-flex>
          <!-- <v-flex xs4 sm4 md1  >
            <div class="caption black--text">{{$t('surveyForm.claim')}}</div>
          </v-flex> -->
          <v-flex  xs4 sm4 md2 >
            <div class="grey--text">
              {{$t('surveyForm.facilitiesMaintenance')}}</div>
            
          </v-flex>
          <v-flex  xs4 sm4 md3 >
            <div class="grey--text">
              {{$t('surveyForm.retention')}}</div>
            
          </v-flex>
          <v-flex  xs4 sm4 md2 >
            <div class="grey--text">
              {{$t('surveyForm.claimDate')}}</div>
          </v-flex>
        </v-layout>
        </v-card>
      <v-card
        flat
        v-for="(claim, i) in testClaims"
        :key="i"
        class="mb-4 px-4 elevation-1"
      >
      <!-- <v-divider class="mx-8"></v-divider> -->
      <!-- <v-card
        flat
        class="mb-1 px-4 elevation-12"> -->
      
        <v-layout row wrap >   <!--:class="`pa-3 project ${claim.id_claim}`"-->
          <!-- <v-flex xs12 md2>
            <div class="caption grey--text">{{$t('dashboardView.logDisplay.membershipID')}}</div>
            <div>{{ userCardActiveRowTableCRQ.membership_id }}</div>
          </v-flex> -->
          <v-flex xs4 sm4 md1>
            <!-- <div class="caption grey--text">{{$t('surveyForm.client_id')}}</div> -->
            <div>{{ userCardActiveRowTableCRQ.membership_id}}</div>
          </v-flex>
          <!-- <v-divider vertical class="my-4"></v-divider> -->
          <v-flex xs4 sm4 md2>
            <!-- <div class="caption grey--text">{{$t('surveyForm.email')}}</div> -->
            <div>{{ claim.admin_email}}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <!-- <div class="caption grey--text">{{$t('surveyForm.note')}}</div> -->
            <div>{{ claim.claim_text }}</div>
          </v-flex>
          <!-- <v-flex xs4 sm4 md1>
            <div class="caption grey--text">{{$t('surveyForm.claim')}}</div> 
            <div>{{ claim.id_claim}}</div>
          </v-flex>-->
          <v-flex  xs4 sm4 md2 >
            <!-- <div class="caption grey--text">
              {{$t('surveyForm.facilitiesMaintenance')}}</div> -->
            <div v-for="(facility, i) in claim.id_facility" :key="i" >{{ dict[facility] +',' }}</div>
          </v-flex>
          <v-flex  xs4 sm4 md3 >
            <!-- <div class="caption grey--text">
              {{$t('surveyForm.retention')}}</div> -->
            <div  v-for="(id_retention, i) in claim.id_retention" :key="i" >{{ surveyCheckboxdict[id_retention] +',' }}</div>
          </v-flex>
          <!-- style="display: inline" -->
          <v-flex  xs4 sm4 md2 >
            <!-- <div class="caption grey--text">
              {{$t('surveyForm.claimDate')}}</div> -->
              <div>{{ claim.claim_date.split('T')[0]}}</div>
              <div>{{ claim.claim_date.split('T')[1].split(".")[0]}}</div>
          </v-flex>
          <!-- <v-flex xs6 sm1 md1>
            <div class="caption grey--text">{{$t('surveyForm.clientContact')}}</div>
            <div><v-icon> mdi-download-outline </v-icon></div>
          </v-flex>
          <v-flex xs6 sm1 md1>
            <div class="caption grey--text">{{$t('surveyForm.meeting')}}</div>
            <div><v-icon> mdi-trash-can-outline </v-icon></div>
          </v-flex>
          <v-flex xs6 sm1 md1>
            <div class="caption grey--text">{{$t('surveyForm.offer')}}</div>
            <div><v-icon> mdi-trash-can-outline </v-icon></div>
          </v-flex>
          <v-flex xs6 sm1 md1>
            <div class="caption grey--text">{{$t('surveyForm.surveySent')}}</div>
            <div><v-icon> mdi-trash-can-outline </v-icon></div>
          </v-flex> -->
          <!-- <v-divider class="mx-6"></v-divider> -->
        </v-layout>
      </v-card>
    </v-container>
  </template>
  
  <script>
  ///                     v-on:click="dialog = true"
  import { validationMixin } from "vuelidate";
  import { required, maxLength, email } from "vuelidate/lib/validators";
  //import fileUpload from "../fileUpload/fileUpload";
  //import CreateGymsMap from "../../components/createGymsMap.vue";
  import api from "../../api";
  //import { mapState } from 'vuex'
  //import { Axios } from '../axios-api'
  // let test = {"id_claim":[], "client_id":[],"claim_text":[],"member_email":[], "admin_name":[],
  //            "Claims_has_Facilites":[], "Claims_has_Retention_Action":[]}

  export default {
    mixins: [validationMixin],
  
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked(val) {
          return val;
        },
      },
    },
    name: "manageGyms",
    components: {}, // CreateGymsMap }, //fileUpload,
    data: () => ({
      dialog: false,
      fileUpload: [],
      // testClaims : {"id_claim":[], "client_id":[],"claim_text":[],"member_email":[], "admin_name":[],
      //        "Claims_has_Facilites":[], "Claims_has_Retention_Action":[]},
      testClaims : [],
      test: [],
      createStatus: false,
      createSuccessMsg: "",
      createType: undefined,
      form: {
        membership_id: "",
        clientEmail: "example@gmail.com",
        username: "",
        bio: "",
        userEmail:"",
        checkbox1: true,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
      },
      facilities:[],
      surveyCheckbox:[],
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        isNumber: (value) => Number.isInteger(Number(value)) || "is not number",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail. ";
        },
        MaskCorrdination:(str)=>{
          if(str.indexOf("welcome")){
        if (parseFloat (str.split(",")[0])===undefined||
        parseFloat(str.split(",")[1])===undefined)
        return "corr"
          }else return "corr"
          
        }
      },
      select: ["Vuetify", "Programming"],
      /*items: ["athelic", "pool", "bade_pool",
      "studio_1","studio_2","multipurpose_studio",
      "multipurpose_studio","jacuzzi","massage",
      "outside_air_bath_jacuzzi","sleeping_bath",
      "utase_hot_water","steam_sauna","mist_sauna",
      "dry_sauna","shower_booth","water_bath","open_air_bath","mutlipupose_court"
      ,"tennis_court","golf_range","squash_coat","massage_chair"
      ],*/
      /*surveyCheckbox: [
      { text: "client first contact", value: "client_first_contact", id:1 },
      { text: "client act", value: "one_to_one_meeting", id:2 },
      { text: "client first contact", value: "a_special_offer_made_to_the_client", id:3 },
      { text: "client first contact", value: "client_satisfaction_survey_sent", id:4 },
    ],*/
    surveyCheckboxdict:{ "1": "client's first contact",
      "2": "One to one meeting",
      "3": "Special offer made to the client",
      "4": "client satisfaction survey sent",
    },
    dict: {
            "1":"Athelic",
            "2":"Pool",
            "3":"Bade Pool",
            "4":"Studio 1",
            "5":"Studio 2",
            "6":"Multipurpose Studio",
            "7":"Jacuzzi",
            "8":"Massage",
            "9":"Outside Air",
            "10":"Sleeping Bath",
            "11":"Utase Hot",
            "12":"Steam Sauna",
            "13":"Mist Sauna",
            "14":"Dry Sauna",
            "15":"Shower Booth",
            "16":"Bath Tub",
            "17":"Water Bath",
            "18":"Open Air",
            "19":"Mutlipupose Court",
            "20":"Tennis Court",
            "21":"Golf Range",
            "22":"Squash Coat",
            "23":"Massage Chair",

            } , 
      items: [
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
      markers: [],
      testClaimsHasFaci: [],
      coords: null,
      showError: false,
    }),
    mounted() {
      setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 250);
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
      userCardActiveRowTableCRQ(){
        return  this.$store.state.userCardActiveRowTableCRQ
      },
      checkboxErrors() {
        const errors = [];
        if (!this.$v.checkbox.$dirty) return errors;
        !this.$v.checkbox.checked && errors.push("You must agree to continue!");
        return errors;
      },
      selectErrors() {
        const errors = [];
        if (!this.$v.select.$dirty) return errors;
        !this.$v.select.required && errors.push("Item is required");
        return errors;
      },
      nameErrors() {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength &&
          errors.push("Name must be at most 10 characters long");
        !this.$v.name.required && errors.push("Name is required.");
        return errors;
      },
      emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push("Must be valid e-mail");
        !this.$v.email.required && errors.push("E-mail is required");
        return errors;
      },
      //...mapState(['APIDataset', 'APIData']),

      headers() {
      return [
        {
          text: this.$t("surveyForm.client_id"),
          align: "start",
          sortable: false,
          value: "client_id",
          width: "20%",
          color: "blue",
        },
        {
          text: this.$t("dashboardView.logDisplay.currentAge"),
          value: "admin_name",
          width: "15%",
        },
        {
          text: this.$t("surveyForm.claim"),
          value: "claim_text",
          width: "15%",
        },
        {
          text: this.$t("surveyForm.note"),
          value: "id_claim",
          width: "20%",
        },
        {
          text: this.$t("dashboardView.logDisplay.DateEnrollment"),
          value: "id_retention", //this.surveyCheckboxdict["id_retention"], //"id_retention",
          width: "30%",
        },
        {
          text: this.$t("surveyForm.facilitiesMaintenance"),
          value: "id_facility",
          width: "30%",
        },
        {
          text: this.$t("surveyForm.facilitiesMaintenance"),
          value: "claim_date",
          width: "30%",
        },
        // { text: 'Actions', value: 'actions', sortable: false },
        /*{ text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },*/
      ];
    },
    },
    created() {
      this.markers = [];
      this.$store.dispatch("changeLoading", false);
      this.getReportsData()
    },
    watch: {
    dialog(val) {
      val || this.close();
    },
    
  },
    methods: {
      submit() {
        this.$store.dispatch("changeLoading", true);
  
        let self = this;
        self.$refs.entryForm.validate();
        
        if (self.$refs.entryForm.validate()) {
          let payload = {};
          this.dialog = true;
          let facTest = [];
          let surveyTest = [];
          this.facilities.forEach(element => {
            facTest.push(element.id)
          });
          payload["facilities_list"] = facTest
          this.surveyCheckbox.forEach(element => {
            surveyTest.push(Number(element))
          });
          payload["actions_list"] = surveyTest
  
          //payload["facilities_list"] = [1,2,3],
          //payload["actions_list"] = [5,6],
          payload["admin_name"] = this.form.username, // "salah",
          payload["claim_text"] = this.form.bio, //"yes",
          payload["member_email"] = this.form.clientEmail, // "zzz@gmail.com" ,
          payload["admin_email"] = this.form.userEmail, // "eee@gmail.com"

  
          api
            .add_claim(this.userCardActiveRowTableCRQ.client_id, payload)
            .then(() => {
              this.$store.dispatch("changeLoading", false);
  
              this.createStatus = true;
              this.createType = "success";
              this.createSuccessMsg = "Report generated successfully";
              setTimeout(() => {
                this.createStatus = false;
              }, 4000);
              this.getReportsData()
            })
            .catch((e) => {
              this.createStatus = true;
              this.createSuccessMsg = e.message;
              this.createType = "error";
  
              this.$store.dispatch("changeLoading", false);
              setTimeout(() => {
                this.createStatus = false;
              }, 4000);
            });
            
        } else {
          this.createStatus = true;
  
          this.createSuccessMsg = "you have to fill all the fields please!";
          this.$store.dispatch("changeLoading", false);
          this.createType = "error";
          setTimeout(() => {
            this.createStatus = false;
          }, 4000);
  
        }
        // api
        //     .get_claim(this.userCardActiveRowTableCRQ.client_id)
        //     .then(response => {
        //       this.$store.APIData = response.data
        //     })
        
      },
      async getReportsData() {
        //let adminName = []
        // let test = {"id_claim":[], "client_id":[],"claim_text":[],"member_email":[], "admin_name":[],
        //      "Claims_has_Facilites":[], "Claims_has_Retention_Action":[]}
        this.testClaims.length = 0
        //this.test.length = 0
      api.get_claim(this.$route.params.id)
          .then(response => {
            this.$store.state.APIData = response.data
            
            //dict[1]
            
            this.$store.state.APIData.map((e)=> {

              let t = {}
              //this.testClaims = []
              t["client_id"] = e.client_id
              t["admin_name"] = e.admin_name
              t["admin_email"] = e.admin_email
              t["claim_text"] = e.claim_text
              t["id_claim"] = e.id_claim
              t["id_facility"] = e.facilities_list //[1,2,3]
              t["id_retention"] = e.retention_actions_list
              t["claim_date"] = e.claim_date
              this.testClaims.push(t)
            })
    
          })
          .catch(err => {
            console.log(err)
          })
    },
      clear() {
        this.facilities = null;
        this.opensAt = null;
        this.closesAt = null;
        this.gymAddress = null;
        this.numberEmployees = null;
        this.select = null;
      },
      updateMarker(markerArr) {
        this.form.coords = markerArr[0].lat + "," + markerArr[0].lng;
  
        this.markers = markerArr;
      },
    },
  };
  </script>
  