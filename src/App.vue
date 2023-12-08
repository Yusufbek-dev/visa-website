<template>
  <TheHeader />
  <TheHome />
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheHome from './components/TheHome.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHome
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
body {
  background-image:url(../images/jygqq.gif);
  background-size: cover;
}
#app {
  font-family: Jost, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style: none;
}
body {
  margin: 0;
}
html {
  box-sizing: border-box;
}
</style>
