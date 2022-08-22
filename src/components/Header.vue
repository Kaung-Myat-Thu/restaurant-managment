<template>
  <div class="bg-gray-800 text-slate-300">
    <nav class="container mx-auto flex items-center justify-between py-2">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" class="w-10" />
      </router-link>
      <div>
        <a class="py-4 mx-2 hover:text-slate-100" href="#">Home</a>
        <a class="py-4 mx-2 hover:text-slate-100" href="#">Add Restaurant</a>
        <a class="py-4 mx-2 hover:text-slate-100" href="#">Update Restaurant</a>
        <a class="py-4 mx-2 hover:text-slate-100" href="#">Logout</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
