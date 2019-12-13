<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: "App",
  components : {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-image: url(./assets/bg-home.jpg);
  background-size: cover;
}
.navbar {
  padding: 25px;
}
.navbar-brand img {
  width: 100%;
}
.navbar li {
  margin: 0 10px;
}
</style>
