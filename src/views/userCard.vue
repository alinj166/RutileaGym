<template>
  <!-- class="mx-auto my-12"-->
  <v-card
    :loading="loading"
    class="mx-auto lighten-5"
    max-width="374"
    rounded="xl"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>



    
<v-col key="image">
          <v-card class="pb-4 px-6 text-center" tile>
            <v-avatar color="white" size="100">
        <img v-if="userCardActiveRowTableCRQ.picture!=null &&userCardActiveRowTableCRQ.picture!=''&&userCardActiveRowTableCRQ.picture!=undefined" :src=" userCardActiveRowTableCRQ.picture">
<img v-else src="../../public/user.png" >
      </v-avatar>
            <v-card-title class="justify-center pa-2">{{
      userCardActiveRowTableCRQ.membership_id 
    }}

  </v-card-title>
            <v-dialog v-model="dialogUpdateImage" width="500">
              <template v-slot:activator="{ on, attrs }">
                <!-- color="red lighten-2" -->
                <v-icon v-bind="attrs" v-on="on" small class="mx-2">
                  mdi-pencil
                </v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ $t("filtersLabels.warning") }} 
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col >
                        <v-file-input
        class="mx-12 mb-2"

        :label="$t('filtersLabels.newImage')"
        chips
        variant="underlined"
        dense
        v-model="file"
        accept="image/*"
        v-on:change="handleFileUpload($event)"
      ></v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="primary" text @click="updateImage"> {{ $t("filtersLabels.yes") }} </v-btn>
                  <v-btn color="primary" text @click="dialogUpdateImage = false">
                    {{ $t("filtersLabels.no") }}

                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            

            <v-dialog v-model="dialogResetImage" width="500">
              <template v-slot:activator="{ on, attrs }">
                <!-- color="red lighten-2" -->
                <v-icon v-bind="attrs" v-on="on" small class="mx-2">
                  mdi-close
                </v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ $t("filtersLabels.warning") }} 
                </v-card-title>

                <v-card-text>
                  {{ $t("filtersLabels.imageDeleteDialog") }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="resetImage">{{ $t("filtersLabels.yes") }} </v-btn>
                  <v-btn color="primary" text @click="dialogResetImage = false">
                    {{ $t("filtersLabels.no") }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
          <v-divider class="mx-8"></v-divider>
        </v-col>
        
<!--
    <v-card-text>
      <v-row align="center" class="mx-0 justify-center pa-2">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ $t("dashboardView.userCard.address") }}
        </div>
      </v-row>

    <div class="my-4 text-subtitle-1 justify-center">
        User Settings
      </div>-->

      <!--<div class="my-4">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>-->
    <v-divider class="mx-4"></v-divider>
    <v-container v-for="align in alignments" :key="align" class="mb-16">
      <div>
            <v-alert :value="createStatus" :type="createType">
              <span> {{ createSuccessMsg }} <br /> </span>
            </v-alert>
          </div>
      <v-row :align="align" no-gutters style="height: 230px">
        <v-col key="Gender" class="my-4">
          <v-card class="pb-6 px-10 text-center" tile>
            <v-card-text>
              <div
                style="text-orientation: sideways; writing-mode: sideways-lr"
              >
                {{ $t("filtersLabels.gender") }}
              </div>
              <!--<v-card-subtitle> 男性 </v-card-subtitle>-->
              <div>{{ userCardActiveRowTableCRQ.gender }}</div>
            </v-card-text>
          </v-card>
          <!-- <v-divider class="mx-4"></v-divider>-->
          <!--<v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>-->
        </v-col>
        <v-col key="age" class="my-4">
          <v-card class="pb-6 px-10 lighten-5 text-center" tile>
            <v-card-text>
              <div>{{ $t("filtersLabels.age") }}</div>
              <!--<v-card-subtitle> 男性 </v-card-subtitle>-->
              <div>{{ userCardActiveRowTableCRQ.age }}</div>
            </v-card-text>
          </v-card>
          <!-- <v-divider class="mx-4"></v-divider> -->
          <!--<v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>-->
        </v-col>

        <v-col key="operations">
          <v-card class="pb-6 px-10 lighten-5 text-center" tile>
            <v-card-text>
              <div
                class="d-inline-block px-2"
                style="text-orientation: sideways; writing-mode: sideways-lr"
              >
                {{ $t("dashboardView.userCard.operations") }}
              </div>
              <!--<v-card-subtitle> 男性 </v-card-subtitle>-->
              <div>{{cum_visits }}</div>
            </v-card-text>
          </v-card>
          <!--<v-divider class="mx-4"></v-divider>-->
        </v-col>
        <v-col key="score">
          <v-card class="pb-6 px-10 text-center" tile>
            <v-card-text>
              <div>{{ $t("dashboardView.userCard.score") }}</div>
              <!--<v-card-subtitle> 男性 </v-card-subtitle>-->
              <div>{{ userCardActiveRowTableCRQ.score }}</div>
            </v-card-text>
          </v-card>
          <v-divider class="mx-4"></v-divider>
        </v-col>

        <v-col key="number_phone">
          <v-card class="pb-6 px-11 text-center" tile>
            <v-card-text>
              <div>{{ $t("filtersLabels.phone") }}</div>
              <!--<v-card-subtitle> 男性 </v-card-subtitle>-->
              <div>{{ userCardActiveRowTableCRQ.user_phone }}</div>
            </v-card-text>
            <v-dialog v-model="dialogUpdatePhone" width="500">
              <template v-slot:activator="{ on, attrs }">
                <!-- color="red lighten-2" -->
                <v-icon v-bind="attrs" v-on="on" small class="mx-2">
                  mdi-pencil
                </v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ $t("filtersLabels.warning") }}
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col >
                        <v-form
    ref="form"
    v-model="validPhone"
   
  >
                        <v-text-field
                          v-model="number_phone"
                          :label="$t('filtersLabels.newPhone')"
                          
                          :rules="phoneRules"
                        ></v-text-field>
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="primary"  :disabled="!validPhone"  text @click="updatePhone">{{ $t("filtersLabels.yes") }} </v-btn>
                  <v-btn color="primary" text @click="dialogUpdatePhone = false">
                    {{ $t("filtersLabels.no") }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            

            <v-dialog v-model="dialogResetPhone"  
 width="500">
              <template v-slot:activator="{ on, attrs }">
                <!-- color="red lighten-2" -->
                <v-icon v-bind="attrs" v-on="on" small class="mx-2">
                  mdi-close
                </v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  
                </v-card-title>

                <v-card-text>
  
            {{ $t("filtersLabels.phoneDeleteDialog") }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="resetPhone">{{ $t("filtersLabels.yes") }} </v-btn>
                  <v-btn color="primary" text @click="dialogResetPhone = false">
                    {{ $t("filtersLabels.no") }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
          <v-divider class="mx-8"></v-divider>
        </v-col>
        <v-col key="email">
          <v-card class="pb-6 px-11 text-center" tile>
            <v-card-text>
              <div>{{ $t("filtersLabels.email") }}</div>
              <!--<v-card-subtitle> 男性 </v-card-subtitle>-->
              <div>{{ userCardActiveRowTableCRQ.user_email }}</div>
            </v-card-text>

            <v-dialog v-model="dialogUpdateEmail" width="500">
              <template v-slot:activator="{ on, attrs }">
                <!-- color="red lighten-2" -->
                <v-icon v-bind="attrs" v-on="on" small class="mx-2">
                  mdi-pencil
                </v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ $t("filtersLabels.warning") }} 
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col >
                        <v-form
    ref="form"
    v-model="valid"
   
  >
                        <v-text-field
                          :rules="emailRules"
                          v-model="editEmail"
                          :label=" $t('filtersLabels.newEmail')"
                         
                        ></v-text-field>
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn :disabled="!valid" color="primary" text @click="updateEmail">{{ $t("filtersLabels.yes") }} </v-btn>
                  <v-btn color="primary" text @click="dialogUpdateEmail = false">
                    {{ $t("filtersLabels.no") }}

                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogResetEmail" width="500">
              <template v-slot:activator="{ on, attrs }">
                <!-- color="red lighten-2" -->
                <v-icon v-bind="attrs" v-on="on" small class="mx-2">
                  mdi-close
                </v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ $t("filtersLabels.warning") }} 
                </v-card-title>

                <v-card-text>
                  {{ $t("filtersLabels.emailDeleteDialog") }} 

                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="resetEmail">{{ $t("filtersLabels.yes") }}</v-btn>
                  <v-btn color="primary" text @click="dialogResetEmail = false">
                    {{ $t("filtersLabels.no") }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
          <v-divider class="mx-4"></v-divider>
        </v-col>
      </v-row>
    </v-container>

    <!--<v-divider class="mx-4"></v-divider>-->


    <v-row style="padding-top: 30%">
        <v-col >

<v-card-actions>
  <v-card-text class="mt-8">
    <v-card-title>{{
      $t("dashboardView.userCard.recentActivies")
    }}</v-card-title>
    <v-chip-group
      v-model="selection"
      active-class="deep-purple accent-4 white--text"
      column
    >
      <v-chip
        >{{ $t("dashboardView.userCard.lastVisitDate") }}
        {{ userCardActiveRowTableCRQ["last_visit_date"] }}</v-chip
      
        >

      <!--<v-chip>8:00PM</v-chip>

    <v-chip>9:00PM</v-chip>-->
    </v-chip-group>
  </v-card-text>
</v-card-actions>
        </v-col>
     
        </v-row>
    
    
    
  </v-card>
</template>

<script>



import api from "../api";
import { Axios } from "../../src/axios-api";

export default {
  name: "UserCard",

  data: () => ({
    loading: false,
    selection: 2,
    alignments: ["start"],
    cardItems: {
      textFields: ["Gender", "Age", " ", "Score"],
      cardValues: ["Male", "49", "Operations", "Score"],
    },
    textItems: ["Gender", "Age", "56", "0.99999"],
    number_phone: "",
    email: "",
    dialogResetPhone: false,
    dialogResetImage: false,
    dialogUpdateEmail: false,
    dialogUpdateImage: false,
    file:"",
    editEmail:"",
    dialogResetEmail: false,
    dialogUpdatePhone:false,
    editPhone:null,
    editImage:null,

    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

    phoneRules: [
      v => !!v || 'Phone is required',
      v => /^[0-9\b]+$/.test(v) || 'Phone must be valid',
      ],
      
      valid:true,
      validPhone:true,
    createStatus: false,
    createSuccessMsg: "",
    createType: undefined,

  }),



  methods: {

    handleFileUpload(event){
        if (this.file !== null && this.file !== "") {
          this.file = event;
          
        }
      },


    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    resetImage() {
      this.dialogResetImage = false;
      //call api   api.resetPhone()
        api.resetImage(this.userCardActiveRowTableCRQ.client_id)
        .then(() => {
       
     
          this.createStatus = true;
            this.createType = "success";

            this.createSuccessMsg = "Image Successfully Deleted!"; //"gym created successfully";
            this.userCardActiveRowTableCRQ.picture=null

            setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        })
        .catch((error) =>{
          this.createStatus = true;
            this.createSuccessMsg = error.response.data;
            this.createType = "error";
        //this.warningText = error.response.data
        setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        })
    },
    
    resetPhone() {
      this.dialogResetPhone = false;
        api.resetPhone(this.userCardActiveRowTableCRQ.client_id)
        .then((response) => {
          this.number_phone=""
          this.createStatus = true;
            this.createType = "success";
            this.createSuccessMsg = response.data; //"gym created successfully";
            this.userCardActiveRowTableCRQ.user_phone = "undefined"
            setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        })
        .catch((error) =>{
          this.createStatus = true;
            this.createSuccessMsg = error.response.data;
            this.createType = "error";
        //this.warningText = error.response.data
        setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        })
    },
    updateImage(){

  /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('picture', this.file);

        /*
          Make the request to the POST /single-file URL
        */
      this.dialogUpdateImage=false ;
      this.file = ''

      Axios.post( "/clientsimg/" + this.userCardActiveRowTableCRQ.client_id+"/picture/",
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then((response) => {
          this.createStatus = true;
            this.createType = "success";
            this.createSuccessMsg = response.data.message; 
            this.userCardActiveRowTableCRQ.picture =  response.data.image_url
 

            setTimeout(() => {
              this.createStatus = false;
            }, 4000);
          //this.warningText = "File uploaded with success"
        }) 
  
        .catch((error) =>{
          this.createStatus = true;
            this.createSuccessMsg = error.response.data;
            this.createType = "error";
        //this.warningText = error.response.data
        setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        //this.warningText = error.response.data
        })
           },



           
    updatePhone(){
      this.dialogUpdatePhone=false ;
      api.updatePhone(this.userCardActiveRowTableCRQ.client_id, this.number_phone)
      .then((response) => {

          this.createStatus = true;
            this.createType = "success";
            this.createSuccessMsg = response.data; //"gym created successfully";
            this.userCardActiveRowTableCRQ.user_phone = this.number_phone
            setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        })
        .catch((error) =>{
          this.createStatus = true;
            this.createSuccessMsg = error.response.data;
            this.createType = "error";
        //this.warningText = error.response.data
        setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        //this.warningText = error.response.data
        })
      
    },
    resetEmail() {
      this.dialogResetEmail = false;
      
      this.emailRules= [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
     
      //call api
      
      api.resetEmail(this.userCardActiveRowTableCRQ.client_id)
      .then((response) => {
        this.editEmail="" 
          this.createStatus = true;
            this.createType = "success";
            this.createSuccessMsg = response.data; //"gym created successfully";
            this.userCardActiveRowTableCRQ.user_email = "undefined"
            setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        })
        .catch((error) =>{
          this.createStatus = true;
            this.createSuccessMsg = error.response.data;
            this.createType = "error";
            
        //this.warningText = error.response.data
        setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        //this.warningText = error.response.data
        })
    },

 
    updateEmail(){
       api.updateEmail(this.userCardActiveRowTableCRQ.client_id, this.editEmail)
       .then((response) => {
          this.createStatus = true;
            this.createType = "success";
          
            this.createSuccessMsg = response.data; //"gym created successfully";
            this.userCardActiveRowTableCRQ.user_email = this.editEmail
            setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        })
        .catch((error) =>{
          this.createStatus = true;
            this.createSuccessMsg = error.response.data;
            this.createType = "error";
            this.editEmail=""
        setTimeout(() => {
              this.createStatus = false;
            }, 4000);
        //this.warningText = error.response.data
        })
      this.dialogUpdateEmail=false ;
    }
  },

  
  computed: {
    
    
    userCardActiveRowTableCRQ() {
      return this.$store.state.userCardActiveRowTableCRQ;
    },
    cum_visits()
    {
   return  this.userCardActiveRowTableCRQ.cum_visits+1
  }
  },


  watch: {


      userCardActiveRowTableCRQ: {
        handler() {
          if (this.userCardActiveRowTableCRQ.user_phone=="undefined" &&this.userCardActiveRowTableCRQ.user_email=="undefined")
          {this.number_phone="";
          this.editEmail ='';
        }
          else {
          this.number_phone=this.userCardActiveRowTableCRQ.user_phone  //"undefined";
         
            this.editEmail = this.userCardActiveRowTableCRQ.user_email;
          }
          }
        
      },  
  },
};
</script>

<style>
.imgpos {
  justify-content: "center";
}
</style>
