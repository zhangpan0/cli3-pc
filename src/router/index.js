import Vue from 'vue'
import Router from 'vue-router'
import eachHook from './hook'
import store from '../store'

const Login = resolve => require(['@/views/login/index.vue'], resolve)
const NotFound = resolve => require(['@/views/errorPage/404.vue'], resolve)
const Layout = resolve => require(['@/views/layout/index.vue'], resolve)
const News = resolve => require(['@/views/news/index.vue'], resolve)
const Systeam = resolve => require(['@/views/systeam/index.vue'], resolve)
const Uscompany = resolve => require(['@/views/uscompany/index.vue'], resolve)
const Member = resolve => require(['@/views/member/index.vue'], resolve)
const Cotarage = resolve => require(['@/views/cotarage/index.vue'], resolve)

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: '编辑宝3.0'
    }
  },
  {
    path: '',
    component: Layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true,
      title: '首页1'
    },
    children: [
      {
        path: 'news',
        component: News,
        name: 'news',
        meta: {
          title: '资讯',
          icon: 'news'
        }
      },
      {
        path: 'systeam',
        component: Systeam,
        name: 'systeam',
        redirect: 'uscompany',
        meta: {
          title: '系统',
          icon: 'systeam'
        },
        children: [
          {
            path: 'uscompany',
            component: Uscompany,
            name: 'uscompany',
            meta: {
              title: '美股公司',
              icon: 'Uscompany'
            }
          },
          {
            path: 'cotarage',
            component: Cotarage,
            name: 'cotarage',
            meta: {
              title: '成员管理',
              icon: 'cotarage'
            }
          },
          {
            path: 'member',
            component: Member,
            name: 'member',
            meta: {
              title: '成员管理',
              icon: 'member'
            }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

const createRouter = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
eachHook(createRouter)

// createRouter.beforeEach((to, from, next) => {
// if (!store.state.UserToken) {
//     if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
//         next()
//     } else {
//         next({ path: '/login' })
//     }
// } else {
//     if (to.path !== '/login') {
//         next()
//     } else {
//         next(from.fullPath)
//     }
// }
// })

export default createRouter
