<template>
  <button
    class="hamburger"
    :class="{'active': isActive}"
    @click="toggleActive"
    aria-label="Main Menu">
      <svg viewBox="0 0 64 48">
        <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
        <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
        <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
      </svg>
    </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Hamburger",
  computed: {
    ...mapGetters({
      isActive: 'hamburger/isActive',
    }),
  },
  methods: {
    ...mapActions({
      toggleActive: 'hamburger/toggleActive'
    })
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  width: 64px;
  height: 48px;
  margin: 0;
  right: 1em;
  outline: 0;
  z-index: 50;
  border: none;
  background: 0 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &.active {
    svg {
      path {
        --offset:57px;
      }

      path:first-child,
      path:nth-child(3) {
        --delay:0.15s;
        --easing:cubic-bezier(0.2,0.4,0.2,1.1)
      }
      path:nth-child(2){
        --duration:0.1s;
        --offset:2px;
        --array-1:1px
      }

      path:nth-child(3) {
        --offset:58px
      }
    }
  }

  @include breakpoint(lg) {
    display: none;
  }

  svg {
    width: 100%;
    height: 100%;
    stroke: theme('colors.orange.600');
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    display: block;

    path {
      transition: stroke-dasharray .55s ease 0s,stroke-dashoffset .55s ease 0s;
      transition: stroke-dasharray var(--duration,.55s) var(--easing,ease) var(--delay,0s),stroke-dashoffset var(--duration,.55s) var(--easing,ease) var(--delay,0s);
      stroke-dasharray: 26px 100px;
      stroke-dasharray: var(--array-1,26px) var(--array-2,100px);
      stroke-dashoffset: 126px;
      stroke-dashoffset: var(--offset,126px);
      transform: translateZ(0);

      &:nth-child(2) {
        --duration: 0.5s;
        --easing: ease-in;
        --offset: 100px;
        --array-2: 74px;
      }

      &:nth-child(3) {
        --offset: 133px;
        --array-2: 107px;
      }
    }
  }
}
</style>
