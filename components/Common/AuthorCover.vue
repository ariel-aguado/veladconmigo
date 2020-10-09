<template>
  <div class="flex items-center">
    <div class="flex items-center">
      <div class="rounded-full mr-3 overflow-hidden" style="width: 46px; height: 46px;">
        <lazy-image
          ratio="1/1"
          :alt="authorName"
          :image="author.avatar"
          :caption="false"
          :widths="[200]"
          sizes="46px"
        />
      </div>
      <div>
        <p class="text-sm font-bold text-orange-900">{{ authorName }}</p>
        <p v-if="createdAt" class="text-xs text-orange-900">{{ humanDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
      }
    }
  }
</script>
