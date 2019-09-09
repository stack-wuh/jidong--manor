<template>
  <section class='b-progress'>
    <section class="b-pregress--bar" :style="barBorder">
      <div class="b-prefix">
        <slot name="prefix"></slot>
      </div>
      <div class="b-outer" :style="pStyle">
        <div class="b-inner">
          <span v-if="!$slots.inner" class="b-inner__text">{{value}}%</span>
          <slot v-else name="inner"></slot>
        </div>
      </div>
      <div class="b-suffix">
        <slot name="suffix"></slot>
      </div>
    </section>
  </section>
</template>

<script>
 export default{
  name: 'MyProgress',
  components: {},
  props: {
    value: [String, Number],
    backgroundColor: {
      type: String,
      default: '#ff6c4f'
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {},
  computed: {
    pStyle(){
      var style = {
        background: `linear-gradient(to right, ${this.backgroundColor} ${this.value}% , #fff)`
      }
      return style
    },
    barBorder(){
      var style = {
        borderColor: this.backgroundColor
      }
      return style
    }
  },
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '../../assets/styles/base.scss';
$-color--default: #FF6C4F;
.b-progress {
  width: inherit;
  height: inherit;
  min-height: .3rem;
  min-width: 1rem;
  border-radius: 8px;
  // overflow: hidden;
  z-index: 999;
  .b-pregress--bar {
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border-radius: 8px;
    border: 1px solid $-color--default;
    overflow: hidden;
    .b-prefix {}
    .b-outer {
      width: inherit;
      height: inherit;
      min-height: .3rem;
      min-width: 1rem;
     
      .b-inner {
        position: relative;
        width: inherit;
        height: inherit;
        &__text {
          @extend .position-level;
          font-size: .26rem;
          line-height: 1.5;
          color: #fff;
          text-align: center;
        }
      }
    }
    .b-suffix {}
  }
}
</style>