import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import index from '../components/index'
import register from '../components/reg_log/register'
import login from '../components/reg_log/login'
import server_process from '../components/server_process'
import order from '../components/order/order'
import agent from '../components/appointment/agent'
import charge from '../components/appointment/charge'
import app_msg from '../components/appointment/app_msg'
import app_msg_s from '../components/appointment/app_msg_s'
import app_msg_t from '../components/appointment/app_msg_t'
import steper from '../components/common/steper'



Vue.use(Router);
Vue.use(VueResource);

// 数据请求
import Axios from 'axios'
Axios.defaults.baseURL = 'http://47.93.254.11:8080';
Axios.defaults.baseURL = '/api';
Vue.prototype.$ajax = Axios;



let userInfo = JSON.parse(localStorage.getItem('USER'));
if (userInfo) {
  Axios.interceptors.request.use(config => {
    let token = userInfo.token;
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token;
    }
    return config
  }, error => {
    /*return Promise.reject(error)*/
  })
}



//全局组件



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/app_msg',
      name: 'app_msg',
      component: app_msg
    },
    {
      path: '/steper',
      name: 'steper',
      component: steper
    },
    {
      path: '/app_msg_s',
      name: 'app_msg_s',
      component: app_msg_s
    },
    {
      path: '/app_msg_t',
      name: 'app_msg_t',
      component: app_msg_t
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/server_process',
      name: 'server_process',
      component: server_process
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent
    },
    {
      path: '/charge',
      name: 'charge',
      component: charge
    }
  ]
})
