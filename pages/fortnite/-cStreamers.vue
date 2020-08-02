<template>
  <section class="container mx-auto text-center pt-12">
    <h2 class="text-3xl font-bold">
      人気ストリーマー 一覧
    </h2>
    <ul v-if="streamerList" class="flex flex-wrap justify-center mt-3">
      <c-card
        v-for="(streamer, index) in streamerList"
        :key="index"
        :prefix="prefix"
        :name="streamer.profile.name"
        :img="streamer.profile.icon"
        :text="streamer.profile.biography"
        class="m-4"
      />
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
      default: 'fortnite',
    },
  },
}
</script>
