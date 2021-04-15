<template>
  <nav-bar @switch-mode="switchMode"></nav-bar>
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {
      changeMode: false,
    };
  },
  computed: {
    NavBar
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
        localStorage.theme === "dark" || (!("theme" in localStorage) &&
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
