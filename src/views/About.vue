<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div class="max-h-96 md:h-screen">
        <div class="w-full h-screen object-cover object-top overflow-auto bg-cover" style="background-image: url(https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)">
            <div class="flex flex-wrap mt-20 ">
              <div class="container p-4 max-w-xs shadow rounded m-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                v-for="notes in dataNote" :key="notes.datetime" >
                  <div class="flex p-0 border-b">
                      <span class="font-mono text-sm">Date: {{ notes.datetime }}</span>
                  </div>
                  <ul>
                      <li>
                      <span>{{ notes.note }}</span>
                      </li>
                  </ul>
              </div>
            </div>
        </div>
      </div>
      <div class="flex bg-gray-100 dark:bg-gray-900 p-10 hidden md:inline-flex">
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
const axios = require("axios");

export default {
  name: "about",
  data() {
    return {
      name: "Jakkapong Praditthanachot",
      dataNote: [],
      url: "https://618dd9b1883f950008433203--gracious-davinci-2b6e1e.netlify.app/db.json",
    };
  },
  methods: {
    opne() {
      if (confirm("open github.com/jakkapongqcue")) {
        window.open(
          "https://github.com/jakkapongqcue/INT203_62130500014_Groupwork_SPA"
        );
      } else {
        close;
      }
    },
    fetchData() {
      axios.get(this.url).then((response) => {
        this.dataNote = response.data;
        console.log(this.dataNote);
        return response.data;
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  computed: {
    datetime() {
      var t = new Date();
      return t.toLocaleString("en-GB", { hour12: true });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
