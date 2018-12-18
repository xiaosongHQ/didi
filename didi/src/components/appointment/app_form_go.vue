<template>
  <mu-container>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <mu-form-item prop="date" label="到站时间">
        <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
      </mu-form-item>
      <mu-form-item prop="input" label="车辆类型">
        <mu-text-field v-model="form.input"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="select" label="燃油类型">
        <mu-select v-model="form.oilType">
          <mu-option v-for="(index,item) in oilType" :key="index" :label="index" :value="item"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item prop="select" label="驱动类型">
        <mu-select v-model="form.driverType">
          <mu-option v-for="(index,item) in driverType" :key="index" :label="index" :value="item"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-button class="nextBtn" :to="({name:'app_msg_t'})" color="primary">确认支付</mu-button>
    </mu-form>
  </mu-container>
</template>

<script>
    export default {
        name: "app_form_go",
      data () {
        return {
          options: [
            '微型车', '小型车', '中型车', '大型车'
          ],
          oilType: {
            1:"汽油",
            2:"柴油",
            3:"混合油",
            4:"液化石油气",
            5:"天然气",
            6:"甲醇",
            7:"乙醇",
            8:"太阳能",
            9:"电",
            10:"生物燃料",
            11:"氢",
          },
          driverType:{
            1:"前驱",
            2:"后驱",
            3:"四驱"
          },
          labelPosition: 'left',
          form: {
            carType: '',
            smscode:'',
            carId: '',
            engineId: '',
            registerTime: '',
            call: ''
          },
          select:{

          }
        }
      }
    }
</script>

<style scoped>

</style>
