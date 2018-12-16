<template>
  <mu-container id="footer">
    <mu-bottom-nav>
      <mu-bottom-nav-item title="预约年检" icon="restore"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="服务流程" icon="dns"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="我的订单" icon="assignment"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </mu-container>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
#footer{
  position: fixed;
  bottom: 0;
}
</style>
