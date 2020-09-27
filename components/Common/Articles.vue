<template>
  <div>
    <p v-if="!side" class="text-center text-sm font-display text-orange-900">{{ articlesCountText }}</p>
    <div v-if="tags.length" class="text-center mt-5 px-5">
      <Tags :tags="tags" />
    </div>
    <div class="article-list mt-8" :class="[articleGrid, side ? 'side' : '']">
      <Article v-for="article in articles"
        :key="article._id"
        :articulo="article"
        :one="articles.length == 1" />
    </div>
  </div>
</template>

<script>
import { ArticleGrid } from '~/validators/Article';

export default {
  name: "Articles",
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    },
    grid: {
      required: false,
      type: String,
      default: 'three',
      validator: value => {
        return Object.keys(ArticleGrid).includes(value);
      }
    },
    side: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    articleGrid() {
      return ArticleGrid[this.grid];
    },
    articlesCountText() {
      const count = this.articles.length;
      return count == 1 ? `${count} artículo` : `${count} artículos`;
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  &.one,
  &.two {
    grid-template-columns: repeat(auto-fit, minmax(0, 23rem));
  }

  &.side {
    grid-template-columns: 1fr;
    row-gap: 2rem;

    & > a {
      margin: 0;
    }

    @include respond(md) {
      grid-template-columns: minmax(0, 23rem);
    }
  }
}
</style>
