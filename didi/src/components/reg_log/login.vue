
<template>
  <div class="login">
    <h2>预检车平台</h2>
    <mu-container class="login_box">
        <mu-paper class="demo-paper headpic" circle :z-depth="0"></mu-paper>
        <mu-form :model="form" class="mu-demo-form" label-position="left" label-width="80">
          <mu-form-item label="邮箱" prop="email" :rules="emailRules">
            <mu-text-field v-model="validateForm.email" prop="email"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="密码" prop="password" :rules="passwordRules">
            <mu-text-field  type="password" v-model="validateForm.password" prop="password"></mu-text-field>
          </mu-form-item>
          <div class="forget">
            <span>忘记密码？</span>
            <span style="float: right">使用滴滴账号登录</span>
          </div>
          <mu-form-item>
            <mu-button color="primary" @click="submit">登录</mu-button>
          </mu-form-item>
        </mu-form>
      </mu-container>
    <router-link class="toReg" :to="{name:'register'}">
      新用户？点击这里注册
    </router-link>
  </div>

</template>

<script>
  export default {
    name: "login",
    form: {
      input: ''
    },
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        validateForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
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
    margin-bottom: 4rem;
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
  .toReg{
    display: inline-block;
    text-align: center;
  }
</style>

