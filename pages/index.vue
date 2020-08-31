<template>
  <div>
    <Hero />
    <Verse />
  </div>
</template>

<script>
import Hero from "@/components/Layout/Hero";
import Verse from "@/components/Layout/Verse";

export default {
  components: {
    Hero,
    Verse
  },
  data() {
    return {
      homeContent: {},
      pickOptions: {
        animationData: require(`~/assets/animations/lighthouse.json`)
      }
    }
  },
  mounted() {
    this.homeContent = this.$store.state.home[0];
  }
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
