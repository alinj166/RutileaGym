
<template>
  <v-data-table
    :headers="headers"
    :items="clientsRisksToQuitsorted"
    :items-per-page="5"
    item-key="membership_id"
    class="elevation-1"
    :value="selectedItemState"
    @click:row="rowClick"

    :footer-props="{
      itemsPerPageOptions:[5,10,50]
    }"
    :item-class="itemRowBackground"
 
  >
  
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{$t("dashboardView.logDisplay.exportDataClient")}}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-menu>
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          elevation="2"
          small
          class="mb-2"
          v-bind="attrs"
          v-on="on"
        >
        {{$t("dashboardView.logDisplay.export")}}
        </v-btn>
      </template>

      <v-list>
        <v-list-item> 
          <v-list-item-title @click="exportToPDF(headers, clientsRisksToQuitsorted)"> {{$t("dashboardView.logDisplay.export")}} .pdf </v-list-item-title>
        </v-list-item>
        <v-list-item> 
          <v-list-item-title>
            <download-excel 
              :data="clientsRisksToQuitsorted"
              :fields="json_fields"
              :header="header"
              :footer="footer"
              :name="fileName"
              :worksheet="worksheet"
              >
          <button type="button" class="btn btn-success" @click="exportToExcel()">{{$t("dashboardView.logDisplay.export")}} .xls</button>
        </download-excel></v-list-item-title>
        </v-list-item>
   
      </v-list>
    </v-menu>
         </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mx-4"
        @click="clientSurvey(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
    
  </v-data-table>
</template>

<script>
import { mapState } from "vuex";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import meiryo from "../../../src/ressources/base64fonts/meiryo";
export default {
  name: "logDisplay",
  data() {
    return {
      selectedItemState: [],
      rows: [
        { id: 1, name: 'John', age: 30, city: 'New York' },
        { id: 2, name: 'Jane', age: 25, city: 'Los Angeles' },
        { id: 3, name: 'Bob', age: 40, city: 'Chicago' },
      ],

      selected: [],
   
      json_data: [
        {
          name: "naveen"
        }
      ],
      json_fields:{
      "Membership ID":"membership_id",
      "Current Age":"age",
      "Gender":"gender",
      "Score %":"score",
      "Date Enrollment":"DateEnrollment",
      },
      header:"" ,
      footer:"",
      fileName: 'Clients Report',
      worksheet: "",
      exportOptions:[ 
        {'text':'Export to pdf', 'click': 'exportToPDF(headers, clientsRisksToQuitsorted)'},
        {'text':'Export to xls', 'click': 'exportToExcel()'}
      ],
    };
  },


  computed: {
   

      clientsRisksToQuitsorted()
      {
      return [...this.clientsRisksToQuit].sort((a,b) => {return b.score-a.score;})
      },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    ...mapState(["APIData"]),
    clientsRisksToQuit() {
      return this.$store.state.clientsRisksToQuit
    },
    gym() {
      return this.$store.state.activeGym;
    },
    headers() {
      return [
        {
          text: this.$t("dashboardView.logDisplay.membershipID"),
          align: "start",
          sortable: false,
          value: "membership_id",
          width: "20%",
          color: "blue",
        },
        {
          text: this.$t("dashboardView.logDisplay.currentAge"),
          value: "age",
          width: "15%",
        },
        {
          text: this.$t("dashboardView.logDisplay.gender"),
          value: "gender",
          width: "15%",
        },
        {
          text: this.$t("dashboardView.logDisplay.score"),
          value: "score",
          width: "20%",
        },
        {
          text: this.$t("dashboardView.logDisplay.DateEnrollment"),
          value: "DateEnrollment",
          width: "30%"
          , sortable: false
        },
        { text: this.$t("dashboardView.logDisplay.Action"), value: 'actions', sortable: false },
      ];
    },
  },


    
  watch: {


    clientsRisksToQuit: {
  handler() {

    if (!sessionStorage.getItem('clientSurvey'))
  {  sessionStorage.removeItem('selectedItem');
this.selectedItemState=[] 
this.selectedItemState.push(this.clientsRisksToQuitsorted[0]) 

}
else 
{
   const selectedItemState = sessionStorage.getItem('selectedItem');
    if (selectedItemState) {
      this.selectedItemState.push (JSON.parse(selectedItemState));
    }
    else 

   this.selectedItemState.push(this.clientsRisksToQuitsorted[0]) 
  }


  sessionStorage.removeItem('clientSurvey');
}
},
    
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },

  },
  methods: {
   
    exportToExcel(){
      var today = new Date();
      this.fileName ="Clients Report - " + String(today)
      this.header = [
        ["Export Date : " +String(today)],
        ["Clients that risks to quit"],
      ]
      this.worksheet = this.clientsRisksToQuitsorted[0].gym_label

    },
    exportToPDF() {
      const doc = new jsPDF();
      doc.createAnnotation({ type: "csv" });
      doc.addFileToVFS("meiryo-normal.ttf", meiryo);
      doc.addFont("meiryo-normal.ttf", "meiryo", "normal");
      doc.setFont("meiryo");
      var today = new Date();
      // Or use javascript directly:
      doc.setFontSize("6");
      doc.text(5, 10, String(today));
      doc.setFontSize("20");
      doc.setFont("bold");
      doc.text("Clients risked to Quit reports", 70, 22);

      autoTable(doc, {
        columnStyles: { europe: { halign: "center" } }, // European countries centered
        body: this.clientsRisksToQuitsorted,
        styles: {
          font: "meiryo", //<------ This is the font. I have already added this font using doc.addfont()
        },
        startY: 28,
        columns: [
          { header: "membership ID", dataKey: "membership_id" },
          { header: "Current Age ", dataKey: "age" },
          { header: "Gender", dataKey: "gender" },
          { header: "Score %", dataKey: "score" },
          { header: "time enrollement", dataKey: "DateEnrollment" },
        ],
        didParseCell: function (cell) {
          if (Number(cell.row.raw.score) > 90)
            cell.cell.styles.fillColor = "#E46651";
          else if (Number(cell.row.raw.score) > 60)
            cell.cell.styles.fillColor = "#FFCC33";
          else if (Number(cell.row.raw.score) >= 0)
            cell.cell.styles.fillColor = "#41B883";
          else if (typeof cell.row.raw.score === "string")
            cell.cell.styles.fillColor = "rgb(23, 78, 196)";
        },
       
      });
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setFontSize(10);
        // Go to page i
        doc.setPage(i);
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.text(
          `Page  ${String(i)} of   ${String(pageCount)}`,
          doc.internal.pageSize.getWidth() / 2,
          pageHeight - 8
        ); //data.settings.margin.left if you want it on the left
      }

      var img = new Image();
      img.src = "legend.png";
      img.onload = () => {
        doc.addImage(img, "png", 10, 78, 12, 15);
        doc.setFontSize("12");
      };
      doc.save(`Report_ ${String(today)}`);
    },
    rowClick(item) {
      this.selectedItemState=[]
      let selected=[]
      selected.push(item)
   sessionStorage.setItem('selectedItem', JSON.stringify(item));
   this.selectedItemState.push(item)
      this.$store.dispatch("changeUserCardActiveRowTableCRQ", item);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editInterventions > -1) {
        Object.assign(
          this.interventions[this.editedIndex],
          this.editInterventions
        );
      } else {
        this.interventions.push(this.editInterventions);
      }
      this.close();
    },
    itemRowBackground: function (item) {

      return item.score > 90
        ? "style-1"
        : item.score > 60
        ? "style-2 "
        : "style-3 ";
    },
    clientSurvey(item){
      let selected=[]
      selected.push(item)
      this.selectedItemState = selected;
      this.$store.dispatch("changeUserCardActiveRowTableCRQ", item);
      this.$router.push("/surveyForm/"+item.client_id)
      sessionStorage.setItem('selectedItem', JSON.stringify(item));
      sessionStorage.setItem('clientSurvey', true);

    }
  },
};
</script>

<style>
.v-data-table .v-data-table__tbody tr.active {
  background-color: #299ed0;
}
.style-1 {
  background-color: #e46651;
}
.style-2 {
  background-color: #ffcc33;
}
.style-3 {
  background-color: #41b883;
}
</style>
