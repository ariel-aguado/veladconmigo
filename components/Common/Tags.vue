<template>
  <ul class="tags inline-block">
    <li class="tag inline-block relative"
      v-for="(tag, index) in sortedTags"
      :key="`tag${index + 1}`">
      <nuxt-link :to="`/temas/${tag}`"
        :class="{ 'article-tag': isArticleTag }"
        class="
          text-xs
          text-orange-900
          bg-orange-200
          rounded-full
          hover:bg-orange-100
          transition-colors
          duration-200
          ease-linear
          px-2">
        {{ tag }}
      </nuxt-link></li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    tagtype: {
      type: String,
      default: 'list'
    }
  },
  computed: {
    sortedTags() {
      return this.tags.sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        else if (a > b) return 1;
        return 0;
      });
    },
    isArticleTag() {
      return this.tagtype == 'article';
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  font-size: 16px;

  @include respond(md) {
    font-size: 18px;
  }

  & .article-tag {
    @media only screen and (max-width: 767px) {
      @apply bg-orange-300;
    }
  }

  & .article-tag:hover {
    @media only screen and (max-width: 767px) {
      @apply bg-orange-200;
    }
  }
}

.tag:not(:last-child) {
  padding-right: 20px;
}

.tag:not(:last-child):after {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 3px;
  height: 3px;
  border-radius: 30px;
  background-color: theme('colors.orange.900');
}
</style>
