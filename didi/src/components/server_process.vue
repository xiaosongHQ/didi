<template>
    <div class="process">
      <img src="../../static/aui/image/demo5.png" alt="">
      <foot-nav></foot-nav>
    </div>
</template>

<script>
  import footNav from '../components/common/foot'
    export default {
        name: "server_process",
      components: {
        footNav
      },
    }
</script>

<style scoped>
  .process{
    width: 100%;
  }
  .process img{
    width: 100%;
    height: 100%;
  }
</style>
