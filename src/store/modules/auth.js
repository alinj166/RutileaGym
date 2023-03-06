

/*
import axios from "axios";

const state = {
  user: null,
  users:
  [{
      "username": "0000",
      "password": "0000",
      "email": "t@.com",
  }, {
      "username": "testuser2",
      "password": "testpass2",
      "email": "z@.com",
  },
  {
      "username": "testuser3",
      "password": "testpass3",
      "email": "y@.com",
  },{
      "username": "admin",
      "password": "admin",
      "email": "admin@example.com",
  }]
,  
  dates: ["3 Months", "6 Months", "1 Year", "2 Years"],
  selectedDateFormat: "2 Years",
  posts: null,
  //test: false,
  labelsDate: [
    "2022-01-01",
    "2022-02-01",
    "2022-03-01",
    "2022-04-01",
    "2022-05-01",
    "2022-06-01",
    "2022-07-01",
    "2022-08-01",
    "2022-09-01",
    "2022-10-01",
    "2022-11-01",
    "2022-12-01",
  ],
  /*labelsDate : ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01',
'2022-08-01', '2022-09-01', '2022-10-01', '2022-11-01', '2022-12-01'],*/


/*};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {

  async LogIn({ commit }, user) {
    //await axios.post("login", user);
    let username = user.get("username");
    let password = user.get("password");
    if (
      state.users.find(
        (user) => user.username === username && user.password === password
      )
    ) {
      commit("setUser", user.get("username"));
      return true;
    } else {
      return false;
    }
  },
  async Register({ commit }, form) {

    ///await axios.post("register", form);

   // await dispatch("LogIn", form.get("username"));
 
    console.log(form.get("username"))
    let list={
      "username": form.get("username"),
      "password": form.get("password"),
      "email": form.get("email"),
    }
    console.log(list)
    state.users.push(list)
    commit("setUser", form.get("username"));

    return true;
  },
  async CreatePost({ dispatch }, post) {
    await axios.post("post", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("posts");
    commit("setPosts", response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    console.log(state.users)
    commit("logout", user);
  },
  /*changeLoading(context, load) {
    context.commit("changeLoading", load);
    console.log(load);
  },*//*
  changeLabel(context, loadLabel) {
    context.commit("changeLabel", loadLabel);
    console.log(loadLabel);
  },
  changeDefaultDate(context, dates) {
    context.commit("changeLabel", dates);
    console.log(dates);
  },
  
  changeSelectedDate(context, selectedDate) {
    context.commit("selectedDate", selectedDate);
    console.log(selectedDate);
  },

};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
  /*changeLoading(state, load) {
    state.test = load;
    console.log(state.test);
  },*//*
  changeLabel(state, loadLabel) {
    state.labelsDate = loadLabel;
    console.log(state.labelsDate);
  },
  changeDefaultDate(state, datesItem) {
    state.dates = datesItem;
    console.log(state.dates);
  },
  
  changeSelectedDate(state, pickedDate) {
    state.selectedDateFormat = pickedDate;
    console.log(state.selectedDate);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};*/
