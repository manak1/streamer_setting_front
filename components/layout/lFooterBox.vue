<template>
  <div
    class="fixed bottom-0 w-full overflow-hidden px-3 md:hidden bg-white shadow-sm z-50"
    style="box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); color: #555;"
  >
    <ul class="flex justify-between text-xs text-center">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="flex flex-col w-1/4"
      >
        <nuxt-link class="block py-2" :to="link.path">
          <img :src="link.icon" class="mx-auto" alt="" />
          <p>{{ link.text }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          path: '/',
          text: 'ホーム',
          icon: '/images/layout/footer/home-24px.svg',
        },
        {
          path: '/fortnite',
          text: '配信者一覧',
          icon: '/images/layout/footer/person-24px.svg',
        },
        {
          path: '/devices',
          text: 'デバイス一覧',
          icon: '/images/layout/footer/settings-24px.svg',
        },
        {
          path: '/search',
          text: '配信者を探す',
          icon: '/images/layout/footer/person_search-24px.svg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
