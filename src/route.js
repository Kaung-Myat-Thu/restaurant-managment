import { createRouter, createWebHistory } from "vue-router";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
