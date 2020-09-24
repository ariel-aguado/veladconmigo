<template>
  <div class="flex flex-wrap justify-center mt-10">
      <content-placeholders
        v-for="p in articlesPerPage"
        :key="`placeholder-${p}`"
        rounded
        class="content-placeholder-article">
        <content-placeholders-img class="content-placeholder-article__image"/>
        <content-placeholders-text :lines="2" class="mt-3 grid grid-cols-3 gap-3 justify-start w-full px-4"/>
        <div class="px-4">
          <content-placeholders-text :lines="2" class="mt-4"/>
        </div>
        <div class="mt-6 mb-4 px-4 flex items-center">
          <content-placeholders-img class="content-placeholder-article__cover"/>
          <content-placeholders-text class="content-placeholder-article__name-date" :lines="2"/>
          <content-placeholders-img class="content-placeholder-article__arrow"/>
        </div>
      </content-placeholders>
    </div>
</template>

<script>
export default {
  props: {
    articlesPerPage: {
      type: Number,
      default: 9
    }
  }
}
</script>

<style lang="scss" scoped>
.content-placeholder-article {
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 3px;

  flex: 1 1 16rem;

  @include respond(md) {
    flex: 0 1 16rem;
  }

  &__image {
    border-radius: 20px;
    height: 200px;

    @include respond(md) {
      height: 282px;
    }
  }

  &__cover,
  &__arrow {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  &__name-date {
    width: 100%;
    flex: 0 1 50%;
    text-align: left;
    margin-right: auto;
    margin-left: 10px;

    &.vue-content-placeholders-text .vue-content-placeholders-text__line {
      margin-bottom: 0 !important;
    }
  }
}
</style>
