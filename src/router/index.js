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
      redirect: '/welcome'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/welcome',
          component: resolve => require(['../components/page/Welcome.vue'], resolve),
          meta: { title: '欢迎页面' }
        },
        {
          path: '/yuyue',
          component: resolve => require(['../components/page/yuyuekanban/Yuyue.vue'], resolve),
          meta: { title: '预约看板' }
        },
        {
          path: '/dingdan',
          component: resolve => require(['../components/page/dingdanguanli/Dingdan.vue'], resolve),
          meta: { title: '订单管理' }
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
        },
        {
          path: '/yingxiao',
          component: resolve => require(['../components/page/yingxiaoguanli/Yingxiao.vue'], resolve),
          meta: { title: '营销活动' }
        },
        {
          path: '/huodong',
          component: resolve => require(['../components/page/yingxiaoguanli/Huodong.vue'], resolve),
          meta: { title: '活动策略' }
        },
        {
          path: '/huiyuan',
          component: resolve => require(['../components/page/vip/Huiyuan.vue'], resolve),
          meta: { title: '会员中心' }
        },
        {
          path: '/pinpai',
          component: resolve => require(['../components/page/shangjiaguanli/Pinpai.vue'], resolve),
          meta: { title: '品牌管理' }
        },
        {
          path: '/mendian',
          component: resolve => require(['../components/page/shangjiaguanli/Mendian.vue'], resolve),
          meta: { title: '门店管理' }
        },
        {
          path: '/fangjian',
          component: resolve => require(['../components/page/shangjiaguanli/Fangjian.vue'], resolve),
          meta: { title: '房间管理' }
        },
        {
          path: '/chuangwei',
          component: resolve => require(['../components/page/shangjiaguanli/Chuangwei.vue'], resolve),
          meta: { title: '床位管理' }
        },
        {
          path: '/pinxiangfenlei',
          component: resolve => require(['../components/page/shangjiaguanli/Pinxiangfenlei.vue'], resolve),
          meta: { title: '品项分类' }
        },
        {
          path: '/pinxiangguanli',
          component: resolve => require(['../components/page/shangjiaguanli/Pinxiangguanli.vue'], resolve),
          meta: { title: '品项管理' }
        },
        {
          path: '/bumen',
          component: resolve => require(['../components/page/renshiguanli/Bumen.vue'], resolve),
          meta: { title: '部门管理' }
        },
        {
          path: '/zhiwu',
          component: resolve => require(['../components/page/renshiguanli/Zhiwu.vue'], resolve),
          meta: { title: '职务管理' }
        },
        {
          path: '/renyuan',
          component: resolve => require(['../components/page/renshiguanli/Renyuan.vue'], resolve),
          meta: { title: '人员档案' }
        },
        {
          path: '/jishidangan',
          component: resolve => require(['../components/page/renshiguanli/Jishidangan.vue'], resolve),
          meta: { title: '技师档案' }
        },
        {
          path: '/jishidengji',
          component: resolve => require(['../components/page/renshiguanli/Jishidengji.vue'], resolve),
          meta: { title: '技师等级' }
        },
        {
          path: '/kefu',
          component: resolve => require(['../components/page/renshiguanli/Kefu.vue'], resolve),
          meta: { title: '客服交班' }
        },
        {
          path: '/chengshi',
          component: resolve => require(['../components/page/xitongguanli/Chengshi.vue'], resolve),
          meta: { title: '城市管理' }
        },
        {
          path: '/quyuguanli',
          component: resolve => require(['../components/page/xitongguanli/Quyuguanli.vue'], resolve),
          meta: { title: '区域管理' }
        },
        {
          path: '/canshu',
          component: resolve => require(['../components/page/xitongguanli/Canshu.vue'], resolve),
          meta: { title: '参数管理' }
        },
        {
          path: '/quyubangzhong',
          component: resolve => require(['../components/page/xitongguanli/Quyubangzhong.vue'], resolve),
          meta: { title: '区域帮钟' }
        },
        {
          path: '/juese',
          component: resolve => require(['../components/page/xitongguanli/Juese.vue'], resolve),
          meta: { title: '角色管理' }
        },
        {
          path: '/quanxian',
          component: resolve => require(['../components/page/xitongguanli/Quanxian.vue'], resolve),
          meta: { title: '权限管理' }
        },
        {
          path: '/shangzhong',
          component: resolve => require(['../components/page/xitongguanli/Shangzhong.vue'], resolve),
          meta: { title: '上钟类型' }
        },
        {
          path: '/zhifu',
          component: resolve => require(['../components/page/xitongguanli/Zhifu.vue'], resolve),
          meta: { title: '支付类型' }
        },
        {
          path: '/xiaoxifasong',
          component: resolve => require(['../components/page/xiaoxizhongxin/Xiaoxifasong.vue'], resolve),
          meta: { title: '消息发送设置' }
        },
        {
          path: '/xiaoxichaxun',
          component: resolve => require(['../components/page/xiaoxizhongxin/Xiaoxichaxun.vue'], resolve),
          meta: { title: '消息查询' }
        },
        {
          path: '/xiaoxihezi',
          component: resolve => require(['../components/page/xiaoxizhongxin/Xiaoxihezi.vue'], resolve),
          meta: { title: '消息发送设置' }
        },
        {
          path: '/gonggao',
          component: resolve => require(['../components/page/xiaoxizhongxin/Gonggao.vue'], resolve),
          meta: { title: '消息发送设置' }
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
