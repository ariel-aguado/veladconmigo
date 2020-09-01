<template>
  <nuxt-link class="hover:translate-y-4" to="#">
    <div class="articule bg-white p-6">
      <h3 class="font-display text-lg text-scripture-500 font-bold">La salvación es por fe. ¿Pero cuándo?</h3>

      <div>
        <p class="text-sm text-scripture-400 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque accusamus culpa voluptatum tempore labore. Nemo delectus sunt officiis doloribus magni.</p>
        <ul class="articule__tags text-sm text-scripture-400 font-bold mt-1">
          <li class="hover:text-orange-500">#Fe</li>
          <li class="">#Bautismo</li>
          <li class="">#Salvación</li>
        </ul>
      </div>

      <div class="mt-5 flex justify-between items-center">
        <figcaption class="flex items-center">
          <!-- <img class="h-4 w-4 rounded-full shadow-2xl" src="~/assets/images/icons/unknow.svg" alt="Author"> -->
          <div class="font-display text-xs">
            <p class="text-scripture-400 font-bold">Reynaldo García Garlobo</p>
            <p class="text-scripture-400">31 de agosto de 2020</p>
          </div>
        </figcaption>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-circle" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ED8936" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="16" y1="12" x2="8" y2="12" />
            <line x1="16" y1="12" x2="12" y2="16" />
            <line x1="16" y1="12" x2="12" y2="8" />
          </svg>
        </div>

      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "Articule"
  }
</script>

<style lang="scss" scoped>
.articule {
  border-radius: 18px;
  border-width: 3px;
  border-color: #FFF;
  overflow: hidden;
  outline: 0;
  --bg-opacity: 1;
  background-color: #fff;
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

  &__tags {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, max-content));
    grid-gap: 1rem;
  }
}
</style>
