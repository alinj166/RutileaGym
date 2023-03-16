import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
//import Projects from '../views/Projects.vue'
//import Team from '../views/Team.vue'
import chartsDisplay from "../views/mainBody/chartsDisplay";
// import chartsDisplay2 from "../views/mainBody/chartsDisplay2";
// import chartsDisplay3 from "../views/mainBody/chartsDisplay3";
// import chartsDisplay4 from "../views/mainBody/chartsDisplay4";
import gym from "../views/mainBody/gym";
import HomePage from "../views/HomePage";
//import logDisplay from "../views/mainBody/logDisplay";
//import supervisionDisplay from "../views/mainBody/supervisionDisplay";
//import Devices from "../views/Devices";
import comparison from "../views/comparison";
//import comparisonVelocity from "../views/comparison";
//import ManageItems from "../views/ManageItems";
import surveyForm from "../views/clientSurvey/surveyForm";
import Settings from "../views/Settings";

import manageGyms from "../views/manageGyms";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'empty',
    component: HomePage,
  },


  {
    path: '/homePage',
    name: 'Home',
    component: HomePage
  },
  // {
  //   path: '/signIn',
  //   name: 'Sign In',
  //   component: singIn
  // },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: Projects,
  //  // meta: { requiresAuth: false },
  //   // route level code-splitting and
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  /*{
    path: '/team',
    name: 'team',
    component: Team
  },*/
  /*{
    path: '/devices',
    name: 'Devices',
    component: Devices,
    meta: { requiresAuth: false },
  },*/
  {
    path: '/chart',
    name: 'chart',
    component: chartsDisplay,
    ///meta: { requiresAuth: false },
  },
  /*{
    path: '/chartSensor2',
    name: 'chartSensor2',
    component: chartsDisplay2,
    meta: { requiresAuth: false },
  },*/
  /*{
    path: '/chartsDisplay3',
    name: 'chartsDisplay3',
    component: chartsDisplay3,
    meta: { requiresAuth: false },
  },*/
  /*{
    path: '/chartsDisplay4',
    name: 'chartsDisplay4',
    component: chartsDisplay4,
    meta: { requiresAuth: false },
  },*/
  /*{
    path: '/supervision',
    name: 'supervision',
    component: supervisionDisplay
  },*/
  {
    path: '/comparison',
    name: 'comparison',
    component: comparison,
    //meta: { requiresAuth: true },
  },
  /*{
    path: '/manageItems/:id',
    name: 'manageItems',
    component: ManageItems
  },*/
  /*{
    path: '/reports',
    name: 'reports',
    component: Reports,
    meta: { requiresAuth: false },
  },*/
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    //meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/:id',
    name: 'dashboard',
    component: Dashboard,
    //meta: { requiresAuth: true },
  },
  {
    path:'/surveyForm/:id',
    name:'surveyForm',
    component: surveyForm
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: login
  // },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   component: Logout
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: register,
  //  // meta: { requiresAuth: false },
  // },
  {
    path: '/gym/:id',
    name: 'gym',
    component: gym,
  // meta: { requiresAuth: true },
  },
  {
    path: '/manageGyms',
    name: 'manageGyms',
    component: manageGyms,
    //meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})





export default router
