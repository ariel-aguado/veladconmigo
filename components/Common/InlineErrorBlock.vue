<template>
  <div class="error-block">
    <warning-icon />
    <h2 class="w-11/12 md:w-3/5 text-red-400">{{ errorMessage }}</h2>
  </div>
</template>

<script>
import WarningIcon from '@/assets/images/icons/warning.svg?inline';

export default {
  components: {
    WarningIcon
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorMessage() {
      const baseError = 'Parece que tenemos un problema.';
      if (this.error.statusCode == 500) return `${baseError} Revise la conexión e inténtelo de nuevo.`;
      return baseError;
    }
  }
}
</script>

<style lang="scss" scoped>
.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
svg {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  opacity: 0.75;
}
h2 {
  // font-size: $text-2xl;
  text-align: center;
}
</style>
