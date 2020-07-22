<template>
  <div class="c-card relative p-4 text-center shadow-lg hover:shadow-xl">
    <nuxt-link :to="`/fortnite/${name}`">
      <img :src="img" class="rounded-full mx-auto h-24" alt="" />
      <p class="mt-2 text-sm">{{ name }}</p>
      <p class="mt-2">{{ text }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.c-card {
  width: 240px;
  background-color: #f8f8f8;
  transition: ease-in 0.2s;
  top: 0;
  opacity: 1;
  &:hover {
    top: -10px;
    transition: ease-in-out 0.2s;
    opacity: 0.8;
  }
}
</style>
