<template>
    <v-container fluid>
      <!-- fill-height -->
      <h1 class="mb-4"> {{ $t("surveyForm.ClientSurvey") }}</h1>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          <!-- <v-row> -->
              <v-card class="elevation-12">
                <v-layout justify-center>
                  <span
                    style="font-size: 30px"
                    class="my-4 text--lighten-5 text-center"
                  >
                  {{ $t("surveyForm.userExperience") }}
          
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
                      v-model="userCardActiveRowTableCRQ.user_email"
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
        <v-layout row wrap >   <!--:class="`pa-3 project ${claim.id_claim}`"-->
          <v-flex xs4 sm4 md1>
            <div>{{ userCardActiveRowTableCRQ.membership_id}}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div>{{ claim.admin_email}}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div>{{ claim.claim_text }}</div>
          </v-flex>
          <v-flex  xs4 sm4 md2 >
            <div v-for="(facility, i) in claim.id_facility" :key="i" >{{ dict[facility] +',' }}</div>
          </v-flex>
          <v-flex  xs4 sm4 md3 >
            <div  v-for="(id_retention, i) in claim.id_retention" :key="i" >{{ surveyCheckboxdict[id_retention] +',' }}</div>
          </v-flex>
          <v-flex  xs4 sm4 md2 >
              <div>{{ claim.claim_date.split('T')[0]}}</div>
              <div>{{ claim.claim_date.split('T')[1].split(".")[0]}}</div>
          </v-flex>

        </v-layout>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { validationMixin } from "vuelidate";
  import { required, maxLength, email } from "vuelidate/lib/validators";
  import api from "../../api";


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
   
      testClaims : [],
      test: [],
      createStatus: false,
      createSuccessMsg: "",
      createType: undefined,
      form: {
        membership_id: "",
        clientEmail: "",
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
          payload["admin_name"] = this.form.username, // "name",
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
        
      },
      async getReportsData() {

        this.testClaims.length = 0
      api.get_claim(this.$route.params.id)
          .then(response => {
            this.$store.state.APIData = response.data
            
            
            this.$store.state.APIData.map((e)=> {

              let t = {}
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
  