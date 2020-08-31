<template>
  <div>
    <header class="bg-gray-100 px-8 py-2 shadow-md grid" style="height: 85px">
      <Header />
    </header>
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";

export default {
  components: {
    Header
  },
}
</script>
