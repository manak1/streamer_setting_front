<template>
  <div
    v-if="profile"
    class="c-card w-full rounded-lg bg-white relative py-4 md:py-12 px-4 text-center shadow-md hover:shadow-lg"
    style="max-height: 277px;"
  >
    <nuxt-link :to="`/${prefix}/${profile.name}`">
      <img
        v-if="true"
        :src="profile.icon"
        class="rounded-full object-cover mx-auto w-16 h-16 md:w-24 md:h-24"
        :alt="`${profile.name}の写真`"
      />
      <img
        v-else
        src="@/assets/images/common/profile/icon_notfound.svg"
        :alt="`${profile.name}のアイコン`"
        class="rounded-full object-cover mx-auto w-16 h-16 md:w-24 md:h-24"
      />
      <p class="mt-2 text-sm">{{ profile.name }}</p>
      <p class="mt-2 hidden md:block">{{ cropText }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
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
  computed: {
    cropText() {
      console.log(this.profile.biography)
      if (this.profile.biography.length >= 34) {
        return `${this.profile.biography.substr(0, 31)}...`
      } else {
        return this.profile.biography
      }
    },
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
