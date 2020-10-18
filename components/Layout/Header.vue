<template>
  <header class="hidden bg-white shadow-md md:grid md:fixed top-0 w-full z-50" style="height: 85px">
    <div class="pl-6 pr-3 lg:pr-6 lg:container lg:mx-auto flex justify-between items-center">
      <nuxt-link to="/" id="logo" class="header__logo">
        <Logo />
      </nuxt-link>
      <NavList />
      <!-- <Hamburger class="lg:hidden"/> -->
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
