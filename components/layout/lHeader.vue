<template>
  <header class="w-full p-2 shadow-xl z-50 fixed bg-white">
    <div class="container mx-auto flex items-center justify-between">
      <img src="https://via.placeholder.com/60" class="rounded-full" alt="#" />
      <div class="flex space-x-3 items-center">
        <ul class="space-x-6 hidden sm:flex">
          <li class="p-2">
            <nuxt-link to="/">
              ホーム
            </nuxt-link>
          </li>
          <li class="p-2">
            <nuxt-link to="/fortnite">
              配信者一覧
            </nuxt-link>
          </li>
          <li class="p-2">
            <nuxt-link to="/gear">
              ギア一覧
            </nuxt-link>
          </li>
        </ul>
        <div class="hidden sm:block">
          <input
            type="text"
            class="w-64 p-3"
            placeholder="ストリーマーの名前を入力"
          />
        </div>
        <div class="block sm:hidden">
          メニュー
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>
