<template>
  <div class="header lg:container lg:mx-auto flex justify-between items-center sticky">
    <nuxt-link to="/" id="logo" class="header__logo">
      <Logo />
    </nuxt-link>
    <NavList class="hidden lg:block"/>
    <Hamburger class="lg:hidden" @toggle="$emit('sidenavToggle')"/>
  </div>
</template>

<script>
  import Logo from "~/assets/images/icons/vc.svg?inline";

  export default {
    name: "Header",
    components: {
      Logo,
    }
  }
</script>
