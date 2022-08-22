<template>
  <Header />
  <h1 class="text-center font-bold text-2xl my-4 text-slate-800">
    Hello {{ name }} , Welcome to Add Restaurant page
  </h1>
  <form @submit.prevent="addRestaurant" class="w-4/5 max-w-md mx-auto">
    <input
      v-model="restaurant.name"
      required
      type="text"
      placeholder="Enter restaurant name..."
      class="text-sky-500 border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500 focus:bg-sky-100"
    />
    <input
      v-model="restaurant.address"
      required
      type="text"
      placeholder="Enter address..."
      class="text-sky-500 border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500 focus:bg-sky-100"
    />
    <input
      v-model="restaurant.contact"
      required
      type="text"
      placeholder="Enter contact..."
      class="text-sky-500 border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500 focus:bg-sky-100"
    />
    <input
      type="submit"
      value="Add New Restaurant"
      class="text-white bg-sky-500 w-full my-2 px-4 py-2 rounded-md hover:bg-sky-600 cursor-pointer"
    />
  </form>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
export default {
  name: "AddRestaurnat",
  data() {
    return {
      name: "",
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    async addRestaurant() {
      let result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status === 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("userInfo");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
