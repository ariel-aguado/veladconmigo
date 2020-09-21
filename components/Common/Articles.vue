<template>
  <div class="flex flex-wrap justify-center">
    <Article v-for="article in articles"
      :key="article._id"
      :articulo="article"
      :side="side"
      :one="articles.length == 1" />
  </div>
</template>

<script>

export default {
  name: "Articles",
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    side: {
      type: Boolean,
      default: false
    }
  }
}
</script>
