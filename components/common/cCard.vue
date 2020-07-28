<template>
  <div
    class="c-card w-full rounded-lg bg-white relative py-12 px-4 text-center shadow-md hover:shadow-lg"
  >
    <nuxt-link :to="`/${prefix}/${name}`">
      <img
        src="@/assets/images/common/profile/icon_notfound.svg"
        class="rounded-full w-24 object-cover mx-auto h-24"
        :alt="`${name}の写真`"
      />
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
    game: {
      type: String,
      required: true,
    },
    prefix: {
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
