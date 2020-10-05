<template>
  <div class="placeholder-article" :class="[articleGrid]">
  <!-- <div class="flex flex-wrap justify-center mt-6"> -->
      <content-placeholders
        v-for="p in articlesPerPage"
        :key="`placeholder-${p}`"
        rounded
        class="content-placeholder-article">
        <content-placeholders-img class="content-placeholder-article__image"/>
        <content-placeholders-text :lines="2" class="mt-3 grid grid-cols-3 gap-3 justify-start w-full px-4"/>
        <div class="px-4">
          <content-placeholders-text :lines="2" class="mt-4"/>
        </div>
        <div class="mt-6 mb-4 px-4 flex items-center">
          <content-placeholders-img class="content-placeholder-article__cover"/>
          <content-placeholders-text class="content-placeholder-article__name-date" :lines="2"/>
          <content-placeholders-img class="content-placeholder-article__arrow"/>
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
      default: 9
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

  &.one,
  &.two {
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }

  // &.flexible {

  //   & > div:nth-of-type(1) {
  //     grid-area: first;
  //   }
  //   & > div:nth-of-type(2) {
  //     grid-area: second;
  //   }
  //   & > div:nth-of-type(3) {
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

.content-placeholder-article {
  // margin: 20px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 3px;

  // flex: 1 1 16rem;

  // @include respond(md) {
  //   flex: 0 1 16rem;
  // }

  &__image {
    border-radius: 20px;
    height: 210px;

    // @include respond(xl) {
    //   height: 282px;
    // }
  }

  &__cover,
  &__arrow {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

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
