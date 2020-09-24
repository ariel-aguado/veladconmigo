<template>
  <div class="overflow-hidden">
    <main class="bg-white py-16 px-6">
      <div class="container mx-auto">
        <h2 class="text-2xl text-orange-900 text-center uppercase">Vivimos en tiempos cambiantes</h2>
        <div class="text-center text-orange-900 mt-8">
          <p>Desde la perspectiva cristiana hay mucha desorientación.</p>
          <p>Hace mucho tiempo atrás, el profeta de Dios instó como lo hacemos hoy:</p>
        </div>
        <figure class="
          verse
          bg-orange-200
          pt-24
          pb-6
          px-6
          md:py-6
          md:pl-24
          md:pr-16
          md:mx-3
          my-6
          overflow-hidden
          relative
          bg-gradient-to-br
          from-light-orange
          to-dark-orange
          z-10">
          <blockquote class="text-lg text-white font-incbold">
            Paraos en los caminos, y mirad, y preguntad por las sendas antiguas, cuál sea el buen camino, y andad por él, y hallaréis descanso para vuestra alma.
          </blockquote>
          <figcaption class="text-right text-orange-200 italic">
            <p>Jeremías 6:16</p>
          </figcaption>
        </figure>
        <p class="mt-4 text-center text-orange-900">Necesitamos recordar y ser reafirmados en que las <em>“sendas antiguas”</em> — todavía son <strong>nuevas</strong>.</p>
      </div>
    </main>
    <Separator fill="#FFFAF0" opacity="1" />
  </div>
</template>

<script>
  export default {
    name: "Verse"
  }
</script>

<style lang="scss" scoped>
// main {
//   background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmYWYwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+");
// }

.verse {
  border-radius: 30px;
  box-shadow: 0 0.332071px 2.21381px rgba(0,0,0,.0119), 0 0.798012px 5.32008px rgba(0,0,0,.0258), 0 1.50259px 10.0172px rgba(0,0,0,.0368), 0 2.68036px 17.869px rgba(0,0,0,.0479), 0 5.01331px 33.4221px rgba(0,0,0,.0621), 0 12px 80px rgba(0,0,0,.09);

  &::before {
    content: "\201C";
    position: absolute;
    top: -2.75rem;
    left: -1rem;
    line-height: 1;
    font-family: MontserratRegular !important;
    font-size: 20rem;
    color: theme('colors.orange.200');
    font-family: sans-serif;
  }
}
</style>
