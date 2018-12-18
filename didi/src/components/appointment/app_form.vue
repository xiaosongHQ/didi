<template>
  <mu-container>
    <div class="font_pic">

    </div>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <mu-form-item prop="select" label="车辆类型">
        <mu-select v-model="form.carType">
          <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
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
      <mu-form-item prop="input" label="验证码">
        <mu-text-field v-model="form.smscode"></mu-text-field>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
    export default {
        name: "app_form",
      data () {
        return {
          options: [
            '微型车', '小型车', '中型车', '大型车'
          ],
          labelPosition: 'left',
          form: {
            carType: '',
            smscode:'',
            carId: '',
            engineId: '',
            registerTime: '',
            call: ''
          }
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
</style>
