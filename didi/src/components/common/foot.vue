<template>
  <mu-container id="footer">

     <!-- <mu-bottom-nav>
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>-->
    <mu-bottom-nav>
        <mu-bottom-nav-item :to="{name:'index'}" value="appoint" title="预约年检" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item :to="{name:'server_process'}" value="server" title="服务流程" icon="dns"></mu-bottom-nav-item>
        <mu-bottom-nav-item :to="{name:'order'}" value="order" title="我的订单" icon="assignment"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </mu-container>
</template>

<script>
    export default {
        name: "foot",
    }
</script>

<style scoped>
#footer{
  position: fixed;
  bottom: 0;
}
.appointment{
  width: 100%;
}
</style>
