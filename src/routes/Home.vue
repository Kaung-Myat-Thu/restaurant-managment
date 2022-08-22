<template>
  <Header />
  <h1 class="text-center font-bold text-2xl my-4 text-slate-800">
    Hello {{ name }}, Welcome to Home page
  </h1>
  <table class="w-4/5 mx-auto border border-collapse text-center">
    <thead>
      <tr>
        <td class="px-2 py-1 border-black border-2">ID</td>
        <td class="px-2 py-1 border-black border-2">Restaruant Name</td>
        <td class="px-2 py-1 border-black border-2">Contact</td>
        <td class="px-2 py-1 border-black border-2">Address</td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="even:bg-slate-200 hover:bg-slate-400"
        v-for="restaruant in restaruants"
        :key="restaruant.id"
      >
        <td class="px-2 py-1 border-black border-2">{{ restaruant.id }}</td>
        <td class="px-2 py-1 border-black border-2">{{ restaruant.name }}</td>
        <td class="px-2 py-1 border-black border-2">
          {{ restaruant.contact }}
        </td>
        <td class="px-2 py-1 border-black border-2">
          {{ restaruant.address }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  data() {
    return {
      name: "",
      restaruants: [],
    };
  },
  components: {
    Header,
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    let result = await axios.get("http://localhost:3000/restaruant");
    this.restaruants = result.data;
  },
};
</script>

<style></style>
