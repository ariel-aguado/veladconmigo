<template>
  <div class="hero overflow-hidden">
    <div class="hero__content lg:container lg:mx-auto z-10 px-6">
      <div class="bg-white md:hidden flex justify-center items-center" style="height: 3.5rem; width: 3.5rem; border-radius: 20px;">
        <AppLogo class="text-orange-900" style="width: 3rem; height: 3rem;"/>
      </div>
      <h1 class="
        w-10/12
        sm:w-2/4
        pt-3
        pb-6
        md:py-6
        mx-0
        text-3xl
        md:text-4xl
        uppercase
        leading-none
        bg-clip-text
        text-transparent
        bg-gradient-to-r
        from-orange-600
        to-orange-100
        text-left">Velad Conmigo<span class="w-11/12 sm:w-full block font-display font-bold text-base mt-2 md:mt-1 leading-6" style="color: rgba(255,255,255,.7);">A la luz de las Escrituras</span>
      </h1>
    </div>
    <lazy-hero-picture
      ratio="16/9"
      alt="VeladConmigo Hero Banner"
      hash="velad-conmigo-hero_q1cgl9"
    />
    <Separator class="self-end" />
  </div>
</template>

<script>
import AppLogo from "~/assets/images/icons/logo.svg?inline";

export default {
  name: "Hero",
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" scoped>
.hero {
  max-height: 500px;

  display: grid;
  grid-template-areas: "hero";
  align-items: center;

  > * {
    grid-area: hero;
  }

  &__content {
    margin-top: calc(-70px + 20px);

    @include respond(md) {
      margin-top: calc(-140px + 50px);
    }
  }

  h1 {
    border-radius: 30px;
  }
}
</style>
