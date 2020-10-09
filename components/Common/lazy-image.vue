<template>
  <figure class="bg-gradient-to-br from-teal-100 via-gray-500 to-orange-200" :style="`--aspect-ratio:${ratio};`">
    <img
      :data-srcset="generateSrcSet()"
      :alt="alt"
      :src="preload"
      :title="alt"
      :data-sizes="sizes"
      :class="extraclass"
      class="lazy"
    />
    <figcaption v-if="caption">
      {{ alt }}
    </figcaption>
  </figure>
</template>

<script>
import {
  loadImages,
  getSrcSet
} from '~/assets/js/imageTools';

export default {
  name: 'LazyImage',
  props: {
    ratio: { type: String, required: true },
    alt: { type: String, required: true },
    image: { type: Object, required: true },
    sizes: { type: String, required: false, default: '' },
    widths: { type: Array, required: true },
    caption: { type: Boolean, required: false, default: false },
    extraclass: { type: String, required: false, default: '' },
    loadingtype: { type: String, required: false, default: 'lazy' },
    preload: {
      type: String,
      required: false,
      default:
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    },
  },
  mounted() {
    loadImages();
  },
  methods: {
    parseRatioForWH(ratio, which) {
      return Number(ratio.split('/')[which === 'width' ? 0 : 1]) * 10
    },
    generateSrcSet() {
      return getSrcSet(this.image, this.widths)
    },
  },
}
</script>

<style lang="scss" scoped>
figure {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
    margin-top: -2px;
  }
</style>
