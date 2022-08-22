<template>
  <router-view />
</template>

<script>
import SignUp from "./routes/SignUp.vue";
export default {
  name: "App",
  components: {
    SignUp,
  },
};
</script>
