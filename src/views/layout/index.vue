<!--
 * @Autor: zhangpan
 * @Date: 2020-04-07 14:30:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-07 18:49:24
 -->
<!--  -->
<template>
    <div class='m-wrap'>
        <my-header></my-header>
        <my-sidebar></my-sidebar>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MySidebar from '@/components/sidebar.vue'

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  computed: {},
  watch: {},
  components: { MyHeader, MySidebar }
}
</script>

<style lang='scss' scoped>
    .m-wrap {

    }
</style>
