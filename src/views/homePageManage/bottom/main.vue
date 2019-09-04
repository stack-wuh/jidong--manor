<template>
  <footer class='my-page'>
    <section class="b-btm flex-wrap flex-main__around flex-align__stretch">
      <div
        class="flex-empty" 
        v-for="(item, index) in list"
        :key="item.id + index + 'b'"
        :style="item.style"
        @click.stop="handleJump(item)">
      </div>
    </section>
  </footer>
</template>

<script>
 import { Events }  from '@/mixins/events.js'
 export default{
  name: 'HomePageBottom',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      list: [
        {
          id: 1,
          pic: require('~~/index/bg_runing.png'),
          name: '',
          style: {
            backgroundImage: 'url(' + require('~~/index/bg_runing.png') + ')'
          },
          path: '/index/runing',
          events: [['onShowPopupRuning', true]]
        },
        {
          id: 2,
          pic: require('~~/index/bg_search.png'),
          name: '',
          style: {
            backgroundImage: 'url(' + require('~~/index/bg_search.png') + ')'
          },
          path: '/index/search',
          events: [['onShowPopupSearch', true]]
        },
        {
          id: 3,
          pic: require('~~/index/bg_work.png'),
          name: '',
          style: {
            backgroundImage: 'url(' + require('~~/index/bg_work.png') + ')'
          },
          path: '/index/working',
          events: [['onShowPopupWork', true]]
        },
        {
          id: 4,
          pic: require('~~/index/bg_package.png'),
          name: '',
          style: {
            backgroundImage: 'url(' + require('~~/index/bg_package.png') + ')'
          },
          path: '/index/package',
          events: [['onShowPopupPackage', true]]
        }
      ]
    }
  },
  methods: {
    handleJump(item) {
      let { path } = item
      let { $router, $route } = this
      Array.isArray(item.events) && item.events.forEach(([name, ...val]) => {
        this.handleEmitter(name, ...val)
      })
      // this.handleEmitter('onShowPopup', true)
      if (path !== $route.path) {
        $router.push({ path, query: {} })
      }
    }
  },
  created(){},
  mixins: [Events]
 }
</script>

<style scoped lang='scss'>
.my-page {
  position: fixed;
  bottom: 1.4rem;
  width: inherit;
  height: 80px;
  padding: 0 .6rem;
  box-sizing: border-box;

  .b-btm {
    height: inherit;

   & > div {
     width: 1.25rem;
     height: 1.25rem;
     background-size: contain;
     background-position: center center;
     background-repeat: no-repeat;
   }
  }
}
</style>