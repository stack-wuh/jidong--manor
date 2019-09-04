<template>
  <section class='my-page'>
    <my-popup
     @on-close="() => { this.isShow = false }"
     subText="分享给好友, 让好友帮你加速产蛋吧"
     v-model="isShow">
      <img class="m-header" :src="require('~~/index/bg_runing.png')" alt="title">
      <section class="b-list flex-wrap flex-align__center flex-main__around">
        <section
          class="b-item flex-wrap flex-wrap__column flex-align__center flex-main__center" 
          v-for="(item,index) in List"
          :key="item.id + index + 'b'">
          <div class="e-img-box" :style="item.style"></div>
          <span class="e-tips">{{item.name}}</span>
        </section>
      </section>
    </my-popup>
  </section>
</template>

<script>
 import MyPopup from '@c/popup/main.vue'
 
 const List = [
   {
     id: 1,
     name: '朋友圈',
     style: {
       backgroundImage: 'url('+ require('~~/index/icon_wechat_circly.png') +')'
     },
   },
   {
     id:  2,
     name: '微信',
     style: {
       backgroundImage: 'url('+ require('~~/index/icon_wechat.png') +')'
     }
   },
   {
     id: 3,
     name: 'QQ',
     style: {
       backgroundImage: 'url('+ require('~~/index/icon_qq.png') +')'
     }
   },
  //  {
  //    id: 4,
  //    name: 'QQ空间',
  //    style: {}
  //  }
 ]
 export default{
  name: 'RunningPageIndex',
  components: {
    MyPopup
  },
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
    this.$bus.$on('onShowPopupRuning', (e) => {
      this.isShow = e
    })
  },
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
  .b-item {
    flex: 1;
    align-items: center;

    & > .e-img-box {
      width: 1rem;
      height: 1rem;
      margin-bottom: .3rem;
      border-radius: 50%;
      text-align: center;
      line-height: 1rem;
      box-sizing: border-box;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    & > .e-tips {
      color: #949799;
      font-size: 14px;
    }
  }
}
</style>