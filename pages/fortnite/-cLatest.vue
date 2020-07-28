<template>
  <section class="mt-12 lg:container-gear-lg mx-auto text-center">
    <ul v-if="streamerList" class="flex flex-wrap justify-center mt-3">
      <span v-for="test in 10" :key="test">
        <li v-for="(streamer, index) in streamerList" :key="index" class="m-3">
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
