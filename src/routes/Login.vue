<template>
  <div
    class="flex items-center justify-center flex-col w-screen h-screen bg-slate-100 rounded-md"
  >
    <img src="../assets/logo.png" alt="" class="w-28" />
    <h1 class="text-3xl font-bold mb-4">Login</h1>
    <form @submit.prevent="login" class="w-4/5 max-w-md">
      <input
        v-model="email"
        required
        type="email"
        placeholder="Enter email..."
        class="text-sky-500 border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500 focus:bg-sky-100"
      />
      <input
        v-model="password"
        required
        type="password"
        placeholder="Enter password..."
        class="text-sky-500 border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500 focus:bg-sky-100"
      />
      <input
        type="submit"
        value="Login"
        class="text-white bg-sky-500 w-full my-2 px-4 py-2 rounded-md hover:bg-sky-600 cursor-pointer"
      />
    </form>
    <div class="text-sky-600">
      You haven't any account! Please
      <router-link to="/sign-up" class="underline">sign up</router-link> here.
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("userInfo", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
