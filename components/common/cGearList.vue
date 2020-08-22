<template>
  <section class="mx-auto -mt-10 container md:container-md lg:container-lg">
    <h2 class="text-center text-xl md:text-2xl font-bold">
      {{ name }}の使用デバイス
    </h2>
    <ul class="flex flex-wrap justify-center mt-2 md:mt-8">
      <li
        v-for="(gear, index) in gearList"
        :key="index"
        class="w-full lg:w-1/4 md:w-1/3 block mx-4 my-2 md:m-4"
      >
        <c-gear :gear="gear" url="/gear" />
      </li>
    </ul>
    <div class="text-center mt-12">
      <c-button text="人気デバイス一覧へ" link="/gears" />
    </div>
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
