<template>
  <section class='my-page'>
    <my-popup
      subText="使用背包内的道具, 可以获得对应的奖励" 
      @on-close="() => { this.isShow = false }"
      v-model="isShow">
        <img 
          class="m-header" 
          :src="require('~~/index/bg_package.png')" 
          slot="title" />
        <!-- <p class="m-sub">使用背包内的道具, 可以获得对应奖励</p> -->
        <section class="b-list">
          <section 
           class="b-item"
           v-for="item in 6"
           :key="item">
           {{item}}
          </section>
        </section>
    </my-popup>
  </section>
</template>

<script>
 import MyPopup from '@c/popup/main.vue'
 export default{
  name: 'PackageIndex',
  components: {
    MyPopup
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
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
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '../homePageManage/styles/index.scss';
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
    .b-item {
      width: 30%;
      height: 4rem;
      margin-bottom: .3rem !important;
      border: 1px solid red;
      box-sizing: border-box;
      border-radius: 8px;
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