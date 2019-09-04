export const Events = {
  methods: {
    handleEmitter(name, params){
      this.$bus.$emit(name, params)
    }
  }
}