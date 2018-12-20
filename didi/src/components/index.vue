<template>
  <div class="main">
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
        <div class="main_cell_body">
          <router-link class="appointment" :to="{name:'app_msg'}">
            <div class="head_pic">
              <img src="../../static/images/car.png" alt="">
            </div>
            <div class="pic_msg">
              <p>在线预约 </p>
              <p>一键预约年检，快速办理</p>
            </div>
          </router-link>
          <router-link class="appointment" :to="{name:'register'}">
            <div class="head_pic">
              <img src="../../static/images/people.png" alt="">
            </div>
            <div class="pic_msg">
              <p>代驾预约 </p>
              <p>代驾年检，每人一对一办理</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="main_cell">
        <div class="main_cell_title">
          <span>车检须知</span>
        </div>
        <div class="main_cell_body">
          <div class="prepare">
            年检需要准备些什么？
          </div>
          <div class="need">
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
          </div>
          <div class="prepare">
            那些车需要年检？
          </div>
          <div class="need">
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
            <p><img src="../../static/images/circle.png" alt=""><span>机动车行驶证件(正、副本)</span></p>
          </div>
        </div>
      </div>
      <div class="main_cell">
        <div class="main_cell_title">
          <span>车检大师优势</span>
        </div>
        <div class="main_cell_body">
          <img src="../../static/aui/image/demo1.png" alt="">
        </div>
      </div>
    </div>
    <div class="com_msg">
      <p>客服电话:<span>&nbsp;&nbsp;400-030-1530</span></p>
      <p>浙江车检通网络科技有限公司</p>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import footNav from '../components/common/foot'
  export default {
    name: "index",
    components: {
      footNav
    },
    data() {
      return {
        banner: 'banner',
        bannerImg: ''
      }
    },
    created() {
      let userInfo = JSON.parse(localStorage.getItem('USER'));
      if (userInfo != ''&&userInfo != undefined) {
        //认证登录状态
      }else {
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style scoped>
  .main{
    padding-bottom: 56px;
  }
  .head_pic{
    float: left;
    margin: 15px;
    width: 60px;
    height: 60px;
  }
  .head_pic img{
    width: 100%;
    height: 100%;
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
    background-color: #fff;
  }
  .main_cell_title span{
    border-left: 2px solid #00bbd4;
    padding: 0 5px;
  }
  .main_cell_body{
    width: 100%;
    /*height: 20rem;*/
    background-color: #fff;
  }
  .main_cell_body img{
    width: 100%;
    height: 100%;
  }
  .prepare{
    margin: 0 auto;
    width: 10rem;
    line-height: 2rem;
    text-align: center;
    color: #ffffff;
    background: -webkit-linear-gradient(left, #5fdaff, #457eff);
    background: -o-linear-gradient(right, #5fdaff, #457eff);
    background: -moz-linear-gradient(right, #5fdaff, #457eff);
    background: linear-gradient(to  right, #5fdaff, #457eff);
    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    border-radius: 0.2rem;
  }
  .appointment{
    display: block;
    margin-bottom: 15px;
    padding: 5px;
    width: 100%;
    box-shadow: 0 0 0.3rem 0 #05d4be;
  }
  .appointment p{
    color: #444444;
  }
  .need img{
    vertical-align: middle;
    width: 16px;
    height: 16px;
  }
  .com_msg{
    padding: 5px 0;
    line-height: 12px;
    width: 100%;
    background-color: #efefef;
  }
  .com_msg p{
    text-align: center;
    font-size: 12px;
    color: #666666;
  }
  .com_msg p span{
    color: #1ed1ff;
  }
</style>
