<template>
  <NavBar></NavBar>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
body,
html,
#app {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  height: 100%;
  margin: 0;
  padding: 0;
  /* position: absolute; */
  font-size: 16px;
  line-height: 1.42857143;
  color: #333;
  overflow-x: hidden;
}
body,
html {
  /* margin: 0; */
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
