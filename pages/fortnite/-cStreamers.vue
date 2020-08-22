<template>
  <section
    class="container md:container-md lg:container-lg mx-auto text-center py-12"
  >
    <h2 class="text-3xl font-bold">
      配信者一覧
    </h2>
    <ul v-if="streamerList" class="flex flex-wrap justify-center mt-6">
      <li
        v-for="(streamer, index) in streamerList"
        :key="index"
        class="w-full w-half card-max m-1 md:m-2 md:card-max"
      >
        <c-card :prefix="prefix" :profile="streamer.profile" />
      </li>
    </ul>
    <div class="mx-auto text-center mt-6">
      <ul class="flex justify-center space-x-2">
        <li
          class="mx-1 px-3 py-2 bg-white shadow-sm text-gray-500 hover:bg-gray-700 hover:text-gray-200 rounded-lg"
        >
          <a class="flex items-center font-bold" href="#">
            <span class="mx-1">前へ</span>
          </a>
        </li>
        <li
          class="mx-1 px-3 py-2 bg-white shadow-sm text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg"
        >
          <a class="flex items-center font-bold" href="#">
            <span class="mx-1">次へ</span>
          </a>
        </li>
      </ul>
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
      default: 'fortnite',
    },
  },
}
</script>
