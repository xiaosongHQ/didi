<template>
    <div class="order">
      <div class="order_title">
        订单详情
      </div>
      <div class="order_body" v-model="order_list">
        <p><span class="lab">订单号:</span><span>{{order_list.orderId}}</span></p>
        <p><span class="lab">订单主题:</span><span>{{order_list.order_subject}}</span></p>
        <p><span class="lab">预约时间:</span><span>{{order_list.orderTime}}</span></p>
        <p><span class="lab">价格:</span><span>{{order_list.orderMoney}}</span></p>
      </div>
      <div class="go_charge" @click="go_charge">
        确定付款
      </div>
      <foot-nav></foot-nav>
    </div>
</template>

<script>
  import footNav from '../../components/common/foot'
    export default {
        name: "order",
      components: {
        footNav
      },
      data(){
          return{
            order_list:{
                orderId: "566",
                order_subject: "beij",
                orderTime: "",
                orderMoney:""
            }
          }
      },
      methods:{
        go_charge(){
          this.$ajax.get("/check-car/app/alipay/goAlipay", {
            "orderId": "6665544"
          }).then((res)=> {
            console.log(res);
            if (res.data.code == 200) {
              this.$router.push({name:'order',query:{orderId:res.data.orderId,orderTime:res.data.orderTime,order_subject:res.data.order_subject,basePrice:res.data.basePrice,operatePrice:res.data.operatePrice,orderMoney:res.data.orderMoney}});
            }
          });
        }
      },
      created(){
        alert(1)
        this.$ajax.get("/check-car/app/check/userOrders", {

        }).then((res)=> {
          console.log(res);
          if (res.data.code == 200) {

          }
        });
      }
    }
</script>

<style scoped>
.order_title{
  line-height: 60px;
  text-align: center;
  background-color: #dddddd;
}
.order_body p{
  padding: 0 15px;
}
.lab{
  display: inline-block;
  width: 80px;
  margin-right: 20px;
  text-align: right;
}
.go_charge{
  margin: 0 auto;
  width: 80%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #222222;
  font-size: 16px;
  background-color: #00bcd4;
}
</style>
