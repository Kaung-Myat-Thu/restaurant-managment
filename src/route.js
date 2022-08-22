import { createRouter, createWebHistory } from "vue-router";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
