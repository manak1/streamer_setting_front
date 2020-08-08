<template>
  <section
    v-if="profile"
    class="mx-auto text-center w-full lg:w-1/3 c-profile px-4 mt-5 sm:mt-0 sm:px-0"
    style="max-width: 400px;"
  >
    <div>
      <img
        v-if="iconExists"
        :src="profile.icon"
        :alt="`${profile.name}のアイコン`"
        :class="iconClass"
      />
      <img
        v-else
        src="@/assets/images/common/profile/icon_notfound.svg"
        :alt="`${profile.name}のアイコン`"
        :class="iconClass"
      />
    </div>
    <h2 class="mt-2 text-2xl md:text-3xl font-bold">
      {{ profile.name }}
    </h2>
    <div>
      <p v-if="profile.player" class="text-gray-600 font-medium">
        {{ profile.player }}
      </p>
      <p v-else class="text-gray-600 text-sm">プレイヤー</p>
    </div>

    <p class="mt-3">
      {{ profile.biography }}
    </p>

    <div class="mt-2 flex justify-center space-x-3 items-center">
      <a
        v-for="(sns, index) in profile.sns"
        :key="index"
        class="h-6 w-6 inline-block"
        :href="sns.url"
        target="_blank"
        rel="noopener"
      >
        <img
          :alt="detectSns(sns.sns).alt"
          :src="detectSns(sns.sns).image"
          class="inline-block w-6 text-center"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  computed: {
    iconExists() {
      return this.profile?.icon
    },
    /* 独自tailwind クラスを追加して実装した方が良さそう */
    iconClass() {
      return {
        'h-24 md:h-40 border-4 border-white rounded-full mx-auto shadow-lg': true,
      }
    },
  },
  methods: {
    detectSns(sns) {
      if (sns === 'YouTube') {
        return {
          alt: 'YouTubeはこちら',
          image: '/images/common/sns/youtube-brands.svg',
        }
      } else if (sns === 'Twitter') {
        return {
          alt: 'Twitterはこちら',
          image: '/images/common/sns/twitter-brands.svg',
        }
      } else if (sns === 'Instagram') {
        return {
          alt: 'Instagramはこちら',
          image: '/images/common/sns/instagram-brands.svg',
        }
      } else {
        return {
          alt: 'Twitchはこちら',
          image: '/images/common/sns/twitch-brands.svg',
        }
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
