<template>
  <Header />
  <h1 class="text-center font-bold text-2xl mt-4 text-slate-800">
    Hello {{ name }}, Welcome to Update Restaurant page
  </h1>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "UpdateRestaurant",
  data() {
    return {
      name: "",
    };
  },
  components: {
    Header,
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

<style></style>
