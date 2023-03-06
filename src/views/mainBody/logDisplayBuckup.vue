<template>

  <v-data-table
      :headers="headers"
      :items="APIData"
      
      class="elevation-5"
  >
    <template v-slot:top>
      <v-toolbar
          flat
          color="toolbarTab"
      >
        <v-toolbar-title class="textToolBar--text text-h6 font-weight-regular"> {{$t('logDisplay.employee')}} <v-divider
            class="mx-4"
            inset
            vertical
            width="500px"
        ></v-divider> </v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
            color="grey"
        ></v-divider>
        <v-toolbar-title class="textToolBar--text text-h6 font-weight-regular"> {{$t('logDisplay.intervention')}} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
            >
              {{$t('logDisplay.newItem')}}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!--<v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editInterventions.name"
                        :label="$t('logDisplay.interventionID')"
                    ></v-text-field>
                  </v-col>-->
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="interByUser"
                        :label="$t('logDisplay.employeeName')"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="interType"
                        :label="$t('logDisplay.interventionType')"
                    ></v-text-field>
                  </v-col>
                  
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="interStatus"
                        :label="$t('logDisplay.status')"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="interUploads"
                        :label="$t('logDisplay.uploadFile')"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="interDescription"
                        label="description"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="interDate"
                        label="date"
                    ></v-text-field>
                  </v-col>

                  <!--<v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="interComments"
                        :label="$t('logDisplay.condition')"
                    ></v-text-field>
                  </v-col>-->
                  
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-select
                        v-model="interComments"
                        :items="items"
                        item-text="condition"
                        item-value="color"
                        :rules="[v => !!v || 'Item is required']"
                        label="condition"
                        required
                      ></v-select>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
              >
                {{$t('logDisplay.cancel')}}
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="submitForm"
              >
                {{$t('logDisplay.save')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">{{$t('logDisplay.sureDelte')}}</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">{{$t('logDisplay.cancel')}}</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">{{$t('logDisplay.ok')}}</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
          color="blue darken-1"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
          color="red darken-1"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
          color="primary"
          @click="initialize"
      >
        {{$t('logDisplay.type')}}
      </v-btn>
    </template>
    
  </v-data-table>
</template>

<script>
import { getAPI } from '../../axios-api'
import { mapState } from 'vuex'
export default {
  name: "logDisplay",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: "NAME", value: 'interByUser' }, //text:'NAME' messages this.$i18n.t('logDisplay.type') 
      { text: "TYPE", value: 'interType' },
      { text: "DESCRIPTION", value: 'interDescription' },
      { text: "STATUS", value: 'interStatus' },
      { text: "CONDITION", value: 'interComments' }, //CONDITIONS : red, info , orange ...
      { text: "UPLOAD", value: 'interUploads' },
      { text: "DATE", value: 'interDate' },
      { text: "ACTIONS", value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    interId: -1,
    editInterventions: {
      interDescription: '',
      name: '',
      interByUser: '',
      interType: '',
      interComments: '',
      interStatus: '',
      interUploads:'',
      interDate: '',
    },
    editedItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
      uploadFile:'',
    },
    defaultItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
      uploadFile:'',
    },
    interventions: [],
    interDescription: '',
    interByUser: '',
    interType: '',
    interComments: '',
    interStatus: '',
    interUploads:'',
    interDate: '',
    select: null,
    items: [
      { condition: 'Danger', color: 'red' },
      { condition: 'Warning', color: 'orange' },
      { condition: 'Information', color: 'cyan' },
      { condition: 'Not heard', color: 'grey' },
      ],
  }),
  
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  created () {
    this.initialize()
    this.getInterventions()
  },
  mounted() {
    //console.log("localstorage",localStorage)
    //console.log("mapstateee",this.APIData)
    this.getInterventions()
  },
  computed: {
    formTitle () {
       return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
     },
    ...mapState(['APIData']),
  },
  //  computed: {
  //    mapState(){
  //     return this.$store.state.interventions 
  //    },
  //    formTitle () {
  //      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  //    },
  // },
  methods: {
    initialize () {
      //this.interventions = this.interventions 
      //this.interventions = ['']
        /*{
          name: 'ID01',
          calories: 'Wafa',
          fat: 'Check', //fat: 'Check',
          carbs: 'Intervention due to bad response',
          protein: 'In progress',
          uploadFile:'sensorSound.mp3'
        },
        {
          name: 'ID02',
          calories: 'Wafa',
          fat: 'Change Sensor',
          carbs: 'Incompatibility',
          protein: 'Suspended',
          uploadFile:'sensorImage.png'
        },
        {
          name: 'ID03',
          calories: 'Wafa',
          fat: 'Change Battery',
          carbs: 'Problem of sensor',
          protein: 'Closed',
          uploadFile:'sensorImage.png'
        },
        {
          name: 'ID03',
          calories: 'Wafa',
          fat: '',
          carbs: 'Motor Issue',
          protein: 'To do ',
          uploadFile:'reports.pdf'
        },
        {
          name: 'ID04',
          calories: 'Wafa',
          fat: '',
          carbs: 'High Vibration',
          protein: 'In progress',
          uploadFile:'sensorVideo.mp4'
        },
        {
          name: 'ID05',
          calories: 'Wafa',
          fat: '',
          carbs: 'Conflicting',
          protein: 'Closed',
          uploadFile:'reports.pdf'
        },*/
        /*{
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },*/
      
    },
    editItem (item) {
      this.editedIndex = this.interventions.indexOf(item)
      this.editInterventions = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      
      this.editedIndex = this.interventions.indexOf(item)
      
      this.interId = this.interventions[this.editedIndex].id
      this.editInterventions = Object.assign({}, item)
      this.dialogDelete = true
      
    },
    async deleteItemConfirm () {
      this.interventions.splice(this.editedIndex, 1)
      try {
        const headers = {
          'accept':'application/json',
          'Authorization': 'Bearer 24f13e2c51adf19e640fe870df276ceab61629c0'}
        const response = await this.$http.delete(`http://localhost:8000/api/interventions/${this.interId}/delete/`, {headers});
        this.getInterventions()
          
          } catch (error) {
            // log the error
            console.log(error);
          }
      this.closeDelete()
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editInterventions > -1) {
        Object.assign(this.interventions[this.editedIndex], this.editInterventions)
      } else {
        this.interventions.push(this.editInterventions)
      }
      this.close()
    },
    async submitForm(){
    try {
        // Send a POST request to the API
        // const headers = headers :{
        //   'accept':'application/json',
        //   'Authorization': 'Bearer 24f13e2c51adf19e640fe870df276ceab61629c0'}
        const response = await getAPI.post('/api/interventions/',
          
          {interDescription: this.interDescription,
          interByUser: this.interByUser,
          interType: this.interType,
          interComments: this.interComments,
          interStatus: this.interStatus,
          interUploads: this.interUploads,
          interDate: this.interDate,
          },
          { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }})
        // const response = await this.$http.post('http://localhost:8000/api/interventions/',
        
        //  {
        //   interDescription: this.interDescription,
        //   interByUser: this.interByUser,
        //   interType: this.interType,
        //   interComments: this.interComments,
        //   interStatus: this.interStatus,
        //   interUploads: this.interUploads,
        //   interDate: this.interDate,
        // },
        /*{headers :{
          'accept':'application/json',
          'Authorization': 'Bearer 24f13e2c51adf19e640fe870df276ceab61629c0'}}*////);
        /*this.editInterventions.push(this.interDescription, this.interByUser, this.interType, 
        this.interComments, this.interStatus, this.interUploads, this.interDate)*/
        Object.assign(this.interventions[this.editedIndex], this.editInterventions)
        // Append the returned data to the tasks array
        this.interventions.push(response.data);
        //this.editInterventions.push(response.data);
        // Reset the title and description field values.
    } catch (error) {
        // Log the error
        console.log(error);
    }
    this.close()
    this.getInterventions()
  },
    async getInterventions() {
      await getAPI.get('/api/interventions/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
          .then(response => {
            this.$store.state.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
      // try {
        
      //   const response = await this.$http.get('http://localhost:8000/api/interventions/');
      //   console.log(response)
      //     this.interventions = response.data;
      //     //console.log(this.interventions[0].interComments = "orange")
          
      //     } catch (error) {
      //       // log the error
      //       console.log(error);
      //     }
      }
  },
}
</script>

<style scoped>
</style>