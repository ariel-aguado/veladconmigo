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
  mounted() {
    var FontFaceObserver = require('fontfaceobserver');

    const montserratObserver = new FontFaceObserver('MontserratRegular');
    const inconsolataObserver = new FontFaceObserver('InconsolataRegular');

    console.log('montserratObserver :>> ', montserratObserver);
    console.log('inconsolataObserver :>> ', inconsolataObserver);

    Promise.all([
      montserratObserver.load(),
      inconsolataObserver.load()
    ]).then(function() {
      document.documentElement.className += " fonts-loaded";
    }).catch(error => {
      console.log('error :>> ', error);
    });
  },
}
</script>
