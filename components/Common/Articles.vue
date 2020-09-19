<template>
  <div>
    <!-- <template v-if="$fetchState.pending">
      <p class="text-center text-orange-500 text-md py-6 px-4">
        Cargando los artículos...
      </p>
    </template>
    <template v-else-if="$fetchState.error">
      <p class="text-center text-red-500 text-md py-6 px-4" >Error al cargar los artículos</p>
    </template>
    <template v-else>
      <div class="articles mt-12"
        :class="{'only-one': articles.length == 1}">
        <div class="articles__article"
          v-for="article in articles"
          :key="article._id">
          <Article :articulo="article" />
        </div>
      </div>
    </template> -->
    <div class="articles"
      :class="{'only-one': articles.length == 1}">
      <div class="articles__article"
        v-for="article in articles"
        :key="article._id">
        <Article :articulo="article" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LastArticles",
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
  // data() {
  //   return {
  //     articles: []
  //   }
  // },
  // async fetch() {
  //   this.articles = await this.$axios.$get('https://strapi-velad-conmigo.herokuapp.com/articulos?publico=true&_sort=createdAt:DESC&_limit=5');
  // },
  // fetchOnServer: false,
  // activated() {
  //   if (this.$fetchState.timestamp <= Date.now() - 60000) {
  //     this.$fetch()
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.articles__article {
  flex: 1 1 16rem;
  margin: 20px;

  @include respond(md) {
    flex: 0 1 16rem;
  }
}

.articles.only-one {
  &__article {
    flex: 0 1 100%;

    @include respond(sm) {
      flex: 0 1 400px;
    }
  }
}
</style>
