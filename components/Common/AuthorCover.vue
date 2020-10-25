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
      <div class="leading-none">
        <p :class="[authorNameClass]" class="text-xs font-display text-orange-900">{{ authorName }}</p>
        <p v-if="createdAt" class="text-xs text-orange-900" style="--text-opacity: .6;">{{ humanDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import humanDate from '~/utils/humanDate';

  export default {
    props: {
      author: {
        type: Object,
        default: () => {}
      },
      createdAt: {
        type: String
      },
      authortype: {
        type: String,
        default: 'card'
      }
    },
    computed: {
      humanDate() {
        return humanDate(this.createdAt);
      },
      authorName() {
        return this.author ? this.author.nombre : "Desconocido";
      },
      authorNameClass() {
        return this.authortype == 'article' ? 'font-bold' : 'font-light';
      }
    }
  }
</script>
