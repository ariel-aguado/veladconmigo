<template>
  <figure class="bg-gradient-to-r from-orange-900  to-gray-800" :style="`--aspect-ratio:${ratio};`">
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
