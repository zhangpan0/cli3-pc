/*
 * @Autor: zhangpan
 * @Date: 2020-04-07 17:35:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-07 17:43:00
 */

const home = {
  state: {
    UserToken: ''
  },
  	mutations: {
    LOGIN_IN (state, token) {
      state.UserToken = token
    },
    LOGIN_OUT (state) {
      state.UserToken = ''
    }
  	},
  actions: {

  }
}

export default home
