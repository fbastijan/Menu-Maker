import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/Warehouse/auth";
// Import your components that will serve as pages
import Home from "@/views/Home.vue";
import MenuCreator from "@/views/MenuCreator.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import MenuEditor from "@/views/MenuEditor.vue";
import GostMenuView from "@/views/GostMenuView";
import ArhivaView from "@/views/ArhivaView";
import ArhiviraniMenu from "@/views/ArhiviraniMenu";
import { flag } from "@/store";
// Define your routes
const routes = [
  { path: "/", component: Home },
  { path: "/menucreator", component: MenuCreator },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  {
    path: "/menu/:id", // :id is the dynamic part

    component: MenuEditor,
  },
  {
    path: "/menu/arhiva", // :id is the dynamic part

    component: ArhivaView,
  },
  {
    path: "/menu/arhiva/:id", // :id is the dynamic part

    component: ArhiviraniMenu,
  },
  {
    path: "/menu/:MenuName/:id/guest", // :id is the dynamic part

    component: GostMenuView,
  },
  // Add more routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const javneStranice = ["/login", "/register"];
  const loginPotreban = !javneStranice.includes(to.path);

  let user = auth.getUser();
  flag.change();
  if (loginPotreban && !user) {
    next("/login");
    return;
  }
  if (user && !loginPotreban) {
    next("/menucreator");
    return;
  }
  next();
});
export default router;
