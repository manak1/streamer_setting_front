<template>
  <section class="mt-6 md:mt-12 lg:container-gear-lg px-5 mx-auto text-center">
    <h2 class="text-center text-xl md:text-2xl font-bold">
      おすすめの配信者
    </h2>
    <ul v-if="streamerList" class="flex flex-wrap justify-center mt-6">
      <li
        v-for="(streamer, index) in streamerList"
        :key="index"
        class="m-2 lg:m-3 w-1/2 card-max"
      >
        <c-card :profile="streamer.profile" :prefix="prefix" />
      </li>
    </ul>
    <div class="text-center mt-12">
      <c-button text="配信者を探す" link="/fortnite" />
    </div>
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
