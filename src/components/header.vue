<!--
 * @Autor: zhangpan
 * @Date: 2020-04-07 18:14:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-07 18:53:01
 -->
<!--  -->
<template>
    <div class='m-wrap'>
        <div class="header">
            <div class="size-18 color-a font-weight">编辑宝3.0.1</div>
            <div>
                <a href="javascript:void(0)" class="color-a">大大</a>
                <a href="javascript:void(0)" class="margin-l30" @click="showEditPop">编辑信息</a>
                <a href="javascript:void(0)" class="margin-l30" @click="loginOut">注销</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    showEditPop () {

    },
    loginOut () {

    }
  },
  created () {

  },
  mounted () {

  },
  computed: {},
  watch: {},
  components: {}
}
</script>

<style lang='scss' scoped>
    .m-wrap {
        .header{
            position: fixed;
            height: 50px;
            line-height: 50px;
            background: #ffffff;
            left: 0;
            top: 0;
            right: 0;
            z-index: 9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            &::after {
                position: absolute;
                height: 1px;
                background: #e7edff;
                left: 0;
                bottom: 0;
                right: 0;
                content: "";
            }
        }
    }
</style>
