<template>
  <section class='my-page'>
    <my-popup
      @on-close="() => { this.isShow = false }" 
      subText="每天完成日常任务, 可获得生蛋寻宝专用道具"
      v-model="isShow">
        <img slot="title" class="m-header" :src="require('~~/index/bg_work.png')" alt="title">
        <section class="b-list">
          <section
            v-for="(item, index) in List"
            :key="item.id + index + 'b'"
            class="b-item flex-wrap flex-main__between flex-align__center"
            :class="'b-item-'+ item.id">
            <div :style="item.h_style" class="b-item__lf"></div>
            <div class="flex-empty b-item__cc">
              <p>{{item.name}}</p>
              <p>{{item.sub}}</p>
            </div>
            <button class="m-btm">{{item.btnText}}</button>
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
     name: '阅读资讯',
     sub: '10分钟加速卡 * 2张',
     h_style: {
       backgroundImage: 'url(' + require('~~/work/icon_1.png') + ')'
     },
     btnText: '去完成'
   },
   {
     id: 2,
     name: '观看奖励',
     sub: '30分钟加速卡 * 1张',
     h_style: {
       backgroundImage: 'url(' + require('~~/work/icon_2.png') + ')'
     },
     btnText: '领取'
   },
   {
     id: 3,
     name: '刷小视频',
     sub: '1小时寻宝卡 * 1张',
     h_style: {
       backgroundImage: 'url(' + require('~~/work/icon_3.png') + ')'
     },
     btnText: '去完成'
   },
   {
     id: 4,
     name: '分享内容',
     sub: '6小时寻宝卡 * 1张',
     h_style: {
       backgroundImage: 'url(' + require('~~/work/icon_4.png') + ')'
     },
     btnText: '领取'
   }
 ]
 export default{
  name: 'WorkPageIndex',
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
    this.$bus.$on('onShowPopupWork', (e) => {
      this.isShow = e
    })
  },
  mixins: []
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
    width: 100%;
    min-height: 4rem;
    max-height: 5.5rem;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .b-item {
    align-items: center;
    width: inherit;
    padding: .4rem .8rem .4rem .4rem;
    box-sizing: border-box;
    border-radius: 8px;

    &__lf {
      @extend .backgorund-image-pre;
      width: 1rem;
      height: 1rem;
      margin-right: .3rem;
      border-radius: 50%;
    }

    &__cc {
      color: #fff;
      p {
        font-size: .26rem;
      }
      p:first-of-type {
        font-size: .4rem;
      }
    }

    button {
      width: 1.4rem;
      padding: .14rem;
      font-size: 14px;
      outline: none;
      border: none;
      color: #FFBB33;
      border-radius: 20px;
      background-color: #fff;
      box-sizing: border-box;
    }
  }

  $bgs: (
    (1, #A781D6, #B38AE6),
    (2, #81ADD6, #8AB9E6),
    (3, #D6A86F, #E6B477),
    (4, #D67C7E, #E68587)
  );
  @each $index, $startc, $endc in $bgs {
    $red: red($endc);
    $green: green($endc);
    $blue: blue($endc);
    .b-item-#{$index} {
      background:linear-gradient(-10deg,$startc, $endc);
      box-shadow:0px 6px 0px 0px rgba($red, $green, $blue, .3);
    }
  }
  .b-item:not(:last-of-type) {
    margin-bottom: .6rem;
  }
}
</style>