<template>
  <div id="app">
    <NavHeader/>
    <router-view/>
  </div>
</template>


<script>
import NavHeader from '@/components/NavHeader'
export default {
  name: 'App',
  components: {
    NavHeader
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
}
</style>
