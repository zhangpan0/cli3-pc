<!--
 * @Autor: zhangpan
 * @Date: 2020-04-07 14:22:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-07 17:46:28
 -->
<!--  -->
<template>
    <div class='m-wrap'>
        <div class="loginpop align-c">
            <div class="h-50 padding-t20"></div>
            <img class="logo" src="@/assets/images/logo.jpg">
            <div class="line-h-50 size-18 align-c">编辑宝后台管理登录</div>
            <ul class="loginform">
            <li>
                <el-input v-model="loginForm.name" size="small" placeholder="手机号/邮箱"></el-input>
            </li>
            <li>
                <el-input v-model="loginForm.password" size="small" placeholder="密码" show-password @keyup.enter.native="initLogin"></el-input>
            </li>
            <li>
                <el-button type="primary" size="small" class="w-100 btn btn-a" @click.native.prevent="initLogin">登录</el-button>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { loginApi } from '@/api/permiss'
export default {
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      token: ''
    }
  },
  methods: {
    async initLogin () {
      try {
        const data = await loginApi(this.loginForm)
        const token = data.access_token
        this.$store.commit('LOGIN_IN', token)
        this.$router.push({ name: 'home' })
      } catch (e) {
        console.log(e)
      }
    }
  },
  created () {

  },
  mounted () {
    // let this = this;
    // this.token = sessionStorage.getItem("token");
    // if(this.token){
    // this.$router.push({ name:'index'})
    // }
  },
  computed: {},
  watch: {},
  components: {}
}
</script>

<style lang='scss' scoped>
    .m-wrap {
        .logo {
            width: 75px;
            height: 75px;
        }
    }
</style>
