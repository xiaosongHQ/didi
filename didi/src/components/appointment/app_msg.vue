<!--第一步基本信息-->
<template>
  <div class="f_app">
    <steper></steper>
    <f_form></f_form>
  </div>
</template>

<script>
  import steper from '../common/steper'
  import f_form from '../appointment/app_form'
    export default {
        name: "app_msg",
      components:{
          steper,
          f_form
      }
    }
</script>

<style scoped>

</style>
