import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import register from '../components/reg_log/register'
import login from '../components/reg_log/login'
import footNav from '../components/common/foot'


import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'


Vue.use(MuseUI)
Vue.use(Router)


//全局组件
Vue.component('footNav',footNav)

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
    }
  ]
})
