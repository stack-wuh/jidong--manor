<template>
  <div class="b-wrap">
    <section class="b-main" :style="styles"></section>
    <HomeBtmMenu></HomeBtmMenu>
    <HomeSlideRight></HomeSlideRight>
    <HomeSlideLeft></HomeSlideLeft>
    <HomeMiddleChicken></HomeMiddleChicken>
    <!-- <HomeMiddleProgress 
      v-model="progress" 
      :style="p_style">
    </HomeMiddleProgress> -->
    <HomeMiddleEgg :style="p_style" ></HomeMiddleEgg>
    <HomeMiddleEggWait :style="w_style"></HomeMiddleEggWait>
    <HomeMiddleEggSearch :style="s_style"></HomeMiddleEggSearch>
    <RouterView></RouterView>
  </div>
</template>

<script>
import HomeBtmMenu from './homePageManage/bottom/main'
import HomeSlideRight from './homePageManage/slide/right/main'
import HomeSlideLeft from './homePageManage/slide/left/main'
import HomeMiddleChicken from './animateManage/eat/main'
import HomeMiddleProgress from '@c/progress/main'
import HomeMiddleEgg from '@v/homePageManage/widget/egg/main'
import HomeMiddleEggWait from '@v/homePageManage/widget/waitEgg/main'
import HomeMiddleEggSearch from '@v/homePageManage/widget/searchEgg/main'

export default {
  name: 'Home',
  components: {
    HomeBtmMenu,
    HomeSlideRight,
    HomeSlideLeft,
    HomeMiddleChicken,
    HomeMiddleEgg,
    HomeMiddleEggWait,
    HomeMiddleEggSearch
  },
  provide(){
    return {
      Home: this
    }
  },
  data(){
    return {
      styles: {
        backgroundImage: 'url('+ require('~~/index/bg_index.png') +')'
      },
      p_style: {
        position: 'absolute',
        left: '18%',
        top: '60%',
        transform: 'translateX(-50%) translateY(-50%)'
      },
      w_style: {
        position: 'absolute',
        left: '18%',
        top: '45%',
        transform: 'translateX(-50%) translateY(-50%)'
      },
      s_style: {
        position: 'absolute',
        left: '18%',
        top: '35%',
        transform: 'translateX(-50%) translateY(-50%)'
      },
      progress: 100
    }
  },
  methods: {
    goBackHome(){
      let { $router } = this
      $router.push({ path: '/' })
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
