<template>
  <section class="container pt-8 md:pt-12 text-center">
    <form class="overflow-hidden">
      <h2 class="text-xl md:text-3xl text-center font-bold tracking-wider">
        配信者を探す
      </h2>
      <div class="flex justify-center items-center mt-8">
        <div class="hidden md:inline-block">
          <p class="text-3xl">
            {{ hitNumber }}<span class="text-base"> 件</span>
          </p>
        </div>
        <div
          class="text-center inline-block c-search__input ml-2 px-2 w-full md:w-4/5 lg:w-1/2 h-16"
        >
          <input
            class="border rounded-lg text-base md:text-xl pl-12 pr-24 mx-auto md:py-3 w-full h-full outline-none shadow-sm"
            type="text"
            placeholder="配信者の名前"
          />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    hitNumber: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-search {
  &__input {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 18px;
      content: '';
      display: inline-block;
      width: 24px;
      height: 24px;
      z-index: 999;
      background-image: url(~assets/images/common/form/person_search-24px.svg);
      transform: translateY(-50%);
    }
  }
}
</style>
