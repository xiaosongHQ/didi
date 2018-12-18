<template>
  <div class="login">
    <h2>预检车平台</h2>
    <mu-container class="login_box">
      <mu-paper class="demo-paper headpic" circle :z-depth="0"></mu-paper>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form" label-position="left" label-width="80">
        <mu-form-item label="手机号" prop="mobile">
          <mu-text-field max-length="11" v-model="validateForm.mobile" prop="mobile"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password">
          <mu-text-field type="password" max-length="16" v-model="validateForm.password" prop="password"></mu-text-field>
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
    <div class="toReg">
      <router-link  :to="{name:'register'}">
        新用户？点击这里注册
      </router-link>
    </div>
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
        validateForm: {
          mobile: '',
          password: ''
        },
        resState: false
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          if (result) {
            this.$http.post("http://87ju84.natappfree.cc/check-car/app/login", {
              "mobile": this.validateForm.mobile,
              "password": this.validateForm.password
            })
              .then(function (res) {
                // 响应成功回调
                if (res.code === 200) {
                  console.log(res);
                  //弹出登录成功
                  //跳转到首页

                }else if (res.code === 500) {
                  console.log(res.msg);
                  //提示手机或密码错误
                }
              })
          }
        });
      },
    }
  }
</script>

<style scoped>
  .login h2 {
    margin: 3rem auto;
    text-align: center;
  }

  .login_box {
    width: 17.44rem;
    height: 27.38rem;
    margin-bottom: 4rem;
    border: 0.06rem solid #bbbbbb;
    border-radius: 0.63rem;
    box-shadow: 0 0 1.25rem #aaaaaa;
  }

  .headpic {
    margin: 2rem auto;
    width: 9rem;
    height: 7rem;
    background-color: #00acc1;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .toReg {
    /*display: inline-block;*/
    text-align: center;
  }
</style>

