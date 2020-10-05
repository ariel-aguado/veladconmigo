<template>
  <div>
    <p v-if="count" class="text-center text-sm font-display text-orange-900">{{ articlesCountText }}</p>
    <div v-if="tags.length" class="text-center mt-5 px-5">
      <Tags :tags="tags" />
    </div>
    <div class="article-list" :class="[articleGrid, side ? 'side' : '', noArticlesTop ? 'mt-0' : 'mt-8']">
      <Article v-for="article in articles"
        :key="article._id"
        :articulo="article"
        :one="articles.length == 1"
        :side="side"
        :medium="medium" />
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
    },
    count: {
      type: Boolean,
      default: true
    },
    noArticlesTop: {
      type: Boolean,
      default: false
    },
    medium: {
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
  gap: 1.5rem;

  &.one,
  &.two {
    grid-template-columns: repeat(auto-fit, minmax(0, 23rem));
  }

  &.side {
    grid-template-columns: 1fr;
    // row-gap: 2rem;

    & > a {
      margin: 0;
    }

    @include respond(lg) {
      grid-template-columns: minmax(0, 23rem);
    }
  }

  // &.flexible {

  //   & > a:nth-of-type(1) {
  //     grid-area: first;
  //   }
  //   & > a:nth-of-type(2) {
  //     grid-area: second;
  //   }
  //   & > a:nth-of-type(3) {
  //     grid-area: third;
  //   }

  //   grid-template-areas:
  //   "first"
  //   "second"
  //   "third";

  //   @include respond(md) {
  //     grid-template-areas:
  //     "first second"
  //     "third third";
  //   }

  //   @include respond(xl) {
  //     grid-template-areas:
  //     "first second third";
  //   }
  // }
}
</style>
