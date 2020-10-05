<template>
  <figure class="flex items-center">
    <figcaption class="flex items-center">
      <img
        :data-src="authorCover"
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        :alt="authorName"
        class="lazyload autor__photo bg-gradient-to-r from-orange-600 to-orange-400"
        width="46" height="46">
      <div>
        <p class="text-sm font-bold text-orange-900">{{ authorName }}</p>
        <p v-if="createdAt" class="text-xs text-orange-900">{{ humanDate }}</p>
      </div>
    </figcaption>
  </figure>
</template>

<script>
  export default {
    data() {
      return {
        cloudinary: "https://res.cloudinary.com/dkdfpm2og/image/upload/"
      }
    },
    props: {
      author: {
        type: Object,
        default: () => {}
      },
      createdAt: {
        type: String
      }
    },
    computed: {
      humanDate() {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(this.createdAt).toLocaleDateString('es-ES', options)
      },
      authorName() {
        return this.author ? this.author.nombre : "Desconocido";
      },
      authorCover() {
        return this.author
        ? `${this.author.avatar.url}`
        : `${this.cloudinary}v1600203140/autor_desconocido_712790be28.png`;
      }
    }
  }
</script>

<style lang="scss" scoped>
.autor__photo {
  height: 46px;
  width: 46px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
