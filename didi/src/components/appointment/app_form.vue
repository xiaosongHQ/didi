<template>
  <mu-container>
    <div class="font_pic">

    </div>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <div class="select-control-group">
        <mu-form-item prop="radio" label="运营类型">
          <mu-flex class="select-control-row" :key="item" v-for="(index,item) in operateCar">
            <mu-radio :value="item" v-model="radio"  :label="index"></mu-radio>
          </mu-flex>
        </mu-form-item>
      </div>
      <mu-form-item prop="select" label="车辆类型">
        <mu-select v-model="form.carType">
          <mu-option v-for="(index,item) in options" :key="index" :label="index" :value="item"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item prop="input" label="车辆号牌">
        <mu-text-field v-model="form.carId"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="input" label="发动机号">
        <mu-text-field v-model="form.engineId"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="date" label="注册日期">
        <mu-date-input v-model="form.registerTime" container="dialog"  full-width></mu-date-input>

      </mu-form-item>
      <mu-form-item prop="input" label="联系手机">
        <mu-text-field v-model="form.call"></mu-text-field>
      </mu-form-item>
      <!--<mu-form-item prop="input" label="验证码">
        <mu-text-field v-model="form.smscode"></mu-text-field>
      </mu-form-item>-->
      <mu-button class="nextBtn" @click="to_next" color="primary">下一步</mu-button>
    </mu-form>
    <div class="suporse">
      技术支持：北京道火自然科技
    </div>
  </mu-container>
</template>

<script>
    export default {
        name: "app_form",
      data () {
        return {
          options: {
            1:'微型车',
            2:'小型车',
            3:'中型车',
            4:'大型车'
          },
          labelPosition: 'left',
          form: {
            carType: '',
            smscode:'',
            carId: '京B.2B945',
            engineId: 'CA6102',
            registerTime: '2018-12-16',
            call: '18300612017',
            operateCar: 0
          },
          radio: 1,
          operateCar:{
            0:'运营车',
            1:'非运营车'
          }
        }
      },
      methods: {

        to_next(){
          this.$ajax({
            url: "/app/check/user/addUserCar",
            data:{
              "carType": this.form.carType,
              "carId": this.form.carId,
              "engineId": this.form.engineId,
              "registerTime": this.form.registerTime,
              "operateCar": 0
            }
            }).then((res)=>{
              if (res.code === 200) {
                // this.$router.push({name:'app_msg_s'})
              }
            })
        }
      }
    }
</script>

<style scoped>
.font_pic{
  margin-bottom: 2rem;
  height: 10rem;
  background-color: #ffa2c4;
}
.nextBtn{
  margin-left: 15px;
  width: 90%;
}
.suporse{
  margin: 0.5rem auto;
  text-align: center;
}

</style>
