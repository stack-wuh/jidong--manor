<template>
  <section class='b-right'>
    <section class="b-list flex-wrap flex-wrap__column">
      <div
       class="b-list__item" 
       v-for="(item, index) in List"
       :key="item.id + index + 's'"
       :style="item.style"
       @click.stop="handleJump(item)">
      </div>
    </section>
  </section>
</template>

<script>
 import { Events } from '@/mixins/events'
 const List = [
   {
     id: 1,
     name: '',
     pic: require('~~/index/bg_stage.png'),
     style: {
       backgroundImage: 'url(' + require('~~/index/bg_stage.png') + ')'
     },
     path: '/index/stage',
     events: [['onShowPopupStage', true]]
   },
   {
     id: 2,
     name: '',
     pic: require('~~/index/bg_smack.png'),
     style: {
       backgroundImage: 'url('+ require('~~/index/bg_smack.png') +')'
     }
   }
 ]
 export default{
  name: 'HomeSlideRight',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      List
    }
  },
  methods: {
    handleJump(item){
      let { path, events } = item
      let { $router, $route } = this
      events.forEach(([e, ...p]) => {
        this.handleEmitter(e, p)
      })
      if($route.path != path) {
        $router.push({ path, query: {} })
      }
    }
  },
  created(){},
  mixins: [Events]
 }
</script>

<style scoped lang='scss'>
.b-right {
  position: fixed;
  top: .8rem;
  right: .8rem;
  // width: 1.8rem;
  .b-list {
    &__item {
      width: 1.25rem;
      height: 1.25rem;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
    &__item:not(:last-of-type) {
      margin-bottom: .4rem;
    }
  }
}
</style>