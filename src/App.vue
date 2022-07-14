<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LamBai2_1/> -->
    <!-- <LamBai2_2/> -->
    <!-- <toDoApp/> -->
    <slotLayoutAdmin/>
    <!-- <slotLayoutTinTuc/> -->
    <CRUD/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LamBai2_1 from './components/LamBai2_1.vue'
// import LamBai2_2 from './components/LamBai2_2.vue'
// import toDoApp from './components/toDoApp/toDoComponent.vue'
// import CRUD from './components/CRUD/exerciseBai4.vue'
import slotLayoutAdmin from './components/slotLayoutAdmin/BaseLayout.vue'
// import slotLayoutTinTuc from './components/slotLayoutTinTuc/BaseLayout.vue'
export default {
  name: 'App',
  components: {
    // toDoApp,
    // CRUD,
    slotLayoutAdmin,
    // slotLayoutTinTuc,
    // HexlloWorld
    // LamBai2_1,
    // LamBai2_2
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
