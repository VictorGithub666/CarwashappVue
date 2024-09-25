// main.js

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router"; // Import router functions
import App from "./App.vue";
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';


import HomePage from "./components/HomePage.vue";
import BookingService from "./components/BookingService.vue";
import AboutUs from "./components/AboutUs.vue";
import ServicesList from "./components/ServicesList.vue";
import ContactUs from "./components/ContactUs.vue";


const routes = [
  { path: "/", component: HomePage },
  { path: "/booking", component: BookingService },
  { path: "/aboutus", component: AboutUs },
  { path: "/services", component: ServicesList },
  { path: "/contactus", component: ContactUs }, 
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the app with the router
const app = createApp(App);
app.use(router);
app.mount("#app");

app.use( VueSplide );
