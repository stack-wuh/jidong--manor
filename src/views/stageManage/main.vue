<template>
  <section class='my-page'>
    <my-popup
      subText="使用金豆购买道具, 加速产蛋疯狂寻宝"
      v-model="isShow">
      <img slot="title" class="b-header" :src="require('~~/index/bg_stage.png')" alt="title">
      <section class="b-list">
        
      </section>
    </my-popup>
  </section>
</template>

<script>
 import MyPopup from '@c/popup/main.vue'
 export default{
  name: 'StagePageIndex',
  components: {
    MyPopup
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      isShow: true
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '../homePageManage/styles/index.scss';
.my-page {
  position: fixed;
  bottom: 0;
  left: 0;

  .m-header {
    @extend .b-header;
  }
}
</style>