<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div class="max-h-96 md:h-screen">
        <img
          class="w-screen h-screen object-cover object-top"
          src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div class="flex bg-white dark:bg-gray-900 p-10">
        <div class="mb-auto mt-auto max-w-lg">
          <h1 class="text-3xl uppercase">{{name}}</h1>
          <p class="font-semibold mb-5">KMUTT, SIT</p>
          <p class="font-mono">Date: {{ datetime }}</p>
          <div class="flex flex-col max-w-xs mt-5">
          <router-link to="/homevue" class="btn text-center">Vue.js</router-link>
          <button class="btn" @click="opne">Open GitHub</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  data() {
    return {
      name:"Jakkapong Praditthanachot",
    };
  },
  methods: {
    opne() {
      if (confirm("open github.com/jakkapongqcue")) {
        window.open("https://github.com/jakkapongqcue/INT203_62130500014_Groupwork_SPA")
      } else {
        close;
      }
    },
  },
  computed: {
    datetime() {
      var t = new Date();
      return t.toLocaleString("en-GB", { hour12: true });
    },
  },
};
</script>
