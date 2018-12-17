
<template>
  <div class="login">
    <h2>注册</h2>
    <mu-container class="login_box">
      <mu-paper class="demo-paper headpic" circle :z-depth="0"></mu-paper>
      <mu-form class="mu-demo-form" ref="form" :model="validateForm" label-position="left" label-width="80">
        <mu-form-item label="用户名" help-text="" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="邮箱" prop="email" :rules="emailRules">
          <mu-text-field v-model="validateForm.email" prop="email"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field  type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">注册</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
    <router-link :to="{name:'login'}">
      已经有账号了？点击登录
    </router-link>
  </div>

</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        emailRules: [
          {validate: (val) => !!val, message: '必须填写邮箱'}
          // {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        validateForm: {
          username: '',
          password: '',
          email: ''
        }
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
    },
    created(){
      this.$http.post("http://87ju84.natappfree.cc/check-car/app/register", {"username":"测试2","password":"123456","mobile":"13511804426"}).then(function(res){
        // 响应成功回调
        var data = res.body;
        console.log(data)
      }, function(res){
      // 响应错误回调
      });
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
</style>

