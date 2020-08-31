<template>
  <div class="hero">
    <div class="hero__content lg:container lg:mx-auto z-10 px-6">
      <h1 class="
        w-4/5
        sm:w-2/4
        mx-auto
        py-6
        px-4
        md:mx-0
        text-4xl
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
        to-dark-orange">Velad Conmigo<span class="block text-base text-white mt-5 md:mt-1 leading-6">A la luz de las Escrituras</span></h1>
    </div>
    <picture class="w-full h-full">
      <source srcset="~/assets/images/bg/main-xl.jpg 1920w, ~/assets/images/bg/main-xl@2x.jpg 3840w" media="(min-width: 1380px)">
      <source srcset="~/assets/images/bg/main-md.jpg 1380w, ~/assets/images/bg/main-md@2x.jpg 2760w" media="(min-width: 990px)">
      <source srcset="~/assets/images/bg/main-sm.jpg 990w, ~/assets/images/bg/main-sm@2x.jpg 1980w" media="(min-width: 640px)">
      <img
        class="object-cover w-full h-full"
        srcset="~/assets/images/bg/main-xs.jpg 640w, ~/assets/images/bg/main-xs@2x.jpg"
        alt="Main background">
    </picture>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.hero {
  // height: 65vh;
  max-height: 500px;

  display: grid;
  grid-template-areas: "hero";
  align-items: center;

  > * {
    grid-area: hero;
  }

  h1 {
    // padding: 2rem 1rem;
    border-radius: 20px;
  }

  img {
    max-height: 500px;
  }
}
</style>
