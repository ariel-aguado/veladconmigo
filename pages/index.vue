<template>
  <div>
    <Hero />
    <Verse />
    <LastArticules />
  </div>
</template>

<script>
import Hero from "@/components/Layout/Hero";
import Verse from "@/components/Layout/Verse";
import LastArticules from "@/components/Layout/LastArticules";

export default {
  components: {
    Hero,
    Verse,
    LastArticules
  },
  data() {
    return {
    }
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
