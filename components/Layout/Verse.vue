<template>
  <main class="bg-orange-100 py-8 px-6">
    <div class="container mx-auto">
      <h2 class="text-2xl text-orange-700 text-center uppercase p-8">Vivimos en tiempos cambiantes</h2>
      <div class="text-center text-dark-gray">
        <p>Desde la perspectiva cristiana hay mucha desorientación.</p>
        <p>Hace mucho tiempo atrás, el profeta de Dios instó como lo hacemos hoy:</p>
      </div>
      <figure class="
        verse
        bg-orange-200
        shadow-2xl
        text-center
        pt-24
        pb-6
        px-6
        md:py-4
        md:pl-24
        md:pr-16
        my-6
        overflow-hidden
        relative
        bg-gradient-to-br
        from-light-orange
        to-dark-orange
        z-10">
        <blockquote class="text-lg text-white font-bold">
          Paraos en los caminos, y mirad, y preguntad por las sendas antiguas, cuál sea el buen camino, y andad por él, y hallaréis descanso para vuestra alma.
        </blockquote>
        <figcaption class="text-right text-orange-200 italic">
          <p>Jeremías 6:16</p>
        </figcaption>
      </figure>
    </div>
  </main>
</template>

<script>
  export default {
    name: "Verse"
  }
</script>

<style lang="scss" scoped>
main {
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmYWYwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+");
}

.verse {
  border-radius: 18px;

  &::before {
    content: "\201C";
    position: absolute;
    top: -2.75rem;
    left: -1rem;
    line-height: 1;
    font-family: Montserrat Regular !important;
    font-size: 20rem;
    color: theme('colors.orange.200');
    font-family: sans-serif;
  }
}
</style>
