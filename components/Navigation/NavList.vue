<template>
  <nav class="vc-nav">
    <ul>
      <li @click="$emit('vc-nav-click')">
        <nuxt-link
          class="
            font-display
            px-4
            py-2
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

export default {
  name: 'NavList',
  props: {
    side: {
      type: Boolean,
      default: false
    }
  }
}
</script>

