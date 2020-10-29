<template>
  <div class="flex sm:flex-wrap space-x-2 overflow-x-auto" :class="[articleTagListClass]">
    <nuxt-link :to="`/temas/${tag}`"
      v-for="(tag, index) in sortedTags"
      :key="`tag${index + 1}`"
      :class="[articleTagClass]"
      class="
        text-xs
        rounded-md
        text-orange-900
        transition-colors
        duration-200
        ease-linear
        px-2
        py-1
        mb-2
        focus:bg-orange-900
        focus:text-white
        focus:outline-none"
      style="white-space: nowrap;">
      {{ tag }}
    </nuxt-link>
  </div>
  <!-- <ul class="tags inline-block">
    <li class="tag inline-block relative"
      v-for="(tag, index) in sortedTags"
      :key="`tag${index + 1}`">
      <nuxt-link :to="`/temas/${tag}`"
        :class="[articleTagClass]"
        class="
          text-xs
          rounded-full
          text-orange-900
          transition-colors
          duration-200
          ease-linear
          px-2
          py-1">
        {{ tag }}
      </nuxt-link></li>
  </ul> -->
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
    articleTagClass() {
      const baseClass = 'bg-orange-200 hover:bg-orange-100';
      return this.tagtype == 'author' ? 'bg-orange-300 hover:bg-orange-200 md:bg-orange-200 md:hover:bg-orange-100' : 'bg-orange-200 hover:bg-orange-100';
    },
    articleTagListClass() {
      return this.tagtype == 'article' || this.tagtype == 'author' ? 'justify-start' : 'sm:justify-center'
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

  // & .article-tag {
  //   @media only screen and (max-width: 767px) {
  //     @apply bg-orange-300;
  //   }
  // }

  // & .article-tag:hover {
  //   @media only screen and (max-width: 767px) {
  //     @apply bg-orange-200;
  //   }
  // }
}

// .tag:not(:last-child) {
//   margin-right: 10px;
//   margin-bottom: 10px;
// }

// .tag:not(:last-child):after {
//   content: "";
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   width: 3px;
//   height: 3px;
//   border-radius: 30px;
//   background-color: theme('colors.orange.900');
// }
</style>
