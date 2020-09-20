<template>
  <div>
    <div class="articles"
      :class="{'only-one': (articles.length == 1 && !side)}">
      <div class="articles__article"
        :class="{'no-margin': side}"
        v-for="article in articles"
        :key="article._id">
        <Article :articulo="article" :side="side" />
      </div>
    </div>
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

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.articles__article {
  flex: 1 1 16rem;
  margin: 20px;

  &.no-margin {
    flex: 1 1 100%;
    margin: 0;
    margin-bottom: 1.5rem;
  }

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
