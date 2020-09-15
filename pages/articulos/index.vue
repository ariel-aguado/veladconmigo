<template>
  <div class="h-screen grid items-center justify-center">
    <h1 class="font-display font-bold text-3xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-300">Estará listo pronto!!!</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    async fetch() {
      // this.articules = await this.$strapi.find('articules');
      // console.log('articules :>> ', this.articules);
    }
  }
</script>

<style lang="scss" scoped>

</style>
