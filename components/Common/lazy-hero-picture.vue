<template>
  <figure class="bg-gradient-to-b from-black to-orange-900" :style="`--aspect-ratio:${ratio}; max-height: 500px;`">
    <picture>
      <source
        :srcset="generateSrcSet([1024, 1280, 1330, 1440, 1600], hash, '22/9')"
        media="(min-width: 1024px)"
        sizes="100vw"
      />

      <source
        :srcset="
          generateSrcSet([320, 375, 460, 550, 600, 800, 900], hash, '16/9')
        "
        media="(max-width: 1023px)"
        sizes="100vw"
      />

      <img class="object-cover w-full h-full" :alt="alt" :src="preload" loading="eager" />
    </picture>
  </figure>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    ratio: { type: String, required: true },
    alt: { type: String, required: true },
    hash: { type: String, required: true },
    sizes: { type: String, required: false, default: '' },
    preload: {
      type: String,
      required: false,
      default:
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    },
  },

  methods: {
    generateSrcSet(widths, hash, ratio) {

      let srcset = '';

      widths.forEach((width) => {
        const url = this.$cloudinary.image.url(hash, {
          crop: 'fill',
          width,
          quality: 'auto',
          fetchFormat: 'auto',
          aspectRatio: ratio.replace('/', ':'),
        });
        srcset += `${url} ${width}w, `
      });

      return srcset.slice(0, -2);
    },
  },
}
</script>

<style lang="scss" scoped>
figure {

  @media only screen and (max-width: 639px) {
    --aspect-ratio: 1/1 !important;
  }

  img {
    height: 100%;
  }
}
</style>
