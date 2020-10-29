<template>
  <nuxt-link
    class="article flex flex-col justify-between bg-white hover:translate-y-4"
    :class="{'no-margin': side, 'only-one': one}"
    :to="`/articulos/${article.slug}`">
    <div>
      <div class="overflow-hidden" style="border-top-left-radius: 16px; border-top-right-radius: 16px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;">
        <lazy-image
          ratio="16/9"
          :alt="article.titulo"
          :image="article.imagen"
          :caption="false"
          :widths="[245, 500, 750]"
          sizes="(max-width: 660px) 660px 86vw, (max-width: 767px) 574px, (min-width: 768px) 326px, (min-width: 1024) 446px"
          :extraclass="`object-cover w-full h-full ${side ? 'small' : ''}`"
        />
      </div>
      <div class="px-4 py-3">
        <Tags :tags="tags" tagtype="article" />
        <h3 class="text-orange-900 mt-2">{{ article.titulo }}</h3>
      </div>
    </div>
    <div class="mt-3 mb-3 px-4 flex justify-between items-center">
      <AuthorCover :author="article.autor" :createdAt="article.createdAt" />
      <ArticleArrow />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    side: {
      type: Boolean,
      default: false
    },
    one: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tags() {
      return this.article.etiquetas.split(',').map(tag => tag.trim());
    },
  }
}
</script>

<style lang="scss" scoped>
.article {
  border-radius: 30px;
  border-width: 3px;
  border-color: #FFF;
  overflow: hidden;
  outline: 0;
  --bg-opacity: 1;
  box-shadow: 0 0.332071px 2.21381px rgba(0,0,0,.0119), 0 0.798012px 5.32008px rgba(0,0,0,.0258), 0 1.50259px 10.0172px rgba(0,0,0,.0368), 0 2.68036px 17.869px rgba(0,0,0,.0479), 0 5.01331px 33.4221px rgba(0,0,0,.0621), 0 12px 80px rgba(0,0,0,.09);
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));

  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
  transition-duration: .15s;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    border-color: theme('colors.orange.500');
    box-shadow: 0 0.332071px 1.57734px rgba(0,0,0,.0562291), 0 0.798012px 3.79056px rgba(0,0,0,.0807786), 0 1.50259px 7.13728px rgba(0,0,0,.1), 0 2.68036px 12.7317px rgba(0,0,0,.119221), 0 5.01331px 23.8132px rgba(0,0,0,.143771), 0 12px 57px rgba(0,0,0,.2);
    --transform-translate-y: -0.125rem;
  }
}
</style>
