<template>
  <v-container fluid>
    <!-- fill-height -->
    <h1 class="mb-4">{{ $t("manageItems.addGym.manageGyms") }}</h1>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-row>
          <v-col cols="6">
            <v-card class="elevation-12">
              <v-layout justify-center>
                <span
                  style="font-size: 30px"
                  class="my-4 text--lighten-5 text-center"
                >
                  {{ $t("manageItems.addGym.addNewGym") }}
                </span>
              </v-layout>
              <v-card-text>
                <v-form ref="entryForm" @submit.prevent="submit">
                  <v-text-field
                    prepend-icon="mdi-dumbbell"
                    name="gymName"
                    :label="$t('manageItems.addGym.selectGym')"
                    type="text"
                    v-model="form.gymName"
                    :rules="[rules.required]"
                    v-on:click="createStatus = false"
                  ></v-text-field>

                  <v-combobox
                    v-model="form.facilities"
                    :items="items"
                    :label="$t('gymView.gymInfo.facilities')"
                    multiple
                    prepend-icon="mdi-dumbbell"
                    :rules="[rules.required]"
                  ></v-combobox>
                  <v-text-field
                    prepend-icon="mdi-map-marker-outline"
                    name="gymAddress"
                    :label="$t('manageItems.addGym.gymAddress')"
                    type="text"
                    v-model="form.gymAddress"
                    :rules="[rules.required]"
                    v-on:click="createStatus = false"
                  ></v-text-field>
                  <v-text-field
                    id="numberEmployees"
                    prepend-icon="mdi-account-multiple"
                    name="numberEmployees"
                    :label="$t('manageItems.addGym.employeesNumber')"
                    type="text"
                    v-model="form.numberEmployees"
                    :rules="[rules.isNumber, rules.required]"
                    v-on:click="createStatus = false"
                  ></v-text-field>

                  <v-text-field
                    id="OpensAt"
                    prepend-icon="mdi-lock-open-outline"
                    name="opensAt"
                    :label="$t('manageItems.addGym.opensAt')"
                    type="time"
                    suffix="JST"
                    v-model="form.opensAt"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                    id="closesAt"
                    prepend-icon="mdi-lock-outline"
                    name="closesAt"
                    :label="$t('manageItems.addGym.closesAt')"
                    type="time"
                    suffix="JST"
                    v-model="form.closesAt"
                    :rules="[rules.required]"
                  ></v-text-field>

                  <v-text-field
                    id="Coords"
                    prepend-icon="mdi-map-search "
                    name="Coordinates "
                    :label="$t('manageItems.addGym.latitudeLongitude')"
                    type="text"
                    v-model="form.coords"
                    append-icon="mdi-crosshairs-gps "
                    @click:append="dialog = true"
                    :rules="[rules.required]"
                    
                  ></v-text-field>

                  <v-dialog v-model="dialog">
                    <v-lazy>
                      <CreateGymsMap
                        :markers="markers"
                        @update-marker="updateMarker($event, markers)"
                      />
                    </v-lazy>
                  </v-dialog>
                  <v-row>
                    <v-col cols="6">
                      <v-btn type="submit" block color="primary">{{
                        $t("manageItems.submit")
                      }}</v-btn>
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
          </v-col>
          <v-col cols="6">
            <fileUpload />
            <v-divider
              mx-auto="4"
            ></v-divider>
            <uploadMember />
          </v-col>
        </v-row>
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
  </v-container>
</template>

<script>
///                     v-on:click="dialog = true"
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import fileUpload from "./fileUpload/fileUpload";
import uploadMember from "./fileUpload/uploadMember"; 
import CreateGymsMap from "../components/createGymsMap.vue";
import api from "../api";

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
  components: { fileUpload, CreateGymsMap, uploadMember },
  data: () => ({
    fileUpload: [],
    dialog: false,
    createStatus: false,
    createSuccessMsg: "",
    createType: undefined,

    form: {
      gym_label: "",
      facilities: "",
      gymAddress: "",
      numberEmployees: "",
      opensAt: "",
      closesAt: "",
      coords: "",
    },
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
   
    items: [
    ],
    markers: [],

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
  },
  created() {
    this.markers = [];
    this.$store.dispatch("changeLoading", false);
  },
  methods: {
    submit() {
      this.$store.dispatch("changeLoading", true);

      let self = this;
      self.$refs.entryForm.validate();
      if (self.$refs.entryForm.validate()) {

        let payload = {};
        this.form.facilities.forEach((element) => {
          payload[element.value] = true;
        });
        payload["x_coord"] = parseFloat(this.form.coords.split(",")[0]);
        payload["y_coord"] = parseFloat(this.form.coords.split(",")[1]);
        payload["gym_label"] = this.form.gymName;
        payload["address"] = this.form.gymAddress;
        payload["numberEmployees"] = this.form.numberEmployees;

        payload["opensAt"] = this.form.opensAt;

        payload["closesAt"] = this.form.closesAt;

   
        api
          .create_new_gym(payload)
          .then(() => {
            this.$store.dispatch("changeLoading", false);

            this.createStatus = true;
            this.createType = "success";
            this.createSuccessMsg = "gym created successfully";
            setTimeout(() => {
              this.createStatus = false;
            }, 4000);
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

      //this.$v.$touch();
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
