import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import elementUI from '@/components/elementUI.js'
import '@/styles/index.scss' // global css 包括elementUI css
import '@/icons'

// 注册全局组件
elementUI.install(Vue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
