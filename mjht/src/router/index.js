import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fwgl from '@/components/Fwgl'
import Dpgl from '@/components/Dpgl'
import Rzdj from '@/components/Rzdj'
import Kmjl from '@/components/Kmjl'
import Sbgl from '@/components/Sbgl'
import Cjlb from '@/components/Caiji'
import Xxtz from '@/components/Xxtz'
import Ycyj from '@/components/Ycyj'
import Sqgl from '@/components/Xtgl/Sqgl'
import Xqgl from '@/components/Xtgl/Xqgl'
import Yhgl from '@/components/Xtgl/Yhgl'
import Jsgl from '@/components/Xtgl/Juese'
import Htmb from '@/components/Xtgl/Htmb'
import Dpxq from '@/components/Dpxq'
import Fwxq from '@/components/Fwxq'
import Rzxq from '@/components/Rzxq'
import Login from '@/components/Login'
import Ckdp from '@/components/Ckdp'
// 懒加载方式，当路由被访问的时候才加载对应组件
// const Login = resolve => require(['@/components/Login'], resolve)
Vue.use(Router)
let router = new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'Login'
    },
    meta: {allowBack: false}
  }, {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {allowBack: false}
  },
  {
    path: '/Home',
    component: Home,
    meta: {allowBack: false},
    children: [
      {
        path: '/',
        name: 'dpgl',
        component: Dpgl
      },
      {
        path: 'Fwgl',
        name: 'Fwgl',
        component: Fwgl
      },
      {
        path: 'Caiji',
        name: 'cjlb',
        component: Cjlb
      },
      {
        path: 'Rzdj',
        name: 'Rzdj',
        component: Rzdj
      },
      {
        path: 'Kmjl',
        name: 'Kmjl',
        component: Kmjl
      },
      {
        path: 'Sbgl',
        name: 'Sbgl',
        component: Sbgl
      },
      {
        path: 'Xxtz',
        name: 'xxtz',
        component: Xxtz
      },
      {
        path: 'Ycyj',
        name: 'Ycyj',
        component: Ycyj
      },
      {
        path: 'Xtgl/Yonghu',
        name: 'Sqgl',
        component: Sqgl
      },
      {
        path: 'Xtgl/Xqgl',
        name: 'Xqgl',
        component: Xqgl
      },
      {
        path: 'Xtgl/Yhgl',
        name: 'Yhgl',
        component: Yhgl
      },
      {
        path: 'Xtgl/Juese',
        name: 'jsgl',
        component: Jsgl
      },
      {
        path: 'Xtgl/Htmb',
        name: 'Htmb',
        component: Htmb
      },
      {
        path: '/Dpxq',
        name: 'Dpxq',
        component: Dpxq,
        meta: {allowBack: false}
      },
      {
        path: '/Fwxq',
        name: 'Fwxq',
        component: Fwxq,
        meta: {allowBack: false}
      },
      {
        path: '/Rzxq',
        name: 'Rzxq',
        component: Rzxq,
        meta: {allowBack: false}
      }
    ]
  },
  // {
  //   path: '/Dpxq',
  //   name: 'Dpxq',
  //   component: Dpxq,
  //   meta: {allowBack: false}
  // },
  {
    path: '/Ckdp',
    name: 'Ckdp',
    component: Ckdp,
    meta: {allowBack: false}
  }]
})
// 访问之前，都检查下是否登录了
// router.beforeEach((to, from, next) => {
//  // console.log('to:' + to.path)
//  if (to.path.startsWith('/login')) {
//      window.sessionStorage.removeItem('access-token')
//      next()
//  } else {
//      let token = window.sessionStorage.getItem('access-token')
//      if (!token) {
//          next({ path: '/login' })
//      } else {
//          next()
//      }
//  }
// })

export default router
