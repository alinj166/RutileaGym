<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-layout justify-center>
          <v-icon justify-center size="10vw" color="#635d5d ">
            mdi-account-circle-outline </v-icon
          > <!--   fa-user-circle-o -->
        </v-layout>
        <v-layout justify-center>
          <span
            style="font-size: 45px"
            class="mb-1 black--text text--lighten-5 text-center"
          >
            LOGIN / LOGOUT
          </span>
        </v-layout>
        <v-row>
          <v-col cols="12">
            <v-card class="elevation-12">
              <v-card-text>
              <v-form @submit.prevent="login">
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-col cols="12">
            <v-btn
             type="submit" 
              block
              color="primary"
              >Login</v-btn
            >
          </v-col>
                </v-form>
                <!--<form v-on:submit.prevent="login">
          <div class="form-group">
            <input type="text" name="username" id="user" v-model="username" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" name="password" id="pass" v-model="password" class="form-control" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
          
        </form>-->
              </v-card-text>
            </v-card>
          </v-col>
          
            <v-col cols="5 ">
            <router-link to="/register">New user ? Create account</router-link>

          </v-col>
          <!--<v-col cols="4 " offset="3" >
            <a href="">Forgot Password</a>
          </v-col>-->
        </v-row>
        <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>

      </v-flex>
    </v-layout>

  </v-container>
  
</template>

<!--<template>
  <div>
  <div class="container text-dark">
    <div class="row justify-content-md-center">
      <div class="col-md-5 p-3 login justify-content-md-center">
        <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>

        <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>
        <form v-on:submit.prevent="login">
          <div class="form-group">
            <input type="text" name="username" id="user" v-model="username" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" name="password" id="pass" v-model="password" class="form-control" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
        </form>
        
      </div>
    </div>
  </div>
  </div>
</template>-->

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        incorrectAuth: false
      }
    },
    
    methods: {
      login () { 
        this.$store.dispatch('userLogin', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$store.dispatch('changeLogged',true)

          this.$router.push({ name: 'Dashboard' }).catch(()=>{});
        })
        .catch(() => {
          this.incorrectAuth = true
        })
        }
      }
  }
</script>

<style>
body { 
  background-color:#f4f4f4;
}
  .login{
    background-color:#fff;
    margin-top:10%;
  }
  input {
    padding: 25px 10px;
}
</style>

<!--<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-layout justify-center>
          <v-icon justify-center size="10vw" color="#635d5d ">
            mdi-account-circle-outline </v-icon
          > <!-   fa-user-circle-o ->
        </v-layout>
        <v-layout justify-center>
          <span
            style="font-size: 45px"
            class="mb-1 black--text text--lighten-5 text-center"
          >
            LOGIN / LOGOUT
          </span>
        </v-layout>
        <v-row>
          <v-col cols="12">
            <v-card class="elevation-12">
              <v-card-text>
                <v-form @submit.prevent="submit">
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Login"
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
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-btn
             type="submit" 
              block
              color="primary"
              @click="submit"
              >Login</v-btn
            >
          </v-col>
            <v-col cols="5 "  >
            <router-link to="/register">New user ? Create account</router-link>

          </v-col>
          <v-col cols="4 " offset="3" >
            <a href="">Forgot Password</a>
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
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      console.log(User.get("password"),"dad");
      let t = await this.LogIn(User);
      console.log(t);
      if (t) {
        this.$router.push("/");
        this.showError = false;
      } else this.showError = true;

      /*try {
        await this.LogIn(User);
          this.$router.push("/");
          this.showError = false
      } catch (error) {
         this.showError = true
      }*/
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
</style>-->
