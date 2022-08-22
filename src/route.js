import { createRouter, createWebHistory } from "vue-router";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import AddRestaurant from "./routes/AddRestaurant";
import UpdateRestaurant from "./routes/UpdateRestaurant";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: SignUp,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "AddRestaurant",
    path: "/add-restaurant",
    component: AddRestaurant,
  },
  {
    name: "UpdateRestaurant",
    path: "/update-restaurant",
    component: UpdateRestaurant,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
