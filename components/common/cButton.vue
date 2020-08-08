<template>
  <nuxt-link
    :to="link"
    class="c-button bg-black shadow-md text-white inline-block mx-auto py-4 w-64 hover:shadow-lg"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-button {
  position: relative;
  overflow: hidden;
  z-index: 99;
  transition-duration: 1.2s;
  transition: ease-in-out;
  &:hover {
    opacity: 0.9;
    transition-duration: 1.2s;
    transition: ease-in-out;
  }
  /*   &::after {
    position: absolute;
    z-index: -100;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #000;
    display: block;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  &::before {
    position: absolute;
    z-index: -100;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: block;
  }

  &:hover {
    color: #000;
    &::after {
      transition-duration: 0.4s;
      transition-timing-function: ease-out;
      left: 100%;
    }
  } */
}
</style>
