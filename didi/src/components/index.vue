<template>
  <div class="mian">
    <div class="top_pic">

    </div>
    <mu-carousel hide-controls>
      <mu-carousel-item>
        <img :src="item.picUrl">
      </mu-carousel-item>
    </mu-carousel>
    <div>
      123456789
    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
        data () {
          return {
            banner:'banner',
            bannerImg:'../../static/aui/image/demo1.png'
          }
        },
    }
</script>

<style scoped>
  html{
    font-size: 12px;
  }
.top_pic{
  width: 100vw;
  height: 2rem;
  background-color: #00bbd4;
}
</style>
