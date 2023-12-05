<template>
  <TheHeader />
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
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
