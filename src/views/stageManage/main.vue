<template>
  <section class='my-page'>
    <my-popup
      @on-close="handleClose"
      :styles="{backgroundColor: '#F5F5F5'}"
      subText="使用金豆购买道具, 加速产蛋疯狂寻宝"
      v-model="isShow">
      <img slot="title" class="b-header" :src="require('~~/index/bg_stage.png')" alt="title">
      <section class="b-list">
        <section 
          v-for="(item, index) in List"
          :key="item.id + index + 'd'"
          class="b-item flex-wrap flex-main__between flex-align__center">
            <div class="lf" :style="item.h_style"></div>
            <div class="cc">
              <p>{{item.name}}</p>
              <p>{{item.sub}}</p>
            </div>
            <div class="rg flex-wrap flex-wrap__column">
              <p class="rg-tips">{{item.payfor}}金豆</p>
              <button>{{item.btnText}}</button>
            </div>
        </section>
      </section>
    </my-popup>
  </section>
</template>

<script>
 import MyPopup from '@c/popup/main.vue'
 import Close from '@/mixins/close.js'
 const List = [
   {
     id: 1,
     name: '加速10分钟卡',
     sub: '使用后产蛋加速10分钟',
     btnText: '购买',
     payfor: '200',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_1.png') +')'
     }
   },
   {
     id: 2,
     name: '加速30分钟卡',
     sub: '使用后产蛋加速30分钟',
     btnText: '购买',
     payfor: '550',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_2.png') +')'
     }
   },
   {
     id: 3,
     name: '加速1小时卡',
     sub: '使用后产蛋加速1小时',
     btnText: '购买',
     payfor: '1100',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_3.png') +')'
     }
   },
   {
     id: 4,
     name: '加速2小时卡',
     sub: '使用后产蛋加速2小时',
     btnText: '购买',
     payfor: '2000',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_4.png') +')'
     }
   },
   {
     id: 5,
     name: '寻宝1小时卡',
     sub: '使用后寻宝增加1小时',
     btnText: '购买',
     payfor: '500',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_5.png') +')'
     }
   },
   {
     id: 6,
     name: '寻宝3小时卡',
     sub: '使用后寻宝增加3小时',
     btnText: '购买',
     payfor: '1400',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_6.png') +')'
     }
   },
   {
     id: 7,
     name: '寻宝6小时卡',
     sub: '使用后寻宝增加6小时',
     btnText: '购买',
     payfor: '2800',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_7.png') +')'
     }
   },
   {
     id: 8,
     name: '寻宝12小时卡',
     sub: '使用后增加12小时',
     btnText: '购买',
     payfor: '5000',
     h_style: {
       backgroundImage: 'url('+ require('~~/stage/icon_8.png') +')'
     }
   }
 ]
 export default{
  name: 'StagePageIndex',
  components: {
    MyPopup
  },
  props: {},
  inject: ['Home'],
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
    }, 400)
  },
  mounted(){
    this.$bus.$on('onShowPopupStage', (e) => {
      let [f] = e
      this.isShow = f
    })
  },
  mixins: [Close]
 }
</script>

<style scoped lang='scss'>
@import '../homePageManage/styles/index.scss';
@import '../../assets/styles/base.scss';
.my-page {
  position: fixed;
  bottom: 0;
  left: 0;

  .m-header {
    @extend .b-header;
  }
  .b-list {
    min-height: 5rem;
    max-height: 6.5rem;
    overflow-y: scroll;
    overflow-x: hidden;
    .b-item {
      align-items: center;
      padding: .4rem .4rem;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0px 6px 0px 0px rgba(232,232,232,0.3);

      .lf {
        @extend .backgorund-image-pre;
        width: 1.4rem;
        height: 1.8rem;
        margin-right: .3rem;
      }
      .cc {
        flex: 1;
        font-size: .26rem;
        p:first-of-type {
          font-size: .4rem;
          line-height: 2em;
        }
      }
      .rg {
        align-items: center !important;
        &-tips {
          font-size: .24rem;
          color: #FFB41F;
          line-height: 2em;
        }
        button {
          @extend .button-default;
          color: #fff;
          background-color: #FFB41F;
        }
      }
    }
    .b-item:not(:last-of-type) {
      margin-bottom: .6rem;
    }
  }
}
</style>