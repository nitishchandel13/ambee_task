import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import calculateaqi from '@/components/calculateaqi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/calculateaqi',
      name: 'calculateaqi',
      component: calculateaqi
    }
  ]
})
