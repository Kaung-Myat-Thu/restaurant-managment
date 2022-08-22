<template>
  <div class="bg-gray-800 text-slate-300">
    <nav
      class="sm:w-4/5 sm:mx-auto mx-3 flex items-center justify-between py-2"
    >
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" class="w-10" />
      </router-link>
      <div>
        <router-link class="py-4 mx-2 hover:text-slate-100" to="/"
          >Home</router-link
        >
        <router-link class="py-4 mx-2 hover:text-slate-100" to="/add-restaurant"
          >Add Restaurant</router-link
        >
        <button @click="logout" class="py-4 mx-2 hover:text-slate-100">
          Logout
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear("userInfo");
      this.$router.push("/login");
    },
  },
};
</script>
