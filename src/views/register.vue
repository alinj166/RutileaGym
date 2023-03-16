<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-layout justify-center>
          <v-icon justify-center size="10vw" color="#635d5d ">
            mdi-account-circle-outline</v-icon
          >
        </v-layout>
        <v-layout justify-center>
          <span
            style="font-size: 45px"
            class="mb-1 black--text text--lighten-5 text-center"
          >
            REGISTER
          </span>
        </v-layout>
        <v-row>
          <v-col cols="12">
            <v-card class="elevation-12">
              <v-card-text>
                <v-form @submit.prevent="submit">
                <v-text-field
                    prepend-icon="person"
                    name="firstName"
                    label="First Name"
                    type="text"
                    v-model="form.firstName"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="person"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    v-model="form.lastName"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="person"
                    name="username"
                    label="username"
                    type="text"
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
                  <v-text-field
                    id="confirmPassword"
                    prepend-icon="lock"
                    name="confirmPassword"
                    label="confirm password"
                    type="password"
                    v-model="form.confirmPassword"
                  ></v-text-field>
                  <v-text-field
                    id="email"
                    prepend-icon="lock"
                    name="email"
                    label="Email"
                    type="email"
                    v-model="form.email"
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-btn type="submit" block color="primary" @click="register"
              >Register</v-btn
            >
          </v-col>

          <v-col cols="4 " offset="8">
            <router-link to="/login">Alreday registred</router-link>
          </v-col>
        </v-row>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async register() {
      const User = new FormData();
      User.append("firstname", this.form.firstName);
      User.append("lastname", this.form.lastName);
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      User.append("confirmPassword", this.form.confirmPassword);
      User.append("email", this.form.email);

      let t = this.Register(User);
      if (t) {
        this.$router.push("/login");
        this.showError = false;
      } else this.showError = true;

    },
  },
};
</script>

<style scoped>
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
</style>
