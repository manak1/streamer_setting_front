<template>
  <div class="w-full relative c-hero__bg h-32 md:h-64">
    <div class="container mx-auto text-center py-24">
      <h2 class="text-5xl relative text-white c-hero__text">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-hero__bg {
  background-image: url('~assets/images/common/hero/hero__bg.jpg');
  background-position-y: 23%;
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.c-hero__text {
  text-shadow: 4px 5px 6px rgba(0, 0, 0, 0.16078);
}
</style>
