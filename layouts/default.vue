<template>
  <div>
    <Header />
    <Nuxt keep-alive/>
    <Footer />
  </div>
</template>

<script>

export default {
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
