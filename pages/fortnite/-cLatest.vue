<template>
  <section class="mt-6 md:mt-12 lg:container-gear-lg px-5 mx-auto text-center">
    <ul v-if="streamerList" class="flex flex-wrap justify-center mt-3">
      <span v-for="test in 10" :key="test" class="w-1/2 md:w-auto">
        <li
          v-for="(streamer, index) in streamerList"
          :key="index"
          class="m-2 lg:m-3"
        >
          <c-card
            :name="streamer.name"
            :img="streamer.img"
            :prefix="prefix"
            :text="streamer.biography"
          />
        </li>
      </span>
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
