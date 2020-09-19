<template>
  <div class="articules py-16">
    <div class="container mx-auto">
      <h1 class="text-2xl text-orange-900 text-center uppercase">Artículos</h1>
      <p></p>
    </div>
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
