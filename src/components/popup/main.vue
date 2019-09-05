<template>
  <section class='my-page'>
    <section v-show="value" @click="handleClick" class="b-dialog"></section>
    <transition name="slide" mode="out-in">
      <section v-if="value" class="b-wrap" :style="styles">
        <header class="e-header flex-wrap flex-align__center flex-main__around">
          <div class="m-lf"></div>
          <div class="m-cc">
            <span v-if="!$slots.title">title</span>
            <slot v-else name="title"></slot>
          </div>
          <div @click="() => { $emit('on-close') }" class="m-rg">
            <span class="m-icon-icon_roundclose"></span>
          </div>
        </header>
        <p v-if="subText" class="tips">{{subText}}</p>
        <p v-else class="tips"></p>
        <slot name="subtext"></slot>
        <slot></slot>
      </section>
    </transition>
  </section>
</template>

<script>
 export default{
  name: 'MyPopup',
  components: {},
  model: {
    prop: 'value',
    event: 'click'
  },
  props: {
    value: Boolean,
    subText: String,
    styles: Object
  },
  watch: {},
  computed: {},
  data(){
    return {
      isShow: true
    }
  },
  methods: {
    handleClick(){
      this.$emit('click', false)
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
}
.my-page {
  width: inherit;
  height: inherit;
  // overflow-x: hidden;
  // overflow-y: scroll;

  .b-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 8888 !important;
  }
  .b-wrap {
    position: relative;
    width: 100vw;
    height: auto;
    padding: .4rem .3rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 9999 !important;

    header.e-header {
      position: relative;
      .m-lf, .m-cc, .m-rg {
        flex: 1;
      }
      .m-lf {
        text-align: left;
      }
      .m-cc {
        text-align: center;
      }
      .m-rg {
        text-align: right;
        & > span {
          font-size: .4rem;
        }
      }
    }
    p.tips {
      margin: 1rem 0 .5rem 0;
      text-align: center;
      font-size: .32rem;
    }
  }
}
</style>