<template>
  <v-card class="elevation-12">
    <v-layout justify-center>
      <span style="font-size: 30px" class="my-4 text--lighten-5 text-center">
        {{$t('manageItems.uploadFile.uploadDataFile')}}
      </span>
    </v-layout>
    <v-card-text>
      <v-file-input
        class="mx-12 mb-2"
        :label="$t('manageItems.uploadFile.uploadDataFile')"
        chips
        dense
        v-model="file"
        v-on:change="handleFileUpload($event)"
      ></v-file-input>
     
    </v-card-text>
    <v-card-actions>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }"> <!-- color="red lighten-2" -->
        <v-btn
          
          dark
          v-bind="attrs"
          v-on="on"
          type="submit" block color="primary" @click="submitFile()"
              >{{$t('manageItems.submit')}}
      </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
       {{$t('manageItems.uploadFile.warningTitle')}}  
        </v-card-title>

        <v-card-text>
          {{warningText}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      
    </v-card-actions>
  </v-card>
</template>

<script>
import { Axios } from "../../../src/axios-api";
export default {
  data() {
    return {
      file: '',
      warningText: " ",
      warningTitle: "File Upload Status",
      dialog: false,
    };
  },
  methods: { 
    submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            Axios.post( '/post_csv',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then((response) => {
      
          this.warningText = response.data
          //this.warningText = "File uploaded with success"
          this.file = ''
        }) 
        .catch((error) =>{

          this.warningText = error.response.data

          
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(event){
        if (this.file !== null && this.file !== "") {
          this.file = event;
        }
      }
  }
};
</script>

<style scoped></style>
