<template>
  <section class='my-page'>
    <my-popup
      subText="使用背包内的道具, 可以获得对应的奖励" 
      @on-close="handleClose
      "
      v-model="isShow">
        <img 
          class="m-header" 
          :src="require('~~/index/bg_package.png')" 
          slot="title" />
        <!-- <p class="m-sub">使用背包内的道具, 可以获得对应奖励</p> -->
        <section class="b-list">
          <section 
           v-for="(item, index) in List"
           class="b-item flex-wrap flex-wrap__column flex-align__center flex-main__between"
           :class="'b-item-' + index"
           :key="item.id + index + 'd'">
              <div class="f" :style="item.h_style"></div>
              <p class="m">{{item.name}}</p>
              <button>使用</button>
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
     name: '10分钟加速卡',
     h_style: {
       backgroundImage: 'url('+ require('~~/package/icon_1.png') +')'
     }
   },
   {
     id: 2,
     name: '30分钟加速卡',
     h_style: {
       backgroundImage: 'url('+ require('~~/package/icon_2.png') +')'
     }
   },
   {
     id: 3,
     name: '1小时加速卡',
     h_style: {
       backgroundImage: 'url('+ require('~~/package/icon_3.png') +')'
     }
   },
   {
     id: 4,
     name: '2小时加速卡',
     h_style: {
       backgroundImage: 'url('+ require('~~/package/icon_4.png') +')'
     }
   },
   {
     id: 5,
     name: '金豆卡',
     h_style: {
       backgroundImage: 'url('+ require('~~/package/icon_5.png') +')'
     }
   },
   {
     id: 6,
     name: '现金卡',
     h_style: {
       backgroundImage: 'url('+ require('~~/package/icon_6.png') +')'
     }
   }
 ]

 export default{
  name: 'PackageIndex',
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
    this.$bus.$on('onShowPopupPackage', (e) => {
      this.isShow = e
    })
  },
  mixins: [DialogClose]
 }
</script>

<style scoped lang='scss'>
@import '../homePageManage/styles/index.scss';
@import 'style/base.scss';
.my-page {
  position: fixed;
  bottom: 0;

  .m-header {
    @extend .b-header;
  }

  .m-sub {
    margin: 1rem 0 .5rem 0;
    text-align: center;
    font-size: .36rem;
  }
  .b-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: 5.5rem;
    max-height: 6rem;
    overflow-x: hidden;
    overflow-y: scroll;
    $List: (
      (0, #8AB9E6),
      (1, #B38AE6),
      (2, #E68587),
      (3, #E6B477),
      (4, #7ACCAB),
      (5, #B38AE6)
    );
    @each $idx, $startc in $List {
      .b-item-#{$idx} {
        border: 8px solid transparent;
        border-image: radial-gradient(circle, $startc 3px, #fff 1px, $startc) 8 stretch;
        .m {
          color: $startc;
          line-height: 2em;
        }
        button {
          border: 1px solid $startc;
          color: $startc;
        }
      }
    }
    .b-item {
      align-items: center;
      width: 30%;
      height: 4rem;
      padding: .4rem 0;
      margin-bottom: .3rem !important;
      box-sizing: border-box;
      border-radius: 8px;
      
      .f {
        @extend .backgorund-image-pre;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      button {
        @extend .button-default;
      }
      .b-item:nth-child(3n-1) {
        margin: 0 5%;
        text-align: center;
      }
      .b-item:nth-child(3n-2) {
        text-align: left;
      }
      .b-item:nth-child(3n){
        text-align: right;
      }

      @media screen and (max-width: 375px) {
        width: 45%;
        &:nth-child(2n) {
          margin-left: 10%;
        }
      }
    }
  }
}
</style>