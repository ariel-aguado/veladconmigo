<template>
  <div>
    <Header />
    <SideNav :show="isActive" @close="toggleActive"/>
    <Nuxt keep-alive/>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isActive: 'hamburger/isActive',
    }),
  },
  methods: {
    ...mapActions({
      toggleActive: 'hamburger/toggleActive'
    })
  },
  mounted() {
    const foxpush = document.createElement("script");
    foxpush.type = "text/javascript";
    foxpush.src = "/foxpush.js";
    foxpush['data-cfasync'] = false;
    document.body.appendChild(foxpush);
  }
}
</script>
