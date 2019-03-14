import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import success from '../page/success'
import fail from '../page/fail'
import error from '../page/error'
import query from '../page/query'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/success',
      component: success
    },
    {
      path: '/fail',
      component: fail
    },
    {
      path: '/error',
      component: error
    },
    {
      path: '/query',
      component: query
    }
  ]
})
