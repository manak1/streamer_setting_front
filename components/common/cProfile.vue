<template>
  <section
    v-if="streamer"
    class="mx-auto text-center w-full lg:w-1/3 c-profile px-4 mt-5 sm:mt-0 sm:px-0"
    style="max-width: 400px;"
  >
    <div>
      <img
        v-if="iconExists"
        :src="icon"
        :alt="`${name}のアイコン`"
        :class="iconClass"
      />
      <img
        v-else
        src="@/assets/images/common/profile/icon_notfound.svg"
        :alt="`${name}のアイコン`"
        :class="iconClass"
      />
    </div>
    <h2 class="mt-2 text-2xl md:text-3xl font-bold">{{ streamer.name }}</h2>
    <div>
      <p v-if="streamer.player" class="text-gray-600">{{ streamer.player }}</p>
      <p v-else class="text-gray-600 text-sm">プレイヤー</p>
    </div>

    <p class="mt-3">
      {{ streamer.biography }}
      GameWith所属のプロゲーマーGameWith所属のプロゲーマーGameWith所属のプロゲーマーGameWith所属のプロゲーマー
    </p>

    <div class="mt-2 flex justify-center space-x-3 items-center">
      <a
        class="h-6 w-6 inline-block"
        :href="streamer.sns.twitter"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="twitterはこちら"
          src="@/assets/images/common/sns/twitter-brands.svg"
        />
      </a>
      <a
        v-if="streamer.sns.youtube"
        :href="streamer.sns.youtube"
        target="_blank"
        rel="noopener"
        class="w-6 h-6"
      >
        <img
          alt="youtubeはこちら"
          src="@/assets/images/common/sns/youtube-brands.svg"
        />
      </a>
      <a
        v-if="streamer.sns.twitch"
        :href="streamer.sns.twitch"
        target="_blank"
        rel="noopener"
        class="w-6 h-6"
      >
        <img
          alt="twitchはこちら"
          src="@/assets/images/common/sns/twitch-brands.svg"
        />
      </a>
      <a
        v-if="streamer.sns.instagram"
        :href="streamer.sns.instagram"
        target="_blank"
        rel="noopener"
        class="w-6 h-6"
      >
        <img
          alt="instagramはこちら"
          src="@/assets/images/common/sns/instagram-brands.svg"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    streamer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    iconExists() {
      return this.streamer?.icon
    },
    /* 独自tailwind クラスを追加して実装した方が良さそう */
    iconClass() {
      return {
        'h-24 lg:h-40 border-4 border-white rounded-full mx-auto shadow-lg': true,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.c-profile {
  position: relative;
  top: -85px;
}
</style>
