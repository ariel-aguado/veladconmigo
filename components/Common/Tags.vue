<template>
  <ul class="tags inline-block">
    <li class="tag text-sm inline-block relative font-bold text-orange-500 hover:text-orange-300 transition-colors duration-200 ease-linear" v-for="(tag, index) in tags" :key="`tag${index + 1}`"><nuxt-link to="">{{ tag }}</nuxt-link></li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
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
