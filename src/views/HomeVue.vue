<template>
  <div class="home text-center mt-20">
    <img alt="Vue logo" class="mx-auto" src="../assets/logo.png">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg:"Welcome to Your Vue.js App"
    }
  },
}
</script>
