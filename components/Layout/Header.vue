<template>
  <header class="bg-gray-100 px-8 py-2 shadow-md grid fixed top-0 w-full z-50" style="height: 85px">
  <div class="header lg:container lg:mx-auto flex justify-between items-center">
    <nuxt-link to="/" id="logo" class="header__logo">
      <Logo />
    </nuxt-link>
    <NavList class="hidden lg:block"/>
    <Hamburger class="lg:hidden" @toggle="$emit('sidenavToggle')"/>
  </div>
  </header>
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
