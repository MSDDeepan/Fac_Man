<template>
  <div id="app">
    <!-- <LoginComponent></LoginComponent>
    <UserComponent></UserComponent> -->
    <router-view></router-view>
  </div>
</template>



<script>
// import LoginComponent from '../src/components/LoginComponent.vue'
// import UserComponent from '../src/components/UserComponent.vue';

export default {
  name: 'App',
  components: {
    // LoginComponent,
    // UserComponent
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
