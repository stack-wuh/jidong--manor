<template>
  <section class='my-page'>
    <my-popup
      @on-close="handleClose" 
      subText="使用寻宝卡寻宝, 单次最多寻宝24小时"
      v-model="isShow">
        <img slot="title" class="m-header" :src="require('~~/index/bg_search.png')" alt="title">
        <section class="b-list">
          <section
            v-for="(item, index) in List"
            :key="item + + index + 'b'"
            class="b-item"
            :style="item.style">
          </section>
        </section>
    </my-popup>
  </section>
</template>

<script>
 import MyPopup from '@c/popup/main.vue'
 import DialogClose from '@/mixins/close.js'
 const List = [
   {
     id: 1,
     style: {
       backgroundImage: 'url('+ require('~~/search/icon_1.png') +')'
     }
   },
   {
     id: 2,
     style: {
       backgroundImage: 'url('+ require('~~/search/icon_2.png') +')'
     }
   },
   {
     id: 3,
     style: {
       backgroundImage: 'url('+ require('~~/search/icon_3.png') +')'
     }
   },
   {
     id: 4,
     style: {
       backgroundImage: 'url('+ require('~~/search/icon_4.png') +')'
     }
   }
 ]
 export default{
  name: 'SearchPageIndex',
  components: {
    MyPopup
  },
  inject: ['Home'],
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      List,
      isShow: false
    }
  },
  methods: {},
  created(){
    setTimeout(() => {
      this.isShow = true
    }, 300)
  },
  mounted(){
    this.$bus.$on('onShowPopupSearch', (e) => {
      this.isShow = e
    })
  },
  mixins: [DialogClose]
 }
</script>

<style scoped lang='scss'>
@import '../homePageManage/styles/index.scss';
@import '@a/styles/base.scss';
.my-page {
  position: fixed;
  bottom: 0;
  left: 0;

  .m-header {
    @extend .b-header;
  }
  .b-list {
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .b-item {
    @extend .backgorund-image-pre;
    width: 4rem;
    height: 5.5rem;
    margin-right: .4rem;
  }
}
</style>