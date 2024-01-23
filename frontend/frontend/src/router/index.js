import { createRouter, createWebHistory } from "vue-router";

// Import your components that will serve as pages
import Home from "@/views/Home.vue";
import MenuCreator from "@/views/MenuCreator.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";

// Define your routes
const routes = [
  { path: "/", component: Home },
  { path: "/menucreator", component: MenuCreator },
  { path: "/register", component: Register },
  { path: "/login", component: Login },

  // Add more routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
