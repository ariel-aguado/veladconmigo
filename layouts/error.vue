<template>
  <div v-if="error" class="page-wrapper">
    <!-- <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2> -->
    <inline-error-block :error="$fetchState.error.message" />

    <div class="error-navigation">
      <a href="#" @click="$router.push(-1)"> Regresar </a>
      <nuxt-link to="/"> Página principal </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head() {
    return {
      title: this.error.message || 'Error Page'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 1280px;
  margin: auto;
  padding: 1rem;
  min-height: calc(100vh - 11rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    @apply text-4xl;
    letter-spacing: calc(4 * -0.0125rem);
    margin-bottom: 0.5rem;
  }
  h2 {
    @apply text-2xl;
    letter-spacing: calc(4 * -0.0125rem);
    margin-bottom: 1rem;
  }
  .error-navigation {
    letter-spacing: calc(4 * -0.0125rem);
    a:first-child {
      margin-right: 1rem;
    }
    a:hover {
      color: theme('colors.orange.300');
    }
  }
}
</style>
