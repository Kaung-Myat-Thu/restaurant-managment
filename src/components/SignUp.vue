<template>
  <div class="flex items-center justify-center flex-col w-screen h-screen">
    <h1 class="text-3xl font-bold mb-4">Sign up</h1>
    <form
      @submit.prevent=""
      class="w-4/5 max-w-md bg-slate-100 px-4 py-2 rounded-md"
    >
      <input
        v-model="name"
        type="text"
        placeholder="Enter name..."
        class="text-sky-500 border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Enter email..."
        class="border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Enter password..."
        class="border border-sky-500 w-full my-2 px-4 py-2 rounded-md focus:outline-sky-500"
      />
      <input
        @click="signUp"
        type="submit"
        value="Sign up"
        class="text-white bg-sky-500 w-full my-2 px-4 py-2 rounded-md hover:bg-sky-600 cursor-pointer"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      console.log("click");
    },
  },
};
</script>
