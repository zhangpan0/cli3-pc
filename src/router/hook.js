/*
 * @Autor: zhangpan
 * @Date: 2020-04-07 14:08:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-07 14:10:35
 */
export default function eachHook (router) {
  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面  page title */
    if (to.meta.title) {
      document.title = to.meta.title
      // StatusBar.backgroundColorByName("white");
    } else {
      document.title = '大路演'
    }
    next()
  })
}
