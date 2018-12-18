<template>
  <mu-container>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <mu-form-item prop="select" label="车辆类型">
        <mu-select v-model="form.carType">
          <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-form-item>
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

</style>
