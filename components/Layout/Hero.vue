<template>
  <div class="hero overflow-hidden">
    <div class="hero__content lg:container lg:mx-auto z-10 px-6">
      <h1 class="
        w-full
        sm:w-2/4
        py-6
        px-4
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
        text-left">Velad Conmigo<span class="block font-display text-base text-white mt-2 md:mt-1 leading-6">A la luz de las Escrituras</span>
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
