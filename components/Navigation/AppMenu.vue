<template>
  <nav>
    <ul class="font-display fixed bottom-0 left-0 z-20 bg-white w-full flex items-center justify-evenly md:hidden h-20"
      style="box-shadow:0 -10px 10px rgba(0,0,0,.2);">
      <li>
        <nuxt-link to="/">
          <AppLogo />
          <div class="font-bold">Inicio</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="" to="/articulos">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="feather" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M467.1 44.9C438.24 16.04 401.59 0 361.59 0c-46.7 0-97.98 21.85-146.78 70.66l-85.75 85.76C54 231.47 56.69 352.92 72.69 405.37L7.03 471.03c-9.37 9.37-9.37 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0l65.6-65.6c17.44 5.3 42.43 9.15 70.88 9.15 57.19 0 128.04-15.48 178.13-65.57l85.76-85.75c90.61-90.62 88.32-189.75 25.76-252.3zM147.37 398.57L193.94 352h124.12c-44.62 41.83-106.87 48.46-140.61 48.46-11.41.01-21.29-.81-30.08-1.89zM350.58 320H225.94l64-64h123.81c-2.23 2.4-4.01 4.83-6.39 7.21L350.58 320zm88.31-96H321.94l22.51-22.51c9.37-9.37 9.37-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0l-197 197c-5.27-45.97-.29-124.34 49.52-174.15 0 0 18.71-18.71 85.75-85.76 37.02-37.02 76.03-56.58 112.8-56.58 26.63 0 51.37 10.66 71.53 30.82 39.17 39.16 40.02 92.25 5.78 145.12z"></path></svg>
          <div class="font-bold">Artículos</div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import AppLogo from "~/assets/images/icons/logo.svg?inline";

  export default {
    components: {
      AppLogo
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
