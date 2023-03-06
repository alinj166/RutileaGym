<template>
  <v-container fluid>
    <h1>{{ $t("settingsView.settings") }}</h1>
    <!-- Settings -->
    <!-- max-width="400" class="mx-auto" -->
    

    <v-card class="mx-auto pa-5 ma-10" max-width="800" tile elevation="2">
    <v-card-title>{{ $t("settingsView.generalSettings") }}</v-card-title>
    <v-divider class="mx-4"> </v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t("navbar.backgroundMode") }}
          </v-list-item-title>
        </v-list-item-content>

        <!--  Background mode -->
        <v-list-item-content>
          <v-list-item-title class="mx-auto px-5">
            <v-switch id="modeId" inset v-model="$vuetify.theme.dark"
          /></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t("settingsView.language") }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>
            <ChooseLanguage />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--<v-card-actions>
    <ChooseLanguage/>
    </v-card-actions>-->
    </v-card>

    <v-row align="center" v-bind:class="{ sensorOption: !formDisplay }">
      <v-col class="d-flex" cols="12" sm="6">
        <v-form @submit.prevent="submit">
          <v-text-field
            prepend-icon="person"
            name="username"
            label="username"
            type="text"
            v-model="form.username"
          ></v-text-field>
          <v-text-field
            prepend-icon="email"
            name="email"
            label="email"
            type="email"
            v-model="form.username"
          ></v-text-field>
          <v-text-field
            id="password"
            prepend-icon="lock"
            name="password"
            label="Password"
            type="password"
            v-model="form.password"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import { mapActions } from "vuex";
//import { getAPI } from "../axios-api";
import { mapState } from "vuex";
import ChooseLanguage from "../components/ChooseLanguage";
export default {
  name: "Login",
  components: { ChooseLanguage },
  data() {
    return {
      selectedDate: this.$store.state.selectedDateFormat,
      dates: ["3 Months", "6 Months", "1 Year", "2 Years"],
      form: {
        username: "",
        password: "",
      },
      settingItems: [
        //:label="`Checkbox 1: ${checkbox.toString()}`"
        { label: this.$i18n.t(`settingsView.name`), value: "Admin" }, //label:Name //label: this.i18n.$t('settingsView.name')
        {
          label: this.$i18n.t("settingsView.mailAddress"),
          value: "admin@example.com",
        }, //label: "mail Address"
      ],
      systemItems: [
        {
          label: this.$i18n.t("settingsView.graphDisplay"),
          value: "2022/05/01 to 2022/07/01",
        }, //label: "Graph display default period",
        { label: this.$i18n.t("settingsView.language"), value: "Eng" }, //label: Language
      ],
      showError: false,
      dialog: false,
      buildings: [""],
      //test,
      formDisplay: false,
    };
  },
  computed: {
    changeDefaultDate() {
      //return this.$store.state.auth.dates
      return this.$store.state.dates;
    },
    changeSelectedDate() {
      //return this.$store.state.auth.selectedDateFormat
      return this.$store.state.selectedDateFormat;
    },
    ...mapState(["APISettings"]),
  },
  mounted() {
   // console.log("lang", this.$i18n.messages);
  //  this.changeSelectedDatee();
    //this.getReportsData();
    //console.log(username)
    //this.test = this.$store.dispatch('changeLoading')
    //console.log("changeLoading", this.changeLoading)
    //console.log("users", this.$store.state.auth.users)
  },
  created() {
    // Fetch tasks on page load
    //this.getData();
    //this.getReportsData();
  },
  methods: {
    /*async getReportsData() {
      //, { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }
      getAPI
        .get("/api/users/user/", {
          headers: { Authorization: `Bearer ${this.$store.state.accessToken}` },
        })
        .then((response) => {
          this.$store.state.APISettings = response.data;
          console.log(this.$store.state.APISettings);
        })
        .catch((err) => {
          console.log(err);
        });
    },*/
    /*async getData() {
                try {
                  
                    // fetch tasks
                    const response = await this.$http.get('http://localhost:8000/api/building/');
                    // set the data returned as tasks
                    console.log(response)
                    this.buildings = response.data; 
                } catch (error) {
                    // log the error
                    console.log(error);
                }
            },*/

    //...mapGetters({ Dates: "changeDefaultDate" }),
    // ...mapActions(["LogIn"]),
    // async submit() {
    //   const User = new FormData();
    //   User.append("username", this.form.username);
    //   User.append("password", this.form.password);
    //   console.log(User.get("password"),"dad");
    //   let t = await this.LogIn(User);
    //   console.log(t);
    //   if (t) {
    //     this.$router.push("/");
    //     this.showError = false;
    //   } else this.showError = true;

    //   /*try {
    //     await this.LogIn(User);
    //       this.$router.push("/");
    //       this.showError = false
    //   } catch (error) {
    //      this.showError = true
    //   }*/
    // },

    /*changeLoading() {
      this.$store.dispatch('changeLoading')
      console.log(this.$store.state.test)
    },*/

 /*   changeSelectedDatee() {
      //this.$store.state.auth.selectedDateFormat = this.selectedDate;
      //console.log(this.$store.state.auth.selectedDateFormat);

      this.$store.state.selectedDateFormat = this.selectedDate;
      console.log(this.$store.state.selectedDateFormat);
    },*/
  },
};
</script>

<style scoped>
.sensorOption {
  opacity: 0.5;
  display: none;
}
* {
  box-sizing: border-box;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.form {
  width: 40%;
}
.form > form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formAttribute {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0px;
}
.flexAttribute > label {
  margin-right: 20%;
}
.flexAttribute > input {
  width: 50%;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  align-self: flex-end;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
.inputdate {
  border: 2px solid grey round;
  font-size: 17px;
}
</style>
