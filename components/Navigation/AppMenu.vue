<template>
  <nav>
    <ul class="font-display fixed bottom-0 left-0 z-20 bg-white w-full flex items-center justify-evenly md:hidden"
      style="height: 65px; box-shadow:0 -10px 10px rgba(0,0,0,.2);">
      <li>
        <nuxt-link to="/">
          <AppLogo />
          <div class="text-sm font-bold">Inicio</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="" to="/articulos">
          <ArticleIcon />
          <div class="text-sm font-bold">Artículos</div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import AppLogo from "~/assets/images/icons/logo.svg?inline";
  import ArticleIcon from "~/assets/images/icons/article.svg?inline";

  export default {
    components: {
      AppLogo,
      ArticleIcon
    }
  }
</script>

<style lang="scss" scoped>
a {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply justify-center;
  @apply transition;
  @apply transition-all;
  @apply duration-500;
  @apply ease-in-out;
  @apply text-orange-900;
}

svg {
  overflow: visible;
  width: 1em;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -.125em;
}

.nuxt-link-exact-active {
  @apply text-orange-600;
}
</style>
