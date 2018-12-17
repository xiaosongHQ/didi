import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import index from '../components/index'
import register from '../components/reg_log/register'
import login from '../components/reg_log/login'
import app_msg from '../components/appointment/app_msg'
import footNav from '../components/common/foot'
import steper from '../components/common/steper'


import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'


Vue.use(MuseUI)
Vue.use(Router)
Vue.use(VueResource)


//全局组件
Vue.component('footNav',footNav)
Vue.component('steper',steper)

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
    }
  ]
})
