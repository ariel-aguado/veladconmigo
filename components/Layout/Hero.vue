<template>
  <div class="hero overflow-hidden">
    <div class="hero__content lg:container lg:mx-auto z-10 px-6">
      <h1 class="
        w-4/5
        sm:w-2/4
        mx-auto
        py-6
        px-4
        md:mx-0
        text-3xl
        md:text-4xl
        uppercase
        leading-none
        text-white
        md:bg-clip-text
        md:text-transparent
        md:bg-gradient-to-r
        md:from-orange-600
        md:to-orange-100
        text-center
        md:text-left
        bg-gradient-to-br
        from-light-orange
        to-dark-orange">Velad Conmigo<span class="block font-display text-base text-white mt-2 md:mt-1 leading-6">A la luz de las Escrituras</span></h1>
    </div>

    <picture class="w-full h-full bg-gradient-to-r from-black via-orange-500 to-orange-800">
      <source :data-srcset="`${require('~/assets/images/bg/main-xl.jpg')} 1920w, ${require('~/assets/images/bg/main-xl@2x.jpg')} 3840w`" media="(min-width: 1380px)">
      <source :data-srcset="`${require('~/assets/images/bg/main-md.jpg')} 1380w, ${require('~/assets/images/bg/main-md@2x.jpg')} 2760w`" media="(min-width: 990px)">
      <source :data-srcset="`${require('~/assets/images/bg/main-sm.jpg')} 990w, ${require('~/assets/images/bg/main-sm@2x.jpg')} 1980w`" media="(min-width: 640px)">
      <img
        class="object-cover w-full h-full lazyload"
        :data-srcset="`${require('~/assets/images/bg/main-xs.jpg')} 640w, ${require('~/assets/images/bg/main-xs@2x.jpg')}`"
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        alt="Main background">
    </picture>
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
    // padding: 2rem 1rem;
    border-radius: 30px;
  }

  img {
    max-height: 500px;
  }
}
</style>
