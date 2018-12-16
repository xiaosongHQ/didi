<template>
  <div class="mian">
    <div class="top_pic">

    </div>
    <div class="main_box">
      <mu-carousel hide-controls class="banner">
        <mu-carousel-item>
          <img :src="'../../static/aui/image/demo1.png'">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="'../../static/aui/image/demo2.png'">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="'../../static/aui/image/demo3.png'">
        </mu-carousel-item>
      </mu-carousel>
      <div class="main_cell">
        <div class="main_cell_title">
          <span>车检服务</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        banner: 'banner',
        bannerImg: ''
      }
    },
  }
</script>

<style scoped>
  html {
    font-size: 12px;
  }

  .top_pic {
    width: 100vw;
    height: 12.5rem;
    background-color: #00bbd4;
  }

  .main_box {
    margin: 0 auto;
    width: 95%;
  }
  .banner {
    margin-top: 1rem;
    height: 5rem;
    border-radius: 0.3rem;
  }
  .main_cell_title{
    line-height: 40px;
    background-color: #9e9e9e;
  }
  .main_cell_title span{
    border-left: 2px solid #00bbd4;
    padding: 0 5px;
  }
</style>
