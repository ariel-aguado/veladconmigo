<template>
  <nav>
    <ul class="hidden md:block">
      <li @click="$emit('vc-nav-click')">
        <nuxt-link
          class="
            nav-item
            font-display
            text-lg
            md:text-base
            px-6
            md:px-4
            py-4
            md:py-2
            rounded-lg
            bg-orange-600
            bg-opacity-0
            text-orange-600
            hover:text-white
            hover:bg-opacity-100
            transition-color
            duration-150"
            to="/articulos" exact>Artículos</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from "~/assets/images/icons/logo.svg?inline";

export default {
  name: 'NavList',
  props: {
    side: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" scoped>
.nav-item.nuxt-link-active {
  background-color: theme('colors.orange.600');
  color: #FFF;
}
</style>
