<template>
  <ul class="tags inline-block">
    <li class="tag text-sm inline-block relative font-bold text-orange-500 hover:text-orange-900 transition-colors duration-200 ease-linear" v-for="(tag, index) in sortedTags" :key="`tag${index + 1}`"><nuxt-link :to="`/temas/${tag}`">{{ tag }}</nuxt-link></li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortedTags() {
      return this.tags.sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        else if (a > b) return 1;
        return 0;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background-color: theme('colors.orange.500');
}
</style>
