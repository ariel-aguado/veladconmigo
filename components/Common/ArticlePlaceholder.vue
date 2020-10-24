<template>
  <div class="placeholder-article" :class="[articleGrid]">
    <content-placeholders
      v-for="p in articlesPerPage"
      :key="`placeholder-${p}`"
      rounded
      class="bg-white overflow-hidden" style="padding: 3px; border-radius: 20px;">
      <content-placeholders-img class="rounded-3xl" style="height: 200px;" />
      <content-placeholders-text :lines="2" class="mt-3 grid grid-cols-3 gap-3 justify-start w-full px-4"/>
      <div class="px-4">
        <content-placeholders-text :lines="2" class="mt-4"/>
      </div>
      <div class="mt-6 mb-4 px-4 flex items-center">
        <content-placeholders-img class="rounded-full cover"/>
        <content-placeholders-text class="content-placeholder-article__name-date" :lines="2"/>
        <content-placeholders-img class="rounded-full cover"/>
      </div>
    </content-placeholders>
  </div>
</template>

<script>
import { ArticleGrid } from '~/validators/Article';

export default {
  props: {
    articlesPerPage: {
      type: Number,
      default: 12
    },
    grid: {
      required: false,
      type: String,
      default: 'three',
      validator: value => {
        return Object.keys(ArticleGrid).includes(value);
      }
    },
  },
  computed: {
    articleGrid() {
      return ArticleGrid[this.grid];
    },
  }
}
</script>

<style lang="scss" scoped>
.placeholder-article {
  gap: 1.5rem;

  &.one {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-content: center;

    @include respond(md) {
      grid-template-columns: repeat(auto-fit, minmax(0, 18rem));
    }
  }

  &.two {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-content: center;

    @include respond(md) {
      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    }

    @include respond(lg) {
      grid-template-columns: repeat(auto-fit, minmax(0, 18rem));
    }
  }
}

.content-placeholder-article {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 3px;

  &__name-date {
    width: 100%;
    flex: 0 1 50%;
    text-align: left;
    margin-right: auto;
    margin-left: 10px;

    &.vue-content-placeholders-text .vue-content-placeholders-text__line {
      margin-bottom: 0 !important;
    }
  }
}
</style>
