import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import home from  '../pages/home.vue'
// import login from '../pages/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/Index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: { title: '欢迎页面' }
        },
        {
          path: '/yingye',
          component: resolve => require(['../components/page/baobiaozhongxin/Yingye.vue'], resolve),
          meta: { title: '营业汇总' }
        },
        {
          path: '/jishi',
          component: resolve => require(['../components/page/baobiaozhongxin/Jishi.vue'], resolve),
          meta: { title: '技师业绩' }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    }
    // {
    //   path: '/404',
    //   component: resolve => require(['../components/page/404.vue'], resolve)
    // },
    // {
    //   path: '/403',
    //   component: resolve => require(['../components/page/403.vue'], resolve)
    // },
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
