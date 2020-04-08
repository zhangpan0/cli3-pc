/*
 * @Autor: zhangpan
 * @Date: 2020-04-07 16:41:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-07 16:44:40
 */
import axios from '@/api/http'

export function loginApi (data) {
  return axios.post('/index/login.html', data)
}
