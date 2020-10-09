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
  // mounted() {
  //   var FontFaceObserver = require('fontfaceobserver');

  //   const montserratRegularObserver = new FontFaceObserver('MontserratRegular');
  //   const inconsolataRegularObserver = new FontFaceObserver('InconsolataRegular');
  //   const montserratBoldObserver = new FontFaceObserver('MontserratBold');
  //   const inconsolataBoldObserver = new FontFaceObserver('InconsolataBold');

  //   Promise.all([
  //     montserratRegularObserver.load(),
  //     inconsolataRegularObserver.load()
  //   ]).then(function() {
  //     document.documentElement.className += " fonts-regular-loaded";

  //     Promise.all([
  //       montserratBoldObserver.load(),
  //       inconsolataBoldObserver.load()
  //     ]).then(function() {
  //       document.documentElement.className += " fonts-bold-loaded"
  //     })
  //   }).catch(error => {
  //     console.log('error :>> ', error);
  //   });
  // },
}
</script>
