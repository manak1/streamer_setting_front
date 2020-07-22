<template>
  <section class="mx-auto mt-4" style="max-width: 65%;">
    <h2 class="text-center text-xl md:text-2xl font-bold">
      {{ name }}の使用デバイス一覧
    </h2>
    <ul class="flex flex-wrap justify-center mt-8">
      <li
        v-for="gear in gearList"
        :key="gear"
        class="w-full lg:w-1/4 md:w-1/3 block m-4"
      >
        <c-gear :gear="gear" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      gearList: [
        {
          name: 'Death Adder2013',
          image:
            'https://prosettings.net/wp-content/uploads/2019/09/Acer-XF250Q-Monitor.png',
          url: 'https://hello.com',
          price: 700,
        },
        {
          name: 'Death Adder2013',
          image:
            'https://prosettings.net/wp-content/uploads/2019/09/Acer-XF250Q-Monitor.png',
          url: 'https://hello.com',
          price: 20000,
        },
        {
          name: 'Death Adder2013',
          image:
            'https://prosettings.net/wp-content/uploads/2019/09/Acer-XF250Q-Monitor.png',
          url: 'https://hello.com',
          price: 1200,
        },
        {
          name: 'Death Adder2013',
          image:
            'https://prosettings.net/wp-content/uploads/2019/09/Acer-XF250Q-Monitor.png',
          url: 'https://hello.com',
          price: 2400,
        },
        {
          name: 'Death Adder2013',
          image:
            'https://prosettings.net/wp-content/uploads/2019/09/Acer-XF250Q-Monitor.png',
          url: 'https://hello.com',
          price: 200,
        },
        {
          name: 'Death Adder2013',
          image:
            'https://prosettings.net/wp-content/uploads/2019/09/Acer-XF250Q-Monitor.png',
          url: 'https://hello.com',
          price: 2000,
        },
      ],
    }
  },
}
</script>
