<template>
  <div id="app">
    <baselayout title="Apps"></baselayout>
    <baselayout title="Spaces"></baselayout>
  </div>
</template>

<script>
import baselayout from './components/BaseLayout'

export default {
  name: 'App',
  components: {
    baselayout
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
