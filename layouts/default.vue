<template>
  <div>
    <Header />
    <SideNav :show="isActive" @close="toggleActive"/>
    <Nuxt keep-alive/>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isActive: 'hamburger/isActive',
    }),
  },
  methods: {
    ...mapActions({
      toggleActive: 'hamburger/toggleActive'
    })
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
