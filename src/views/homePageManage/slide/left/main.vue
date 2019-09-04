<template>
  <section class='b-left'>
    <section class="b-list flex-wrap">
      <section
       v-for="(item, index) in List"
       :key="item.id + index + 'd'"
       :style="item.style"
       class="b-item">
       <span class="m-tips">{{item.tips}}</span>
      </section>
    </section>
  </section>
</template>

<script>
 const List = [
   {
     id: 1,
     pic: require('~~/index/avatar.jpg'),
     style: {
       backgroundImage: 'url(' + require('~~/index/avatar.jpg') + ')'
     }
   },
   {
     id: 2,
     tips: 20,
     pic: require('~~/index/bg_egg_big.png'),
     style: {
       backgroundImage: 'url('+ require('~~/index/bg_egg_big.png') +')'
     }
   }
 ]
 export default{
  name: 'HomePageSlideLeft',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      List
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.b-left {
  position: fixed;
  top: .8rem;
  left: .8rem;
  width: 3rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 50px;

  .b-list {
    height: 1.5rem;
    align-items: center !important;
  }
  .b-item {
    position: relative;
    flex: 1;
    height: 1.2rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    border-radius: 50%;

    .m-tips {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: #fff;
      font-size: .4rem;
      &::after {
        content: '+';
        color: #fff;
      }
    }
  }
}
</style>