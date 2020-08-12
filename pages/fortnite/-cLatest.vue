<template>
  <section
    v-if="streamerList"
    class="mt-6 md:mt-12 container-lg px-5 mx-auto text-center"
  >
    <ul v-if="streamerList" class="flex flex-wrap justify-center mt-3">
      <li
        v-for="(streamer, index) in streamerList"
        :key="index"
        class="m-2 lg:m-3 w-1/2"
        style="max-width: 260px; max-height: 240px;"
      >
        <c-card :profile="streamer.profile" :prefix="prefix" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    streamerList: {
      type: Array,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
  },
}
</script>
