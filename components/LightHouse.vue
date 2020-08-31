<template>
  <div :style="style" ref="animationConatainer"></div>
</template>

<script>
//import lottie-web module
import lottie from 'lottie-web'

export default {
  name: "LightHouse",
  props: {
    //props for native lottie-web preferences
    options: {
      type: Object,
      required: true
    },
    //props for hight and width of the animation container
    height: String,
    width: String
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}` : '100%',
        height: this.height ? `${this.height}` : '100%'
      }
    }
  },
  mounted() {
    //render config for lottie animation
    lottie.loadAnimation({
      container: this.$refs.animationConatainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    })
  }
}
</script>
