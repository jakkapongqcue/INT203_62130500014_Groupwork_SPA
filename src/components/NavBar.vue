<template>
    <div class="navbar">
    <router-link to="/" class="nameProJect p-5">Minimal Notes</router-link>
    <router-link to="/" class="p-5">Home</router-link>
    <p>|</p>
    <router-link to="/about" class="p-5">About</router-link>
    <div class="light-dark-btn"> 
      <div :class="{ hidden: !changeMode }" @click="switchMode" class="p-3 mr-3 ">
        <i class="material-icons">light_mode</i>
      </div>
      <div :class="{ hidden: changeMode }" @click="switchMode" class="p-3 mr-3 ">
        <i class="material-icons">dark_mode</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
      methods: {
        switchMode(){
            this.$emit('switch-mode')
        },
    },
}
</script>