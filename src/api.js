import { Axios } from "./axios-api";

export default {
  numberClinetsPerGym: () => Axios.get("/number_clients_per_gym"),
  

  numberActiveClients: () => Axios.get("/number_active_clients"),

  numberNonActiveClients: () => Axios.get("/number_non_active_clients"),
  clientsSummary: (id) =>
    Axios.get("/gyms/" + id + "/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }),
  clientsRisksToQuit: () => Axios.get("/clients_risks_to_quit"),
  clientsRisksToQuitNonActiveGender: () => Axios.get("/non_active_gender"),
  clientsRisksToQuitActiveGender: () => Axios.get("/active_gender"),
  nonActiveGenderCount: (id) =>
    Axios.get("/non_active_gender_count/" + id + "/"),
  activeGenderCount: (id) => Axios.get("/active_gender_count/" + id + "/"),
  activeAgeCount: (id) => Axios.get("/active_age_count/" + id + "/"),
  nonActiveAgeCount: (id) => Axios.get("/non_active_age_count/" + id + "/"),
  ranked_clients_per_gym:(id)=>Axios.get("/ranked_clients_per_gym/" + id + "/"),
  create_new_gym:(payload)=>Axios.post("/gym_crud",payload), 
  edit_gym:(id, payload)=>Axios.put("/gym_crud/" + id,payload),
  delete_gym:(id)=>Axios.put("/delete_gym/" + id), 
  add_claim:(id,payload)=>Axios.post("/claim_friends/" + id,payload), 
  get_claim:(id)=>Axios.get("/claim_details/" + id) ,


  getImage:(id)=>Axios.get("/clientsimg/" + id+"/picture/") ,
  updateImage:(id,payload)=>Axios.post("/clientsimg/" + id+"/picture/",payload) ,
  resetImage:(id)=>Axios.delete("/clientsimg/" + id+"/picture/") ,
  //// user card api
  updatePhone:(id,payload)=>Axios.put("/edit_phone/"+id+"/"+payload+"/") ,
  resetPhone:(id)=>Axios.put("/reset_phone/" + id+"/") ,

  updateEmail:(id,payload)=>Axios.put("/edit_email/" + id+"/"+payload+"/") ,
  resetEmail:(id)=>Axios.put("/reset_email/" + id+"/") ,

  //delete_gym:(id)=>Axios.delete("/gym_crud/" + id) 
};
