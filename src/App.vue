<template>
  <div class="navbar">
    <router-link to="/" class="nameProJect p-5">Minimal Notes</router-link>
    <router-link to="/" class="p-5">Home</router-link>
    <p>|</p>
    <router-link to="/about" class="p-5">About</router-link>
    <div class="light-dark-btn"> 
      <button :class="{ hidden: !changeMode }" @click="switchMode" class="p-3 mr-3 ">
        <i class="material-icons">light_mode</i>
      </button>
      <button :class="{ hidden: changeMode }" @click="switchMode" class="p-3 mr-3 ">
        <i class="material-icons">dark_mode</i>
      </button>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      changeMode: false,
    };
  },
  methods: {
    switchMode() {
      this.changeMode = !this.changeMode;
      if (this.changeMode == false) {
        localStorage.theme = "light";
      } else {
        localStorage.theme = "dark";
      }
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>
