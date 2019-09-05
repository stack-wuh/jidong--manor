<template>
  <section class='my-page'>
    <section class="b-eat"></section>
  </section>
</template>

<script>
 export default{
  name: 'AnimateEat',
  components: {},
  props: {},
  watch: {},
  computed: {},
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
@import 'style/base.scss';
.my-page {
  @extend .backgorund-image-pre;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 4rem;
  height: 4rem;
  background: url('../../../assets/images/gifs/eat.gif') 0 0 no-repeat;
  background-size: contain;
}
</style>