<!--
 * @Autor: zhangpan
 * @Date: 2020-04-07 18:28:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-07 19:20:43
 -->
<!--  -->
<template>
    <div class='m-wrap left'>
        <nav>
		    <div v-for="(item,index) in navlist" :key="index">
                <div>
                    <a :class=" $route.name == item.url ?'selected':''" @click="reseturl(item.url)">{{item.name}}</a>
                    <div :class="liItem=='banner'||liItem=='adsense'||liItem=='notice'?'subnav active':'subnav'">
                        <div v-for="(items,i) in item.subnav" :key="i+1">
                            <a v-if="items.url==liItem" class="selected">{{items.name}}</a>
                            <a v-else @click="reseturl(items.url)">{{items.name}}</a>
                        </div>
                    </div>
                </div>
                <!-- <div v-else-if="item.url=='column'||item.url=='role'||item.url=='member'||item.url=='company'||item=='target'">
                    <a :class="liItem=='column'||liItem=='role'||liItem=='member'||liItem=='company'||liItem=='target'?'selected':''" @click="reseturl(item.url)">{{item.name}}</a>
                    <div :class="liItem=='column'||liItem=='role'||liItem=='member'||liItem=='company'||liItem=='target'?'subnav active':'subnav'">
                        <div v-for="(items,j) in item.subnav" :key="j">
                            <a v-if="items.url==liItem" class="selected">{{items.name}}</a>
                            <a v-else @click="reseturl(items.url)">{{items.name}}</a>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <a v-if="item.url==liItem" class="selected">{{item.name}}</a>
                    <a v-else @click="reseturl(item.url)">{{item.name}}</a>
                </div> -->
            </div>
        </nav>
    </div>
</template>

<script>

export default {
  data () {
    return {
      token: '',
      defaultinfo: {},
      userinfo: {},
      showpop: false,
      liItem: 'news',
      navlist: [
        { name: '资讯', url: 'news' },
        {
          name: '系统',
          url: 'systeam',
          subnav: [
            { name: '美股公司', url: 'uscompany' },
            { name: '分类维护', url: 'cotarage' },
            { name: '成员管理', url: 'member' }
          ]
        }
      ]
    }
  },
  methods: {
    reseturl (data) {
      console.log(data)
      // 耳机菜单的
      // if (data == 'systeam') {
      //     this.$router.push({name: data});
      // }
      this.$router.push({ name: data })
    }
  },
  created () {
    console.log(this.$route.name)
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

    }
</style>
