<template>
  <div class="b-wrap">
    <section class="b-main" :style="styles"></section>
    <HomeBtmMenu></HomeBtmMenu>
    <HomeSlideRight></HomeSlideRight>
    <HomeSlideLeft></HomeSlideLeft>
    <RouterView></RouterView>
  </div>
</template>

<script>
import HomeBtmMenu from './homePageManage/bottom/main'
import HomeSlideRight from './homePageManage/slide/right/main'
import HomeSlideLeft from './homePageManage/slide/left/main'

export default {
  name: 'Home',
  components: {
    HomeBtmMenu,
    HomeSlideRight,
    HomeSlideLeft
  },
  data(){
    return {
      styles: {
        backgroundImage: 'url('+ require('~~/index/bg_index.png') +')'
      }
    }
  }
}
</script>

<style lang="scss">
.b-wrap {
  width: 100vw;
  height: 100vh;

  .b-main {
    width: inherit;
    height: inherit;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
