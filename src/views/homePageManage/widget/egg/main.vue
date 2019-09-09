<template>
  <section class='my-page'>
    <div class="b-egg">
      <img class="b-egg__logo" :src="require('~~/index/bg_egg_small.png')" alt="egg">
      <my-progress 
        class="b-progress" 
        v-model="progress" 
        style="position: relative; top: -.2rem; width: 1.5rem;">
      </my-progress>
    </div>
  </section>
</template>

<script>
 import MyProgress from '@c/progress/main'
 export default{
  name: 'EggWidget',
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
  .b-egg {
    &__logo {
      position: relative;
      bottom: 10%;
      margin-left: 50%;
      transform: translateX(-50%);
      width: .8rem;
      max-width: auto;
    }
  }
  .b-progress {
    height: inherit;
    .b-progress--bar {
      height: inherit;
      border: 1px solid blue !important;
    }
  }
}
</style>