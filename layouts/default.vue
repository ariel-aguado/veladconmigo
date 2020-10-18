<template>
  <div>
    <Header />
    <Nuxt keep-alive/>
    <AppMenu />
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
