
<template>
  <div class="login">
    <h2>注册</h2>
    <mu-container class="login_box">
      <mu-paper class="demo-paper headpic" circle :z-depth="0"></mu-paper>
      <mu-form class="mu-demo-form" ref="form" :model="validateForm" label-position="left" label-width="80">
        <mu-form-item label="昵称" prop="username" :rules="usernameRules">
          <mu-text-field max-length="10" v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="手机号" prop="mobile" :rules="mobileRules">
          <mu-text-field max-length="11" v-model="validateForm.mobile" prop="mobile"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field max-length="16"  type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">注册</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
    <div class="to_login">
      <router-link :to="{name:'login'}">
        已经有账号了？点击登录
      </router-link>
    </div>
  </div>

</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写昵称'},
          {validate: (val) => val.length >= 1, message: '用户名长度大于1小于10'}
        ],
        mobileRules: [
          {validate: (val) => !!val, message: '必须填写手机号'},
          {validate: (val) => val.length >= 10 && val.length <= 12, message: '手机号有误'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 6 && val.length <= 16, message: '密码长度大于6小于16'}
        ],
        validateForm: {
          username: "",
          password: "",
          mobile: ""
        },
        openSimple: false
      }
    },
    methods: {
    toast () {
    /*  this.$toast.message('hello world');
      this.$toast.success('hello world');
      this.$toast.info('hello world');
      this.$toast.warning('hello world');
      this.$toast.error('hello world');*/
    },
      submit () {
        this.$refs.form.validate().then((result) => {
          if(result){
            this.$http.post("http://87ju84.natappfree.cc/check-car/app/register", {"username":this.validateForm.username,"password":this.validateForm.password,"mobile":this.validateForm.mobile}).then(function(res){
              // 响应成功回调
              if(res.code === 200){
                alert('注册成功')
              /*  $toast.config({"position": "center","time": 2000})*/
                this.$toast.success('注册成功')  //这个消息提示我觉得可能提示了 但是被tabar挡住的  我测试的时候看见hello word了的
                // Toast.error('hello world');
                // this.$router.push({ path:"/login"})   //注册成功跳转登录  路由有问题  可能没有配置
              }else{
                this.$toast.success('注册失败')
              }
            }, function(res){
              // 响应错误回调
            });
          }
        });
      }
    },
    created(){


    }
  }
</script>

<style scoped>
  .login h2{
    margin: 3rem auto;
    text-align: center;
  }
  .login_box{
    width: 17.44rem;
    height: 27.38rem;
    margin-bottom: 3rem;
    border: 0.06rem solid #bbbbbb;
    border-radius: 0.63rem;
    box-shadow: 0 0 1.25rem #aaaaaa;
  }
  .headpic{
    margin: 2rem auto;
    width: 9rem;
    height: 7rem;
    background-color: #00acc1;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .to_login{
    text-align: center;
  }
</style>

