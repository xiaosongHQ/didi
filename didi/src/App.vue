<template>
  <div id="app">
    <router-view/>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    font-size: 16px;
    color: #666666;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*text-align: center;*/
  /*color: #2c3e50;*/
}
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
</style>
