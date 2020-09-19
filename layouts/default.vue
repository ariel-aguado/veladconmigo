<template>
  <div>
    <!-- <header class="bg-gray-100 px-8 py-2 shadow-md grid" style="height: 85px"> -->
      <Header />
    <!-- </header> -->
    <Nuxt keep-alive/>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";

export default {
  components: {
    Header
  },
  mounted() {
    var FontFaceObserver = require('fontfaceobserver');

    const montserratRegularObserver = new FontFaceObserver('MontserratRegular');
    const inconsolataRegularObserver = new FontFaceObserver('InconsolataRegular');
    const montserratBoldObserver = new FontFaceObserver('MontserratBold');
    const inconsolataBoldObserver = new FontFaceObserver('InconsolataBold');

    Promise.all([
      montserratRegularObserver.load(),
      inconsolataRegularObserver.load()
    ]).then(function() {
      document.documentElement.className += " fonts-regular-loaded";

      Promise.all([
        montserratBoldObserver.load(),
        inconsolataBoldObserver.load()
      ]).then(function() {
        document.documentElement.className += " fonts-bold-loaded"
      })
    }).catch(error => {
      console.log('error :>> ', error);
    });
  },
}
</script>
