<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <LamBai2_1/>
    <LamBai2_2/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LamBai2_1 from './components/LamBai2_1.vue'
import LamBai2_2 from './components/LamBai2_2.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    LamBai2_1,
    LamBai2_2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
