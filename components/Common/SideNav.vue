<template>
  <div>
    <div
      v-if="show"
      class="w-full h-full z-40 fixed top-0 left-0" style="background-color: rgba(0, 0, 0, 0.7);" @click="toggleActive"></div>
    <transition name="side">
      <div
        v-if="show"
        class="sidenav flex flex-col items-center h-full shadow-2xl fixed top-0 left-0 py-3" style="width: 260px; z-index: 60;">
          <div @click="toggleActive">
            <nuxt-link to="/" >
              <Logo />
            </nuxt-link>
          </div>
          <div class="flex justify-center mt-16" @click="toggleActive">
            <NavList />
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Logo from "~/assets/images/icons/vc.svg?inline";

export default {
  name: "Sidenav",
  components: {
    Logo,
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      toggleActive: 'hamburger/toggleActive'
    }),
  }
};
</script>


<style lang="scss" scoped>
.sidenav {
  @include liquid;
}

.side-enter-active,
.side-leave-active {
  transition: transform 0.55s ease-in-out;
}
.side-enter,
.side-leave-to {
  transform: translateX(-100%);
}
</style>
