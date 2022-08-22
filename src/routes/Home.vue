<template>
  <h1>Hello, This is Home page</h1>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style></style>
