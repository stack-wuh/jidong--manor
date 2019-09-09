<template>
  <section class='my-page'>
    <div class="b-wait">
      <p class="b-wait__label">剩余产蛋时间: </p>
      <my-progress v-model="progress" style="width: 2rem; position: relative; border-radius: 20px;">
        <img class="b-progress__pre" slot="prefix" :src="require('~~/index/icon_egg_wait.png')" alt="logo">
        <!-- <span class="b-progress__pre" slot="prefix"></span> -->
        <span class="b-progress__text" slot="inner">10小时40分</span>
      </my-progress>
    </div>
  </section>
</template>

<script>
 import MyProgress from '@c/progress/main';
 export default{
  name: 'WaitEgg',
  components: {
    MyProgress
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      progress: 0
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.my-page {
  min-width: 2rem;
  min-height: 2rem;
  .b-wait {
    width: inherit;
    height: inherit;

    &__label {
      font-size: .28rem;
      color: #4D3926;
    }
    .b-progress__pre {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      background-color: #fff;
      // background-image: url('../../../assets/images/index/icon_egg_wait.png');
    }
    .b-progress__text {
      margin-left: .5rem;
      color: #fff;
      font-size: .26rem;
      text-align: center;
    }
  }
}
</style>